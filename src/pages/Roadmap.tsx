import { PageTitle } from "@/components/PageTitle";
import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { Milestone, Globe, Users, Rocket, Flag, Calendar, Check, Trophy, Building, Sparkles, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Roadmap = () => {
  const { t } = useTranslation();

  const phases = [
    { icon: Building, color: "blue" },
    { icon: Rocket, color: "green" },
    { icon: Trophy, color: "purple" },
    { icon: Flag, color: "red" },
    { icon: Globe, color: "yellow" },
    { icon: Users, color: "indigo" },
    { icon: Sparkles, color: "pink" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50/50 to-slate-100/50">
      <PageTitle title={t('roadmap.title')} />
      <div className="container mx-auto py-12 px-4">
        <Card className="bg-white/90 backdrop-blur-md">
          <CardContent className="p-6">
            <h1 className="text-3xl font-bold text-center mb-8 text-slate-800">
              {t('roadmap.title')}
            </h1>

            {/* 関連ドキュメントへのリンク */}
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Link to="/whitepaper">
                <Button variant="outline" className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  ホワイトペーパー
                </Button>
              </Link>
              <Link to="/articles">
                <Button variant="outline" className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  定款
                </Button>
              </Link>
              <Link to="/operating-rules">
                <Button variant="outline" className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  運営規程
                </Button>
              </Link>
              <Link to="/token-rules">
                <Button variant="outline" className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  トークン規程
                </Button>
              </Link>
            </div>

            <div className="space-y-12">
              {[1, 2, 3, 4, 5, 6, 7].map((phase, index) => {
                const Icon = phases[index].icon;
                return (
                  <div key={phase} className="relative">
                    <div className="flex items-center gap-4">
                      <div className={`p-2 rounded-full bg-${phases[index].color}-100`}>
                        <Icon className={`w-8 h-8 text-${phases[index].color}-600 flex-shrink-0`} />
                      </div>
                      <h2 className="text-xl font-semibold text-slate-800">
                        {t(`roadmap.phase${phase}.title`)}
                      </h2>
                    </div>
                    <div className="ml-14 mt-4">
                      <ul className="list-disc space-y-3 text-slate-600">
                        {Object.keys(t(`roadmap.phase${phase}`, { returnObjects: true }))
                          .filter(key => key !== 'title')
                          .map(key => (
                            <li key={key} className="leading-relaxed">
                              {t(`roadmap.phase${phase}.${key}`)}
                            </li>
                          ))}
                      </ul>
                    </div>
                    {index < 6 && (
                      <div className="absolute left-6 top-16 bottom-0 w-px bg-slate-200 -mb-8" />
                    )}
                  </div>
                );
              })}
            </div>

            {/* コミュニティ参加へのCTA */}
            <div className="mt-16 text-center">
              <h3 className="text-xl font-semibold mb-4">JJFAの未来に参加しませんか？</h3>
              <div className="flex gap-4 justify-center">
                <Link to="/community">
                  <Button className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    コミュニティに参加
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="flex items-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    お問い合わせ
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Roadmap;