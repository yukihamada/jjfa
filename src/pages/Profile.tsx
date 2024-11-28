import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

const Profile = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<any>(null);
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        navigate("/");
        return;
      }
      setUser(user);
      const { data: profile } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();
      setProfile(profile);
      setLoading(false);
    };
    checkUser();
  }, [navigate]);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !profile) return;
    
    setUpdating(true);
    const { error } = await supabase
      .from("profiles")
      .update({
        username: profile.username,
        full_name: profile.full_name,
        bio: profile.bio,
        phone: profile.phone,
        address: profile.address,
      })
      .eq("id", user.id);

    if (error) {
      toast.error("プロフィールの更新に失敗しました");
    } else {
      toast.success("プロフィールを更新しました");
    }
    setUpdating(false);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="container max-w-2xl mx-auto px-4 py-8 mt-16">
      <h1 className="text-2xl font-bold mb-8">プロフィール設定</h1>
      <form onSubmit={handleUpdate} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">メールアドレス</label>
          <Input
            type="email"
            value={user?.email}
            disabled
            className="bg-gray-50"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">ユーザーネーム</label>
          <Input
            value={profile?.username || ""}
            onChange={(e) => setProfile({ ...profile, username: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">氏名</label>
          <Input
            value={profile?.full_name || ""}
            onChange={(e) => setProfile({ ...profile, full_name: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">自己紹介</label>
          <Textarea
            value={profile?.bio || ""}
            onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
            rows={4}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">電話番号</label>
          <Input
            value={profile?.phone || ""}
            onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">住所</label>
          <Input
            value={profile?.address || ""}
            onChange={(e) => setProfile({ ...profile, address: e.target.value })}
          />
        </div>
        <Button type="submit" disabled={updating}>
          {updating ? (
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
          ) : null}
          保存する
        </Button>
      </form>
    </div>
  );
};

export default Profile;