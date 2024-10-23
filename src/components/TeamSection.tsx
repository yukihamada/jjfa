import { TeamMember } from "./TeamMember";

export const TeamSection = () => {
  const teamMembers = [
    {
      name: "濱田優貴",
      imagePath: "/406363140_10229571887435619_4554932660817499091_n.jpg",
      description: "東京理科大学在学中に起業し、その後メルカリに参画して取締役CPOとして活躍。プロダクトの全体管理や技術分野のリードを行い、同社の成長に貢献。現在は令和トラベルやキャスターなどの社外取締役として、スタートアップの成長支援を続けています。新しいビジネスのデザインに情熱を持ち、常にテクノロジーでの社会問題解決を目指しています。"
    },
    {
      name: "村田良蔵",
      imagePath: "/４-1.jpg",
      description: "ブラジリアン柔術の世界チャンピオンで、日本人初のSJJIF世界選手権での優勝者。北海道を拠点に柔術の普及と指導に力を注ぎ、安全で効果的な技術を通じて、多くの初心者から上級者までをサポートしています。彼の指導スタイルは理論に基づいており、実戦的でありながら生徒に対して丁寧なアプローチを心がけています。"
    },
    {
      name: "堤達生",
      imagePath: "/2024-10-23 13.17.34.png",
      description: "ベンチャーキャピタル「STRIVE」の代表パートナーで、スタートアップ企業の成長を支援するエキスパート。特にアーリーステージの投資に注力し、日本や東南アジア、インドなどでの企業支援に取り組んでいます。彼の理念は、「起業家と共に汗をかき、共に戦う」という姿勢で、社会的な課題解決を目指しています。"
    },
    {
      name: "立石修也",
      imagePath: "/2024-10-23 13.15.30.png",
      description: "YAWARA柔術アカデミー所属の柔術家。慶應義塾大学経済学部卒業後、2022年から本格的に柔術の世界に参入。わずか2年弱の競技歴ながら、SJJIF世界選手権青帯の部で優勝するなど急成長を遂げています。柔術を「ボディチェス」と表現し、戦略的なスポーツとしての魅力を伝える活動も行っています。2024年には再び世界選手権で優勝を果たし、その実力が注目されています。"
    },
    {
      name: "粟田健太郎",
      imagePath: "/kPq28fl6_400x400.jpg",
      description: "ライフタイムベンチャーズの代表パートナー。横浜や沖縄を拠点に、プレシードやシード段階のスタートアップ企業への投資に特化。OIST（沖縄科学技術大学院大学）との連携で「OIST-Lifetime Ventures Fund」を設立し、科学技術を活用したスタートアップのエコシステム構築に取り組んでいます。資金提供に加え、事業計画策定や初期の顧客開拓、チームビルディングなど、幅広いサポートを提供しています。"
    },
    {
      name: "Takinishi Kisei",
      imagePath: "/356407976_809626707393076_4635497050248137000_n.jpg",
      description: "Yawaraアカデミー所属の柔術家で、国内外の大会に積極的に参加する競技者。Blue Master 1カテゴリーでの戦績があり、さまざまな体重クラスで技術を磨いています。彼の競技への情熱と実力は、国内外の柔術コミュニティでも高く評価されています。"
    }
  ];

  return (
    <section className="py-20 px-4 container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">チームメンバー</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <TeamMember
            key={index}
            name={member.name}
            description={member.description}
            imagePath={member.imagePath}
          />
        ))}
      </div>
    </section>
  );
};