import { RuleSection } from "../RuleSection";
import { Database, Bot, BarChart, Video, HeartPulse, Github } from "lucide-react";

export const TechnologyIntegration = () => {
  return (
    <RuleSection id="technology-integration" title="テクノロジー統合" sectionNumber="17">
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Database className="w-6 h-6 text-blue-500" />
            オープンソースデータベース
          </h3>
          <p className="text-slate-600">
            試合結果、スコア、選手のパフォーマンスデータを永続的なデータベースに記録し、
            ブロックチェーン技術を活用して改ざん防止を実現します。
            すべてのコードは
            <a 
              href="https://github.com/jjforall" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 inline-flex items-center gap-1 mx-1"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            で公開されています。
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Bot className="w-6 h-6 text-blue-500" />
            AI審判支援システム
          </h3>
          <p className="text-slate-600">
            最新のAI技術を活用して、審判の判定をサポートし、より公平で正確な判定を実現します。
            機械学習モデルは継続的に改善され、判定の一貫性を高めています。
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <BarChart className="w-6 h-6 text-blue-500" />
            リアルタイムデータ分析
          </h3>
          <p className="text-slate-600">
            選手の動きや技術をリアルタイムで分析し、観客への情報提供や選手の技術向上に活用します。
            データは匿名化された形でオープンデータとして研究目的にも提供されます。
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Video className="w-6 h-6 text-blue-500" />
            マルチアングル映像システム
          </h3>
          <p className="text-slate-600">
            複数アングルからの映像をAIが自動解析し、最適な視点を選択・提供します。
            判定の透明性を確保するとともに、選手の技術分析にも活用されます。
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <HeartPulse className="w-6 h-6 text-blue-500" />
            選手コンディション管理
          </h3>
          <p className="text-slate-600">
            ウェアラブルデバイスを活用して選手の生体データをリアルタイムでモニタリングし、
            安全性の向上と最適なパフォーマンス発揮を支援します。
            収集されたデータは選手の同意のもと、スポーツ科学の発展にも貢献します。
          </p>
        </div>
      </div>
    </RuleSection>
  );
};