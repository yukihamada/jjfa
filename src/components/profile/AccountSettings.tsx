import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2, Mail } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

interface AccountSettingsProps {
  userEmail: string;
}

export const AccountSettings = ({ userEmail }: AccountSettingsProps) => {
  const [newEmail, setNewEmail] = useState("");
  const [updating, setUpdating] = useState(false);

  const handleEmailUpdate = async () => {
    if (!newEmail) {
      toast.error("新しいメールアドレスを入力してください");
      return;
    }

    setUpdating(true);
    const { error } = await supabase.auth.updateUser({ email: newEmail });
    
    if (error) {
      toast.error("メールアドレスの更新に失敗しました");
    } else {
      toast.success("確認メールを送信しました。メールを確認して更新を完了してください");
      setNewEmail("");
    }
    setUpdating(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>アカウント情報</CardTitle>
        <CardDescription>メールアドレスの変更</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">現在のメールアドレス</label>
          <Input
            type="email"
            value={userEmail}
            disabled
            className="bg-gray-50"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">新しいメールアドレス</label>
          <div className="flex gap-2">
            <Input
              type="email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              placeholder="新しいメールアドレス"
            />
            <Button 
              onClick={handleEmailUpdate}
              disabled={updating}
            >
              {updating ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Mail className="w-4 h-4 mr-2" />}
              変更
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};