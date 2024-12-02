import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { AccessToken } from 'https://esm.sh/livekit-server-sdk@1.2.7'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const { roomName, participantName, isPublisher } = await req.json()
    
    if (!roomName || !participantName) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // LiveKitのAPI KeyとSecretを環境変数から取得
    const apiKey = Deno.env.get('LIVEKIT_API_KEY')
    const apiSecret = Deno.env.get('LIVEKIT_API_SECRET')
    
    if (!apiKey || !apiSecret) {
      return new Response(
        JSON.stringify({ error: 'Server configuration error' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // トークンを生成
    const at = new AccessToken(apiKey, apiSecret, {
      identity: participantName,
      ttl: 3600 * 4, // 4時間
    })

    at.addGrant({
      room: roomName,
      roomJoin: true,
      canPublish: isPublisher,
      canSubscribe: true,
    })

    const token = at.toJwt()

    return new Response(
      JSON.stringify({ token }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})