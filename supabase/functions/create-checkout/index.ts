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
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? ''
    )

    // Verify authentication
    const authHeader = req.headers.get('Authorization')
    if (!authHeader) {
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
      console.error('User error:', userError)
      return new Response(
        JSON.stringify({ error: '認証に失敗しました' }), 
        { 
          status: 401, 
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
      console.error('Membership check error:', membershipError)
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
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 400 
        }
      )
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
              description: 'JJFA DAOの社員権NFT',
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

    // Create purchase record
    const { error: purchaseError } = await supabaseClient
      .from('nft_purchases')
      .insert({
        user_id: user.id,
        amount: 100000,
        stripe_session_id: session.id,
      })

    if (purchaseError) {
      console.error('Purchase record creation failed:', purchaseError)
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
    console.error('Stripe error:', error)
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : '購入処理中にエラーが発生しました。もう一度お試しください。'
      }), 
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
})