import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { create, verify } from "https://deno.land/x/djwt@v2.8/mod.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const { roomName, participantName, isPublisher } = await req.json()
    console.log(`Creating token for room: ${roomName}, participant: ${participantName}`)

    if (!roomName || !participantName) {
      throw new Error('Missing required parameters')
    }

    const apiKey = Deno.env.get('LIVEKIT_API_KEY')
    const apiSecret = Deno.env.get('LIVEKIT_API_SECRET')
    const wsUrl = Deno.env.get('LIVEKIT_WS_URL')

    if (!apiKey || !apiSecret || !wsUrl) {
      throw new Error('Missing LiveKit credentials')
    }

    // Create JWT claims for LiveKit
    const now = Math.floor(Date.now() / 1000)
    const exp = now + (24 * 60 * 60) // 24 hours
    
    const claims = {
      iss: apiKey,
      sub: participantName,
      exp: exp,
      nbf: now,
      room: roomName,
      metadata: JSON.stringify({
        name: participantName
      }),
      video: {
        roomCreate: true,
        roomJoin: true,
        canPublish: isPublisher,
        canSubscribe: true,
      }
    }

    // Create JWT token
    const key = await crypto.subtle.importKey(
      "raw",
      new TextEncoder().encode(apiSecret),
      { name: "HMAC", hash: "SHA-256" },
      false,
      ["sign"]
    )

    const token = await create({ alg: "HS256", typ: "JWT" }, claims, key)
    console.log('Token created successfully')

    return new Response(
      JSON.stringify({ 
        token,
        wsUrl // Return the WebSocket URL along with the token
      }),
      { 
        headers: { 
          ...corsHeaders,
          'Content-Type': 'application/json' 
        } 
      },
    )
  } catch (error) {
    console.error('Error creating token:', error)
    return new Response(
      JSON.stringify({ error: error.message }), 
      { 
        status: 400,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json'
        }
      }
    )
  }
})