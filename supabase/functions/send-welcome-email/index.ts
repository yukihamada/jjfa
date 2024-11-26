import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface EmailRequest {
  to: string;
  name: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { to, name }: EmailRequest = await req.json();

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "JJFA <noreply@jjforall.com>", // Please update this with your verified domain
        to: [to],
        subject: "JJFAコミュニティへようこそ！",
        html: `
          <h1>こんにちは、${name}さん</h1>
          <p>JJFAコミュニティへのご登録ありがとうございます。</p>
          <p>このメールは、あなたのメールアドレスを確認するために送信されています。</p>
          <p>以下のリンクをクリックして、メールアドレスを確認してください：</p>
          <p><a href="https://jjforall.com/verify-email">メールアドレスを確認する</a></p>
          <p>このメールに心当たりがない場合は、お手数ですが破棄してください。</p>
          <p>よろしくお願いいたします。</p>
          <p>JJFA運営チーム</p>
        `,
      }),
    });

    if (res.ok) {
      const data = await res.json();
      console.log("Email sent successfully:", data);
      return new Response(JSON.stringify(data), {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    } else {
      const error = await res.text();
      console.error("Error sending email:", error);
      return new Response(JSON.stringify({ error }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
  } catch (error) {
    console.error("Error in send-welcome-email function:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
};

serve(handler);