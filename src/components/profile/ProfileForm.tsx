import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2, User, ExternalLink, Link as LinkIcon } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Link } from "react-router-dom";

interface ProfileFormProps {
  profile: any;
  user: any;
}

export const ProfileForm = ({ profile, user }: ProfileFormProps) => {
  const [updating, setUpdating] = useState(false);
  const [formData, setFormData] = useState({
    username: profile?.username || "",
    full_name: profile?.full_name || "",
    bio: profile?.bio || "",
  });

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
      })
      .eq("id", user.id);

    if (error) {
      console.error("Profile update error:", error);
      toast.error("プロフィールの更新に失敗しました");
    } else {
      toast.success("プロフィールを更新しました");
    }
    setUpdating(false);
  };

  const publicProfileUrl = profile?.username ? `${window.location.origin}/profile/${profile.username}` : null;

  return (
    <form onSubmit={handleUpdate}>
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <CardTitle>プロフィール情報</CardTitle>
              <CardDescription>基本的な情報を更新</CardDescription>
            </div>
            {profile?.username && (
              <div className="space-y-2 min-w-[200px]">
                <Link 
                  to={`/profile/${profile.username}`}
                  className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800"
                >
                  <ExternalLink className="w-4 h-4" />
                  公開プロフィールを見る
                </Link>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <LinkIcon className="w-4 h-4 shrink-0" />
                  <code className="text-xs bg-muted px-2 py-1 rounded break-all">{publicProfileUrl}</code>
                </div>
              </div>
            )}
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">ユーザーネーム (半角英数字とアンダースコアのみ)</label>
            <div className="flex gap-2">
              <User className="w-4 h-4 mt-3 text-gray-500" />
              <Input
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                pattern="^[a-zA-Z0-9_]*$"
                title="半角英数字とアンダースコアのみ使用できます"
                placeholder="username123"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">氏名</label>
            <div className="flex gap-2">
              <User className="w-4 h-4 mt-3 text-gray-500" />
              <Input
                value={formData.full_name}
                onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                placeholder="山田 太郎"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">自己紹介</label>
            <Textarea
              value={formData.bio}
              onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
              rows={4}
              placeholder="あなたについて教えてください"
            />
          </div>
          <Button type="submit" className="w-full" disabled={updating}>
            {updating && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
            保存する
          </Button>
        </CardContent>
      </Card>
    </form>
  );
};