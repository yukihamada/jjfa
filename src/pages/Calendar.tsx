import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const Calendar = () => {
  const { t, i18n } = useTranslation();
  const isJapanese = i18n.language === 'ja';

  const tournaments = [
    {
      organization: "IBJJF",
      name: "IBJJF Asian Championship 2024",
      date: "2024年12月12日～12月14日",
      location: "日本（詳細未定）",
      notes: "アジア最大規模の柔術大会で、世界中から選手が集まります"
    },
    {
      organization: "JBJJF",
      name: "第16回九州柔術選手権",
      date: "2024年12月22日",
      location: "福岡県・福岡武道館",
      notes: "九州エリアでの主要大会"
    },
    {
      organization: "JBJJF",
      name: "第17回関東柔術選手権",
      date: "2024年12月28日",
      location: "墨田区総合体育館（東京都）",
      notes: "関東エリアでの年末大会"
    },
    {
      organization: "JBJJF",
      name: "DEEP JIU-JITSU CUP 2024",
      date: "2024年11月10日",
      location: "横浜武道館（神奈川県）",
      notes: "JBJJFとDEEPの合同イベント"
    },
    {
      organization: "SJJJF",
      name: "The 3rd Reversal Jiu Jitsu Cup in Fukuoka",
      date: "2024年2月11日",
      location: "春日市総合スポーツセンター（福岡県）",
      notes: "地域密着型の大会"
    },
    {
      organization: "SJJJF",
      name: "Asia No-Gi Cup 2025",
      date: "2025年2月9日",
      location: "駒沢オリンピック公園体育館（東京都）",
      notes: "No-Gi（道着なし）専門の大会"
    },
    {
      organization: "その他",
      name: "GroundImpact 2024 EAST",
      date: "2024年7月21日",
      location: "横浜武道館（神奈川県）",
      notes: "JBJJF主催の東日本エリア大会"
    },
    {
      organization: "その他",
      name: "第7回全日本マスター柔術オープン",
      date: "2024年8月3日",
      location: "Asueアリーナ大阪（大阪府）",
      notes: "マスター世代（30歳以上）向けの大会"
    }
  ];

  return (
    <>
      <Helmet>
        <title>{isJapanese ? "大会カレンダー | JJFA" : "Tournament Calendar | JJFA"}</title>
      </Helmet>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">
          {isJapanese ? "大会カレンダー" : "Tournament Calendar"}
        </h1>
        <ScrollArea className="h-[calc(100vh-12rem)]">
          <div className="space-y-4">
            {tournaments.map((tournament, index) => (
              <Card key={index}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg font-bold">
                      {tournament.name}
                    </CardTitle>
                    <span className="text-sm font-semibold text-muted-foreground">
                      {tournament.organization}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1 text-sm">
                    <p className="font-medium">{tournament.date}</p>
                    <p className="text-muted-foreground">{tournament.location}</p>
                    <p className="text-muted-foreground italic">{tournament.notes}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </div>
    </>
  );
};

export default Calendar;