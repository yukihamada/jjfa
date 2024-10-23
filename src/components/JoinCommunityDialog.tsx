import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { CalendarDays, Users, MessageSquare, Gift, HelpCircle } from "lucide-react";

export function JoinCommunityDialog() {
  const { toast } = useToast();
  const { t } = useTranslation();
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
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" className="bg-slate-800 text-white hover:bg-slate-700">
          {t('hero.joinCommunity')}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>コミュニティに参加する</DialogTitle>
          <DialogDescription>
            JJFAコミュニティで柔術の魅力を共有しましょう
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="register" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="register">登録</TabsTrigger>
            <TabsTrigger value="about">概要</TabsTrigger>
            <TabsTrigger value="events">イベント</TabsTrigger>
            <TabsTrigger value="benefits">特典</TabsTrigger>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
          </TabsList>

          <TabsContent value="register">
            <Card>
              <CardHeader>
                <CardTitle>参加登録フォーム</CardTitle>
                <CardDescription>
                  以下のフォームに必要事項を入力してください
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
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
          </TabsContent>

          <TabsContent value="about">
            <Card>
              <CardHeader>
                <CardTitle>コミュニティについて</CardTitle>
                <CardDescription>
                  JJFAコミュニティの特徴と活動内容
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Users className="h-5 w-5 mt-1" />
                  <div>
                    <h4 className="font-semibold">活発な交流</h4>
                    <p>経験豊富な指導者や仲間との交流を通じて、技術と知識を深めることができます。</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MessageSquare className="h-5 w-5 mt-1" />
                  <div>
                    <h4 className="font-semibold">オンラインサポート</h4>
                    <p>LINEグループやDiscordでいつでも質問や相談が可能です。</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="events">
            <Card>
              <CardHeader>
                <CardTitle>今後のイベント</CardTitle>
                <CardDescription>
                  参加可能なイベントやワークショップの一覧
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  <Calendar className="w-full" mode="single" />
                  <div className="space-y-4">
                    <div className="border p-4 rounded-lg">
                      <h4 className="font-semibold">技術セミナー</h4>
                      <p className="text-sm text-gray-500">2024年3月15日</p>
                      <p>基本テクニックの解説と実践</p>
                    </div>
                    <div className="border p-4 rounded-lg">
                      <h4 className="font-semibold">オンライン質問会</h4>
                      <p className="text-sm text-gray-500">2024年3月20日</p>
                      <p>経験者との質疑応答セッション</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="benefits">
            <Card>
              <CardHeader>
                <CardTitle>会員特典</CardTitle>
                <CardDescription>
                  コミュニティメンバー限定の特典
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Gift className="h-5 w-5 mt-1" />
                  <div>
                    <h4 className="font-semibold">限定コンテンツ</h4>
                    <p>トップ選手による技術解説動画や、オンラインセミナーへの優先参加権</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CalendarDays className="h-5 w-5 mt-1" />
                  <div>
                    <h4 className="font-semibold">イベント優待</h4>
                    <p>各種イベントやトーナメントの優先予約と割引特典</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="faq">
            <Card>
              <CardHeader>
                <CardTitle>よくある質問</CardTitle>
                <CardDescription>
                  コミュニティについてよくある質問と回答
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-4">
                  <HelpCircle className="h-5 w-5 mt-1" />
                  <div>
                    <h4 className="font-semibold">初心者でも参加できますか？</h4>
                    <p>はい、経験レベルに関係なく参加いただけます。初心者向けのコンテンツも充実しています。</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <HelpCircle className="h-5 w-5 mt-1" />
                  <div>
                    <h4 className="font-semibold">退会はいつでもできますか？</h4>
                    <p>はい、いつでも自由に退会が可能です。</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}