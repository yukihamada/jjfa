import { PageTitle } from "@/components/PageTitle";
import { Card, CardContent } from "@/components/ui/card";
import { Milestone, Globe, Users, Rocket, Flag, Calendar, Check, Trophy, Building, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";

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
      <PageTitle title="ロードマップ" />
      <div className="container mx-auto py-12 px-4">
        <Card className="bg-white/90 backdrop-blur-md">
          <CardContent className="p-6">
            <h1 className="text-3xl font-bold text-center mb-8 text-slate-800">
              {t('roadmap.title')}
            </h1>

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
                          .map(key => {
                            const text = t(`roadmap.phase${phase}.${key}`);
                            const isCompleted = (
                              text.includes("コミュニティ掲示板") ||
                              text.includes("トークン規程") ||
                              text.includes("定款") ||
                              text.includes("運用規程") ||
                              text.includes("大会ルール")
                            );

                            let content = text;
                            if (text.includes("コミュニティ掲示板")) {
                              content = text.replace(
                                "コミュニティ掲示板",
                                `<a href="/community" class="text-blue-600 hover:underline">コミュニティ掲示板</a>`
                              );
                            }
                            if (text.includes("トークン規程")) {
                              content = text.replace(
                                "トークン規程",
                                `<a href="/token-rules" class="text-blue-600 hover:underline">トークン規程</a>`
                              );
                            }
                            if (text.includes("定款")) {
                              content = text.replace(
                                "定款",
                                `<a href="/articles" class="text-blue-600 hover:underline">定款</a>`
                              );
                            }
                            if (text.includes("運用規程")) {
                              content = text.replace(
                                "運用規程",
                                `<a href="/operating-rules" class="text-blue-600 hover:underline">運用規程</a>`
                              );
                            }
                            if (text.includes("大会ルール")) {
                              content = text.replace(
                                "大会ルール",
                                `<a href="/tournament-rules" class="text-blue-600 hover:underline">大会ルール</a>`
                              );
                            }

                            return (
                              <li key={key} className="leading-relaxed flex items-start gap-2">
                                {isCompleted && (
                                  <Check className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                )}
                                <span dangerouslySetInnerHTML={{ __html: content }} />
                              </li>
                            );
                          })}
                      </ul>
                    </div>
                    {index < 6 && (
                      <div className="absolute left-6 top-16 bottom-0 w-px bg-slate-200 -mb-8" />
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-16 text-center">
              <h3 className="text-xl font-semibold mb-4">JJFAの未来に参加しませんか？</h3>
              <div className="flex gap-4 justify-center">
                <a href="/contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-slate-800 text-white hover:bg-slate-700 transition-colors">
                  お問い合わせ
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Roadmap;