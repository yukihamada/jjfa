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
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
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

    try {
      // Create Stripe checkout session first
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

      // Only create purchase record after successful session creation
      const { error: purchaseError } = await supabaseClient
        .from('nft_purchases')
        .insert({
          user_id: user.id,
          amount: 100000,
          status: 'pending',
          stripe_session_id: session.id
        })

      if (purchaseError) {
        console.error('購入記録作成エラー:', purchaseError)
        return new Response(
          JSON.stringify({ error: '購入記録の作成に失敗しました' }), 
          { 
            status: 500, 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          }
        )
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