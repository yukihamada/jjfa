import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const RegistrationForm = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      toast({
        title: "エラー",
        description: "名前とメールアドレスを入力してください。",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "登録完了",
      description: "コミュニティへの参加申請を受け付けました。",
    });
  };

  return (
    <Card className="mb-12">
      <CardHeader>
        <CardTitle>参加登録フォーム</CardTitle>
        <CardDescription>
          以下のフォームに必要事項を入力してください
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
          <div className="space-y-2">
            <Label htmlFor="name">お名前</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="山田 太郎"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">メールアドレス</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@email.com"
            />
          </div>
          <Button type="submit" className="w-full">
            登録する
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};