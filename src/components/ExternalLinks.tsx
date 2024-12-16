import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const ExternalLinks = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-2xl font-bold text-center mb-8 text-slate-800">JJFAのサービスで柔術の新時代へ</h2>
        <p className="text-center text-slate-600 mb-8">
          JJFAは最新技術と情報発信を融合し、柔術コミュニティ全体をサポートします。道場運営や大会管理、情報プラットフォームなど、多角的なサービスを提供しています。
        </p>
        <div className="grid gap-8">
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-slate-800">1. JiuEventPro</CardTitle>
              <CardDescription>
                大会運営をスムーズに行う総合管理ツール。JJFA公式戦はもちろん、既存の大会でも利用可能です。
              </CardDescription>
            </CardHeader>
            <CardContent>
              <a 
                href="https://jiuevent.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block w-full"
              >
                <Button 
                  variant="outline" 
                  className="w-full text-slate-800 border-slate-800 hover:bg-slate-100"
                >
                  ウェブサイトを訪れる
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-slate-800">2. JiuJitsu Lab</CardTitle>
              <CardDescription>
                初心者から上級者まで有益な情報が得られる包括的な柔術プラットフォーム。テクニック解説や最新ニュースを随時更新しています。
              </CardDescription>
            </CardHeader>
            <CardContent>
              <a 
                href="https://jiujitsu-lab.jjforall.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block w-full"
              >
                <Button 
                  variant="outline" 
                  className="w-full text-slate-800 border-slate-800 hover:bg-slate-100"
                >
                  ウェブサイトを訪れる
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExternalLinks;