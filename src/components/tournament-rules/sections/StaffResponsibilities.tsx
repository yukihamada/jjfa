import { RuleSection } from "../RuleSection";
import { Users, UserCog, Scale, Table, Shield, Camera, Megaphone, Stethoscope } from "lucide-react";

export const StaffResponsibilities = () => {
  return (
    <RuleSection id="staff-responsibilities" title="大会運営スタッフの責任" sectionNumber="16">
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Users className="w-6 h-6 text-blue-500" />
            基本的な責務
          </h3>
          <ul className="list-disc pl-5 text-slate-600 space-y-2">
            <li>適切なユニフォームを着用すること</li>
            <li>効率的かつ正確に業務を遂行すること</li>
            <li>プロフェッショナルな行動を維持すること</li>
            <li>競技エリア内での選手への指示は禁止（観客エリアからの応援は可能）</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <UserCog className="w-6 h-6 text-blue-500" />
            トーナメントディレクター
          </h3>
          <p className="text-slate-600">
            イベント全体の計画を監督し、運営に関する最終決定権を持ちます。会場設備、保険、スケジュール管理など、
            大会の円滑な運営を統括します。
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Scale className="w-6 h-6 text-blue-500" />
            計量担当
          </h3>
          <p className="text-slate-600">
            選手の体重測定を行い、登録カテゴリーの体重制限を満たしているか確認します。
            体重オーバーの場合は失格となります。
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Table className="w-6 h-6 text-blue-500" />
            メインテーブル担当
          </h3>
          <p className="text-slate-600">
            トーナメントブラケットの管理、試合結果の記録、進行状況の管理を担当します。
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Shield className="w-6 h-6 text-blue-500" />
            審判団
          </h3>
          <p className="text-slate-600">
            審判長は審判団を統括し、ルールの適切な適用を監督します。
            各審判は試合のジャッジを行い、JJFAルールに基づいて公正な判定を下します。
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Camera className="w-6 h-6 text-blue-500" />
            メディア担当
          </h3>
          <p className="text-slate-600">
            大会の写真・動画撮影、SNSでの発信を担当します。
            競技エリアでの撮影には事前承認が必要です。
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Megaphone className="w-6 h-6 text-blue-500" />
            アナウンサー
          </h3>
          <p className="text-slate-600">
            試合進行のアナウンス、選手呼び出し、結果発表などを担当します。
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Stethoscope className="w-6 h-6 text-blue-500" />
            医療スタッフ
          </h3>
          <p className="text-slate-600">
            適切な資格を持つ医療スタッフが常駐し、選手の怪我や緊急時の対応を行います。
          </p>
        </div>
      </div>
    </RuleSection>
  );
};
