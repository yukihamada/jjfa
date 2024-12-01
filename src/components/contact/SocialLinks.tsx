import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Send, Share2, Users } from "lucide-react";
import { Link } from "react-router-dom";

export const SocialLinks = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>コミュニティに参加</CardTitle>
        <CardDescription>
          各種SNSプラットフォームでJJFAコミュニティに参加できます
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button
          variant="outline"
          className="w-full justify-start gap-2"
          asChild
        >
          <Link to="/community">
            <Users className="w-5 h-5" />
            JJFAコミュニティに参加
          </Link>
        </Button>
        
        <Button
          variant="outline"
          className="w-full justify-start gap-2"
          onClick={() => window.open('https://discord.gg/jjfa', '_blank')}
        >
          <Share2 className="w-5 h-5" />
          Discordサーバーに参加
        </Button>
        
        <Button
          variant="outline"
          className="w-full justify-start gap-2"
          onClick={() => window.open('https://line.me/ti/p/@jjfa', '_blank')}
        >
          <MessageCircle className="w-5 h-5" />
          LINE公式アカウントを追加
        </Button>
        
        <Button
          variant="outline"
          className="w-full justify-start gap-2"
          onClick={() => window.open('https://t.me/jjfa', '_blank')}
        >
          <Send className="w-5 h-5" />
          Telegramグループに参加
        </Button>
      </CardContent>
    </Card>
  );
};