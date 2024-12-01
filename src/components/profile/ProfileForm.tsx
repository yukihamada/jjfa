import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2, User, Phone, MapPin, Lock } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface ProfileFormProps {
  profile: any;
  user: any;
}

export const ProfileForm = ({ profile, user }: ProfileFormProps) => {
  const [updating, setUpdating] = useState(false);
  const [formData, setFormData] = useState(profile);

  const validateUsername = (username: string) => {
    return /^[a-zA-Z0-9_]*$/.test(username);
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    
    if (!validateUsername(formData.username)) {
      toast.error("ユーザーネームは半角英数字とアンダースコアのみ使用できます");
      return;
    }
    
    setUpdating(true);
    const { error } = await supabase
      .from("profiles")
      .update({
        username: formData.username,
        full_name: formData.full_name,
        bio: formData.bio,
        phone: formData.phone,
        address: formData.address,
      })
      .eq("id", user.id);

    if (error) {
      toast.error("プロフィールの更新に失敗しました");
    } else {
      toast.success("プロフィールを更新しました");
    }
    setUpdating(false);
  };

  return (
    <form onSubmit={handleUpdate}>
      <Card>
        <CardHeader>
          <CardTitle>プロフィール情報</CardTitle>
          <CardDescription>基本的な情報を更新</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">ユーザーネーム (半角英数字とアンダースコアのみ)</label>
            <div className="flex gap-2">
              <User className="w-4 h-4 mt-3 text-gray-500" />
              <Input
                value={formData?.username || ""}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                pattern="^[a-zA-Z0-9_]*$"
                title="半角英数字とアンダースコアのみ使用できます"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">氏名</label>
            <div className="flex gap-2">
              <User className="w-4 h-4 mt-3 text-gray-500" />
              <Input
                value={formData?.full_name || ""}
                onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">自己紹介</label>
            <Textarea
              value={formData?.bio || ""}
              onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
              rows={4}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium flex items-center gap-2">
              電話番号
              <span className="inline-flex items-center text-xs text-gray-500">
                <Lock className="w-3 h-3 mr-1" />
                非公開
              </span>
            </label>
            <div className="flex gap-2">
              <Phone className="w-4 h-4 mt-3 text-gray-500" />
              <Input
                value={formData?.phone || ""}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium flex items-center gap-2">
              住所
              <span className="inline-flex items-center text-xs text-gray-500">
                <Lock className="w-3 h-3 mr-1" />
                非公開
              </span>
            </label>
            <div className="flex gap-2">
              <MapPin className="w-4 h-4 mt-3 text-gray-500" />
              <Input
                value={formData?.address || ""}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              />
            </div>
          </div>
          <Button type="submit" className="w-full" disabled={updating}>
            {updating ? (
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            ) : null}
            保存する
          </Button>
        </CardContent>
      </Card>
    </form>
  );
};