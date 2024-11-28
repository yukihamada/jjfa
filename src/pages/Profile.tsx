import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Loader2, Mail, User, Phone, MapPin } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { FighterCard } from "@/components/profile/FighterCard";
import { MembershipCard } from "@/components/profile/MembershipCard";
import { DAOCard } from "@/components/profile/DAOCard";

const Profile = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<any>(null);
  const [fighter, setFighter] = useState<any>(null);
  const [member, setMember] = useState<any>(null);
  const [newEmail, setNewEmail] = useState("");

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        navigate("/");
        return;
      }
      setUser(user);
      
      // Get profile data
      const { data: profile } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();
      setProfile(profile);

      // Get fighter data
      const { data: fighter } = await supabase
        .from("fighters")
        .select(`
          *,
          belt:belts(name, color),
          dojo:dojos(name)
        `)
        .eq("user_id", user.id)
        .single();
      setFighter(fighter);

      // Get member data
      const { data: member } = await supabase
        .from("jjfa_members")
        .select("*")
        .eq("user_id", user.id)
        .single();
      setMember(member);

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

  const handlePurchaseNFT = () => {
    // TODO: Implement NFT purchase logic
    toast.info("社員権NFTの購入機能は準備中です");
  };

  const refreshFighterData = async () => {
    if (!user) return;
    
    const { data: fighter } = await supabase
      .from("fighters")
      .select(`
        *,
        belt:belts(name, color),
        dojo:dojos(name)
      `)
      .eq("user_id", user.id)
      .single();
    setFighter(fighter);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="container max-w-4xl mx-auto px-4 py-8 mt-16">
      <h1 className="text-2xl font-bold mb-8">プロフィール設定</h1>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="profile">基本情報</TabsTrigger>
          <TabsTrigger value="membership">会員情報</TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <div className="grid gap-6 md:grid-cols-2">
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
                    value={user?.email}
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
                        value={profile?.username || ""}
                        onChange={(e) => setProfile({ ...profile, username: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">氏名</label>
                    <div className="flex gap-2">
                      <User className="w-4 h-4 mt-3 text-gray-500" />
                      <Input
                        value={profile?.full_name || ""}
                        onChange={(e) => setProfile({ ...profile, full_name: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">自己紹介</label>
                    <Textarea
                      value={profile?.bio || ""}
                      onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                      rows={4}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">電話番号</label>
                    <div className="flex gap-2">
                      <Phone className="w-4 h-4 mt-3 text-gray-500" />
                      <Input
                        value={profile?.phone || ""}
                        onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">住所</label>
                    <div className="flex gap-2">
                      <MapPin className="w-4 h-4 mt-3 text-gray-500" />
                      <Input
                        value={profile?.address || ""}
                        onChange={(e) => setProfile({ ...profile, address: e.target.value })}
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
          </div>
        </TabsContent>

        <TabsContent value="membership">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-6">
              <FighterCard 
                fighter={fighter} 
                onRegistrationSuccess={refreshFighterData}
              />
              <MembershipCard 
                member={member} 
                onPurchaseNFT={handlePurchaseNFT} 
              />
            </div>
            <DAOCard onPurchaseNFT={handlePurchaseNFT} />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Profile;
