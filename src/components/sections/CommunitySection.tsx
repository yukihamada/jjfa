import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const CommunitySection = () => {
  return (
    <section className="py-16 px-4 bg-slate-50">
      <div className="container mx-auto max-w-3xl">
        <Card className="bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-slate-800">コミュニティへの参加</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-slate-600 leading-relaxed">
              柔術は単なる格闘技ではなく、人々が学び合い成長する温かな場。初心者も熟練者も、健康的なライフスタイルや新たな友情を育む場所として、JJFAはあなたを歓迎します。
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};