import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface EmailRequest {
  email: string;
  name: string;
  host: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set");
      throw new Error("Email service configuration error");
    }

    const { email, name, host }: EmailRequest = await req.json();
    console.log(`Sending welcome email to ${email} for ${name}`);

    const verifyUrl = `${host}/verify-email`;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "JJFA <noreply@jjforall.com>",
        to: [email],
        subject: "JJFAコミュニティへようこそ！",
        html: `
          <h1>こんにちは、${name}さん</h1>
          <p>JJFAコミュニティへのご登録ありがとうございます。</p>
          <p>このメールは、あなたのメールアドレスを確認するために送信されています。</p>
          <p>以下のリンクをクリックして、メールアドレスを確認してください：</p>
          <p><a href="${verifyUrl}">メールアドレスを確認する</a></p>
          <p>このメールに心当たりがない場合は、お手数ですが破棄してください。</p>
          <p>よろしくお願いいたします。</p>
          <p>JJFA運営チーム</p>
        `,
      }),
    });

    const responseData = await res.json();
    console.log("Resend API response:", responseData);

    if (res.ok) {
      return new Response(JSON.stringify(responseData), {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    } else {
      console.error("Resend API error:", responseData);
      throw new Error(responseData.message || "Failed to send email");
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