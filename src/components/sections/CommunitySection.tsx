import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const CommunitySection = () => {
  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="container mx-auto max-w-4xl">
        <Card className="bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-slate-800">コミュニティへの参加</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-slate-600 leading-relaxed">
              柔術は単なる格闘技ではなく、共に学び、高め合う「人の輪」を育むスポーツです。JJFAは、初心者から熟練者まで、誰もが安心して参加できる温かいコミュニティを提供します。私たちのコミュニティに加わることで、健康的なライフスタイルの実践はもちろん、新たな友人やメンターとの出会いを通じて、人生そのものを豊かにしていくことができるでしょう。
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};