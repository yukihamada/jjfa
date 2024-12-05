import { RuleSection } from "../RuleSection";
import { AlertTriangle, Shield, UserX, XCircle, Siren } from "lucide-react";

export const Penalties = () => {
  return (
    <RuleSection id="penalties" title="ペナルティ" sectionNumber="8">
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Shield className="w-6 h-6 text-red-500" />
            8.1 安全に関わる反則行為
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>8.1.1 指を1本または2本だけ掴むこと</li>
            <li>8.1.2 相手の髪の毛、耳、鼻、性器を掴むこと</li>
            <li>8.1.3 相手の関節を逆方向に過度に曲げる行為</li>
            <li>8.1.4 相手の背中を踏む行為</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <XCircle className="w-6 h-6 text-red-500" />
            8.2 相手への攻撃に関する反則
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>8.2.1 打撃や蹴り</li>
            <li>8.2.2 指で目を攻撃する</li>
            <li>8.2.3 魚フック（指で相手の口の中を引っ張る行為）</li>
            <li>8.2.4 相手を絞める際に首を絞める器具として襟以外を使うこと（例：指）</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-yellow-500" />
            8.3 技術の制限
          </h3>
          <div className="space-y-4">
            <div className="bg-slate-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">8.3.1 帯の色による技術の制限</h4>
              <div className="space-y-4">
                <div>
                  <p className="font-medium mb-2">白帯</p>
                  <ul className="list-disc pl-5 text-slate-600">
                    <li>ヒールフック - 足首や膝に強い負荷がかかるため禁止</li>
                    <li>カニ挟み（カニバサミ） - バランスを崩して怪我をするリスクがあるため禁止</li>
                    <li>スラム - 脊椎や首に重大な怪我を引き起こす可能性があるため禁止</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium mb-2">青帯以上</p>
                  <ul className="list-disc pl-5 text-slate-600">
                    <li>徐々に多くの技が解禁されるが、一部の危険な技は引き続き制限</li>
                    <li>ヒールフックは特定の上級カテゴリーでのみ許可</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">8.3.2 年齢カテゴリによる制限</h4>
              <div className="space-y-4">
                <div>
                  <p className="font-medium mb-2">ジュブナイル（青少年）</p>
                  <ul className="list-disc pl-5 text-slate-600">
                    <li>関節技や首に負担をかける技の多くが禁止</li>
                    <li>スパイキング（相手を頭から地面に落とす行為）は全面禁止</li>
                    <li>安全性を最優先とした技術制限の適用</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium mb-2">マスター、シニア</p>
                  <ul className="list-disc pl-5 text-slate-600">
                    <li>年齢による身体特性を考慮し、ヒールフックなどの高度な関節技を禁止</li>
                    <li>怪我のリスクが高い技術の使用制限</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">8.3.3 スパイキングの禁止</h4>
              <ul className="list-disc pl-5 text-slate-600">
                <li>首や頭部への重大なリスクが伴うため、多くのカテゴリーで禁止</li>
                <li>特にジュブナイルおよび初心者レベルの選手に対して全面禁止</li>
                <li>安全な競技運営のため、違反した場合は即時失格の対象</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <UserX className="w-6 h-6 text-red-500" />
            8.4 スポーツマンシップに反する行為
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>8.4.1 言葉での挑発や相手への不適切な発言</li>
            <li>8.4.2 故意に試合から逃げる行為、たとえば場外に出てポイントを避ける</li>
            <li>8.4.3 自らの帯を外し、試合を一時停止させる行為</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Siren className="w-6 h-6 text-red-500" />
            8.5 服装・規定違反
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>8.5.1 規定に反した道着（Gi）やノーギウェアの着用</li>
            <li>8.5.2 金属類（指輪、ピアス）や爪の長さなど安全上の問題がある状態で試合を行うこと</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4">8.6 ペナルティの種類</h3>
          <div className="space-y-4">
            <div className="bg-yellow-50 p-4 rounded-lg">
              <p className="font-semibold text-yellow-800">8.6.1 軽度の反則</p>
              <ul className="list-disc pl-5 mt-2 text-yellow-700">
                <li>警告</li>
                <li>相手にアドバンテージ</li>
              </ul>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <p className="font-semibold text-red-800">8.6.2 重大な反則</p>
              <ul className="list-disc pl-5 mt-2 text-red-700">
                <li>ポイントの減点</li>
                <li>反則負け（失格）</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </RuleSection>
  );
};