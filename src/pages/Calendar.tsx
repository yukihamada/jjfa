import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TournamentList } from "@/components/calendar/TournamentList";

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
      date: "2025年1月19日",
      location: "横浜武道館（神奈川県）",
      notes: "階級別およびオープンクラスの試合が行われる",
      timestamp: new Date('2025-01-19')
    },
    {
      organization: "ASJJF",
      name: "東京国際冬季柔術選手権",
      date: "2025年1月19日",
      location: "墨田区総合体育館（東京都）",
      notes: "道着（ギ）部門の大会",
      timestamp: new Date('2025-01-19')
    },
    {
      organization: "ASJJF",
      name: "東京国際冬季ノーギ選手権",
      date: "2025年1月19日",
      location: "墨田区総合体育館（東京都）",
      notes: "ノーギ（道着なし）部門の大会",
      timestamp: new Date('2025-01-19')
    },
    {
      organization: "ASJJF",
      name: "MARIANAS PRO JAPAN",
      date: "2025年2月8日",
      location: "駒沢オリンピック公園体育館（東京都）",
      notes: "国際的な柔術大会",
      timestamp: new Date('2025-02-08')
    },
    {
      organization: "ASJJF",
      name: "アジア柔術カップ2025",
      date: "2025年2月9日",
      location: "駒沢オリンピック公園体育館（東京都）",
      notes: "アジア規模の柔術大会",
      timestamp: new Date('2025-02-09')
    },
    {
      organization: "ASJJF",
      name: "アジアノーギカップ2025",
      date: "2025年2月9日",
      location: "駒沢オリンピック公園体育館（東京都）",
      notes: "ノーギ部門の大会",
      timestamp: new Date('2025-02-09')
    },
    {
      organization: "ASJJF",
      name: "2025 Flipsports Japan International Jiu Jitsu Open",
      date: "2025年2月15日",
      location: "愛知県武道館（愛知県名古屋市）",
      notes: "国際オープントーナメント",
      timestamp: new Date('2025-02-15')
    },
    {
      organization: "ASJJF",
      name: "2025 Flipsports Japan International No-Gi Open",
      date: "2025年2月15日",
      location: "愛知県武道館（愛知県名古屋市）",
      notes: "ノーギ部門の国際大会",
      timestamp: new Date('2025-02-15')
    },
    {
      organization: "ASJJF",
      name: "第12回Copa Dumau De Jiu Jitsu 2025",
      date: "2025年2月16日",
      location: "愛知県武道館（愛知県名古屋市）",
      notes: "国内外の選手が参加する柔術大会",
      timestamp: new Date('2025-02-16')
    },
    {
      organization: "その他",
      name: "KIT10 (プロ柔術大会)",
      date: "2025年2月23日",
      location: "新百合21ホール（神奈川県川崎市）",
      notes: "プロ選手が集う有観客の柔術イベント",
      timestamp: new Date('2025-02-23')
    },
    {
      organization: "JBJJF",
      name: "第19回全日本マスター柔術選手権",
      date: "2025年2月28日",
      location: "高崎アリーナ（群馬県）",
      notes: "マスター世代（30歳以上）向けの全国大会",
      timestamp: new Date('2025-02-28')
    },
    {
      organization: "SJJJF",
      name: "The 3rd リバーサル柔術カップ福岡",
      date: "2025年2月11日",
      location: "春日市総合スポーツセンター（福岡県）",
      notes: "地域密着型の柔術大会",
      timestamp: new Date('2025-02-11')
    },
    {
      organization: "JJFA",
      name: "Super Yawara Cup 2025",
      date: "2025年2月16日",
      location: "大田区総合体育館PiO（東京都大田区）",
      notes: "JJFAが主催する大会",
      timestamp: new Date('2025-02-16')
    },
    {
      organization: "ASJJF",
      name: "MARIANAS PRO NAGOYA 2025",
      date: "2025年3月8日",
      location: "愛知県武道館（愛知県名古屋市）",
      notes: "国際的な柔術大会で、多くの海外選手も参加予定です",
      timestamp: new Date('2025-03-08')
    },
    {
      organization: "ASJJF",
      name: "アジアマスター柔術選手権 2025",
      date: "2025年3月9日",
      location: "愛知県武道館（愛知県名古屋市）",
      notes: "30歳以上の選手を対象としたアジア規模の大会です",
      timestamp: new Date('2025-03-09')
    },
    {
      organization: "ASJJF",
      name: "アジアキッズ柔術選手権 2025",
      date: "2025年3月9日",
      location: "愛知県武道館（愛知県名古屋市）",
      notes: "子供たちを対象としたアジア規模の大会で、未来のスター選手が集います",
      timestamp: new Date('2025-03-09')
    },
    {
      organization: "JBJJF",
      name: "北海道柔術選手権 2025",
      date: "2025年3月16日",
      location: "北ガスアリーナ札幌46（北海道札幌市）",
      notes: "北海道地域で開催される柔術大会で、地元選手の活躍が期待されます",
      timestamp: new Date('2025-03-16')
    },
    {
      organization: "JBJJF",
      name: "四国ノーギ選手権 2025",
      date: "2025年3月16日",
      location: "ソイジョイ武道館（徳島県）",
      notes: "道着を着用しないノーギ部門の大会で、四国地域の選手が集います",
      timestamp: new Date('2025-03-16')
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
            <TournamentList tournaments={upcomingTournaments} />
          </TabsContent>
          <TabsContent value="past">
            <TournamentList tournaments={pastTournaments} />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default Calendar;
