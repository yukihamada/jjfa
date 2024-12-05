import { AlertTriangle } from "lucide-react";

export const TechnicalRestrictions = () => {
  return (
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
              <p className="font-medium mb-2">8.3.1.1 白帯</p>
              <ul className="list-decimal pl-5 text-slate-600">
                <li>ヒールフック - 足首や膝に強い負荷がかかるため禁止</li>
                <li>カニ挟み（カニバサミ） - バランスを崩して怪我をするリスクがあるため禁止</li>
                <li>スラム - 脊椎や首に重大な怪我を引き起こす可能性があるため禁止</li>
              </ul>
            </div>
            <div>
              <p className="font-medium mb-2">8.3.1.2 青帯以上</p>
              <ul className="list-decimal pl-5 text-slate-600">
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
              <p className="font-medium mb-2">8.3.2.1 ジュブナイル（青少年）</p>
              <ul className="list-decimal pl-5 text-slate-600">
                <li>関節技や首に負担をかける技の多くが禁止</li>
                <li>スパイキング（相手を頭から地面に落とす行為）は全面禁止</li>
                <li>安全性を最優先とした技術制限の適用</li>
              </ul>
            </div>
            <div>
              <p className="font-medium mb-2">8.3.2.2 マスター、シニア</p>
              <ul className="list-decimal pl-5 text-slate-600">
                <li>年齢による身体特性を考慮し、ヒールフックなどの高度な関節技を禁止</li>
                <li>怪我のリスクが高い技術の使用制限</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">8.3.3 スパイキングの禁止</h4>
          <ul className="list-decimal pl-5 text-slate-600">
            <li>首や頭部への重大なリスクが伴うため、多くのカテゴリーで禁止</li>
            <li>特にジュブナイルおよび初心者レベルの選手に対して全面禁止</li>
            <li>安全な競技運営のため、違反した場合は即時失格の対象</li>
          </ul>
        </div>
      </div>
    </div>
  );
};