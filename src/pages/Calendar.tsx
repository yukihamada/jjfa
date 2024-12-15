import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Calendar = () => {
  const { t, i18n } = useTranslation();
  const isJapanese = i18n.language === 'ja';

  // Current date: 2024/12/16
  const currentDate = new Date('2024-12-16');

  const allTournaments = [
    {
      organization: "IBJJF",
      name: "Asian Jiu-Jitsu IBJJF Championship 2024",
      date: "2024年6月28日～6月30日",
      location: "千葉ポートアリーナ（千葉県千葉市）",
      notes: "アジア最大規模のIBJJF公式大会",
      timestamp: new Date('2024-06-28')
    },
    {
      organization: "JBJJF",
      name: "GroundImpact 2024 EAST",
      date: "2024年7月21日",
      location: "横浜武道館（神奈川県横浜市）",
      notes: "東日本エリアの主要大会",
      timestamp: new Date('2024-07-21')
    },
    {
      organization: "SJJJF",
      name: "夏季柔術甲子園2024",
      date: "2024年9月15日",
      location: "国立代々木競技場 第二体育館（東京都）",
      notes: "キッズや高校生向けの大会",
      timestamp: new Date('2024-09-15')
    },
    {
      organization: "SJJJF",
      name: "SJJIF World Jiu-Jitsu Championship 2024",
      date: "2024年9月26日～9月29日",
      location: "名古屋市（愛知県）",
      notes: "世界規模の大会で、SJJJFが主催",
      timestamp: new Date('2024-09-26')
    },
    {
      organization: "JBJJF",
      name: "DEEP JIU-JITSU CUP 2024",
      date: "2024年11月10日",
      location: "横浜武道館（神奈川県横浜市）",
      notes: "JBJJFとDEEPの合同イベント",
      timestamp: new Date('2024-11-10')
    },
    {
      organization: "その他",
      name: "ブルテリアオープン2024",
      date: "2024年11月24日",
      location: "浜松武道館（静岡県浜松市）",
      notes: "ブルテリア主催のオープントーナメント",
      timestamp: new Date('2024-11-24')
    },
    {
      organization: "JBJJF",
      name: "第25回全日本ブラジリアン柔術選手権",
      date: "2024年11月30日～12月1日",
      location: "武蔵野の森総合スポーツプラザ（東京都府中市）",
      notes: "日本国内で最も権威のある大会",
      timestamp: new Date('2024-11-30')
    },
    {
      organization: "SJJJF",
      name: "Central Japan Open No-Gi Championship 2024",
      date: "2024年12月15日",
      location: "青山記念武道館（愛知県）",
      notes: "No-Gi（道着なし）専門の大会",
      timestamp: new Date('2024-12-15')
    },
    {
      organization: "JBJJF",
      name: "第16回九州柔術選手権",
      date: "2024年12月22日",
      location: "福岡武道館（福岡県福岡市）",
      notes: "九州エリアの主要大会",
      timestamp: new Date('2024-12-22')
    },
    {
      organization: "JBJJF",
      name: "第17回関東柔術選手権",
      date: "2024年12月29日",
      location: "墨田区総合体育館（東京都）",
      notes: "年末に行われる関東エリアの大会",
      timestamp: new Date('2024-12-29')
    },
    {
      organization: "その他",
      name: "RIZIN甲子園柔術フェスティバルカップ2024",
      date: "2024年12月30日",
      location: "さいたまスーパーアリーナ（埼玉県）",
      notes: "柔術とエンターテインメントを融合したイベント",
      timestamp: new Date('2024-12-30')
    }
  ];

  // Filter tournaments based on the current date
  const upcomingTournaments = allTournaments.filter(
    tournament => tournament.timestamp >= currentDate
  ).sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime());

  const pastTournaments = allTournaments.filter(
    tournament => tournament.timestamp < currentDate
  ).sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());

  return (
    <>
      <Helmet>
        <title>{isJapanese ? "大会カレンダー | JJFA" : "Tournament Calendar | JJFA"}</title>
      </Helmet>
      <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
          {isJapanese ? "大会カレンダー" : "Tournament Calendar"}
        </h1>
        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4 sm:mb-6">
            <TabsTrigger value="upcoming" className="text-sm sm:text-base">
              {isJapanese ? "今後の大会" : "Upcoming Tournaments"}
            </TabsTrigger>
            <TabsTrigger value="past" className="text-sm sm:text-base">
              {isJapanese ? "過去の大会" : "Past Tournaments"}
            </TabsTrigger>
          </TabsList>
          <TabsContent value="upcoming">
            <ScrollArea className="h-[calc(100vh-10rem)]">
              <div className="space-y-3">
                {upcomingTournaments.map((tournament, index) => (
                  <Card key={index} className="border shadow-sm">
                    <CardHeader className="pb-2 px-3 sm:px-4">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-2">
                        <CardTitle className="text-base sm:text-lg font-bold break-words">
                          {tournament.name}
                        </CardTitle>
                        <span className="text-xs sm:text-sm font-semibold text-muted-foreground whitespace-nowrap">
                          {tournament.organization}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent className="px-3 sm:px-4">
                      <div className="space-y-1.5 text-sm">
                        <p className="font-medium text-primary">{tournament.date}</p>
                        <p className="text-muted-foreground text-xs sm:text-sm">{tournament.location}</p>
                        <p className="text-muted-foreground italic text-xs sm:text-sm">{tournament.notes}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </TabsContent>
          <TabsContent value="past">
            <ScrollArea className="h-[calc(100vh-10rem)]">
              <div className="space-y-3">
                {pastTournaments.map((tournament, index) => (
                  <Card key={index} className="border shadow-sm">
                    <CardHeader className="pb-2 px-3 sm:px-4">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-2">
                        <CardTitle className="text-base sm:text-lg font-bold break-words">
                          {tournament.name}
                        </CardTitle>
                        <span className="text-xs sm:text-sm font-semibold text-muted-foreground whitespace-nowrap">
                          {tournament.organization}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent className="px-3 sm:px-4">
                      <div className="space-y-1.5 text-sm">
                        <p className="font-medium text-primary">{tournament.date}</p>
                        <p className="text-muted-foreground text-xs sm:text-sm">{tournament.location}</p>
                        <p className="text-muted-foreground italic text-xs sm:text-sm">{tournament.notes}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default Calendar;