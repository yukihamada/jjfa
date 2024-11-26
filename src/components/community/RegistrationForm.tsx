import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

export const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Generate a random password
      const password = Math.random().toString(36).slice(-8);

      const { error: signUpError } = await supabase.auth.signUp({
        email,
        password,
      });

      if (signUpError) throw signUpError;

      const { error: registrationError } = await supabase.from("community_registrations").insert([
        {
          name,
          email,
        },
      ]);

      if (registrationError) throw registrationError;

      // Send welcome email with current host
      const { error: emailError } = await supabase.functions.invoke('send-welcome-email', {
        body: { 
          to: email, 
          name,
          host: window.location.origin 
        }
      });

      if (emailError) {
        console.error('Error sending welcome email:', emailError);
        // Don't throw here, as the registration was successful
      }

      toast.success("コミュニティへの参加申請を受け付けました。メールをご確認ください。");
      setName("");
      setEmail("");
    } catch (error: any) {
      console.error("Registration error:", error);
      toast.error(error.message || "登録中にエラーが発生しました。");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <div>
        <Input
          type="text"
          placeholder="お名前"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full"
        />
      </div>
      <div>
        <Input
          type="email"
          placeholder="メールアドレス"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full"
        />
      </div>
      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? "送信中..." : "登録する"}
      </Button>
    </form>
  );
};