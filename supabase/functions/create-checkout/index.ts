import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import Stripe from 'https://esm.sh/stripe@14.21.0?target=deno'

const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') as string, {
  apiVersion: '2023-10-16',
  httpClient: Stripe.createFetchHttpClient(),
})

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Initialize Supabase client
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? ''
    )

    // Verify authentication
    const authHeader = req.headers.get('Authorization')
    if (!authHeader) {
      console.error('認証ヘッダーがありません')
      return new Response(
        JSON.stringify({ error: '認証が必要です' }), 
        { 
          status: 401, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    const { data: { user }, error: userError } = await supabaseClient.auth.getUser(authHeader.replace('Bearer ', ''))
    if (userError || !user) {
      console.error('認証エラー:', userError)
      return new Response(
        JSON.stringify({ error: '認証に失敗しました' }), 
        { 
          status: 401, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // Check NFT sales config
    const { data: salesConfig, error: salesConfigError } = await supabaseClient
      .from('nft_sales_config')
      .select('*')
      .single()

    if (salesConfigError) {
      console.error('販売設定の取得に失敗:', salesConfigError)
      return new Response(
        JSON.stringify({ error: '販売設定の取得に失敗しました' }), 
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // Check if sale has ended
    if (new Date() > new Date(salesConfig.end_date)) {
      return new Response(
        JSON.stringify({ error: '販売期間が終了しました' }), 
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // Check if sold out
    if (salesConfig.current_supply >= salesConfig.max_supply) {
      return new Response(
        JSON.stringify({ error: '完売しました' }), 
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // Check if user already has an active DAO membership
    const { data: existingMembership, error: membershipError } = await supabaseClient
      .from('dao_memberships')
      .select('*')
      .eq('user_id', user.id)
      .eq('status', 'active')
      .single()

    if (membershipError && membershipError.code !== 'PGRST116') {
      console.error('会員情報チェックエラー:', membershipError)
      return new Response(
        JSON.stringify({ error: '会員情報の確認中にエラーが発生しました' }), 
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    if (existingMembership) {
      return new Response(
        JSON.stringify({ error: 'すでにDAO会員として登録されています' }), 
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    try {
      // Create purchase record first
      const { error: purchaseError } = await supabaseClient
        .from('nft_purchases')
        .insert({
          user_id: user.id,
          amount: 100000,
          status: 'pending'
        })

      if (purchaseError) {
        console.error('購入記録作成エラー:', purchaseError)
        throw new Error('購入記録の作成に失敗しました')
      }

      // Create Stripe checkout session
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: 'jpy',
              product_data: {
                name: 'JJFA DAO NFT',
                description: 'JJFA DAOの社員権NFT（限定100枚）',
              },
              unit_amount: 100000,
            },
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `${req.headers.get('origin')}/profile?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.get('origin')}/profile`,
        metadata: {
          user_id: user.id,
        },
      })

      // Update purchase record with session ID
      const { error: updateError } = await supabaseClient
        .from('nft_purchases')
        .update({ stripe_session_id: session.id })
        .eq('user_id', user.id)
        .eq('status', 'pending')

      if (updateError) {
        console.error('購入記録更新エラー:', updateError)
        throw new Error('購入記録の更新に失敗しました')
      }

      return new Response(
        JSON.stringify({ url: session.url }), 
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    } catch (error) {
      console.error('Stripeセッション作成エラー:', error)
      return new Response(
        JSON.stringify({ error: error instanceof Error ? error.message : 'チェックアウトセッションの作成に失敗しました' }), 
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }
  } catch (error) {
    console.error('予期せぬエラー:', error)
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : '予期せぬエラーが発生しました。もう一度お試しください。'
      }), 
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
})