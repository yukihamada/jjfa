import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // 送信処理をシミュレート
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "送信完了",
      description: "お問い合わせを受け付けました。担当者からご連絡させていただきます。",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>お問い合わせフォーム</CardTitle>
        <CardDescription>
          ご質問・ご相談は以下のフォームからお願いします
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">お名前 *</Label>
            <Input 
              id="name" 
              required 
              placeholder="山田 太郎"
              className="bg-white"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">メールアドレス *</Label>
            <Input 
              id="email" 
              type="email" 
              required 
              placeholder="example@email.com"
              className="bg-white"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject">件名 *</Label>
            <Input 
              id="subject" 
              required 
              placeholder="お問い合わせ内容の件名"
              className="bg-white"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">お問い合わせ内容 *</Label>
            <Textarea 
              id="message" 
              required
              placeholder="ご質問・ご相談内容を詳しくご記入ください"
              className="bg-white min-h-[150px]"
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-slate-800 text-white hover:bg-slate-700"
            disabled={isSubmitting}
          >
            {isSubmitting ? "送信中..." : "送信する"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};