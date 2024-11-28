import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2, User, Phone, MapPin } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface ProfileFormProps {
  profile: any;
  user: any;
}

export const ProfileForm = ({ profile, user }: ProfileFormProps) => {
  const [updating, setUpdating] = useState(false);
  const [formData, setFormData] = useState(profile);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    
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
            <label className="text-sm font-medium">ユーザーネーム</label>
            <div className="flex gap-2">
              <User className="w-4 h-4 mt-3 text-gray-500" />
              <Input
                value={formData?.username || ""}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
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
            <label className="text-sm font-medium">電話番号</label>
            <div className="flex gap-2">
              <Phone className="w-4 h-4 mt-3 text-gray-500" />
              <Input
                value={formData?.phone || ""}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">住所</label>
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