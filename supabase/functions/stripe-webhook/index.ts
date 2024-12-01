import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import Stripe from 'https://esm.sh/stripe@14.21.0?target=deno'

const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') as string, {
  apiVersion: '2023-10-16',
  httpClient: Stripe.createFetchHttpClient(),
})

const cryptoProvider = Stripe.createSubtleCryptoProvider()

serve(async (req) => {
  const signature = req.headers.get('Stripe-Signature')
  const body = await req.text()
  
  let event
  try {
    event = await stripe.webhooks.constructEventAsync(
      body,
      signature!,
      Deno.env.get('STRIPE_WEBHOOK_SIGNING_SECRET')!,
      undefined,
      cryptoProvider
    )
  } catch (err) {
    return new Response(err.message, { status: 400 })
  }

  const supabaseClient = createClient(
    Deno.env.get('SUPABASE_URL') ?? '',
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
  )

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object

    // Update purchase status
    const { error: purchaseError } = await supabaseClient
      .from('nft_purchases')
      .update({ status: 'completed' })
      .eq('stripe_session_id', session.id)

    if (purchaseError) {
      console.error('Failed to update purchase:', purchaseError)
      return new Response(JSON.stringify({ error: 'Failed to update purchase' }), { status: 500 })
    }

    // Create DAO membership
    const { error: membershipError } = await supabaseClient
      .from('dao_memberships')
      .insert({
        user_id: session.metadata.user_id,
        status: 'active',
        purchase_date: new Date().toISOString(),
      })

    if (membershipError) {
      console.error('Failed to create membership:', membershipError)
      return new Response(JSON.stringify({ error: 'Failed to create membership' }), { status: 500 })
    }
  }

  return new Response(JSON.stringify({ received: true }), { status: 200 })
})