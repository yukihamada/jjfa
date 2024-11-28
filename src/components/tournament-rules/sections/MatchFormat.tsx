import { RuleSection } from "../RuleSection";
import { RuleItem } from "../RuleItem";

export const MatchFormat = () => {
  return (
    <RuleSection id="match-format" title="試合形式">
      <RuleItem
        title="トーナメント方式"
        description="シングルイリミネーション方式で実施され、敗者は次のラウンドに進めません。"
      />
      <RuleItem
        title="試合時間"
        description="予選：4分間、準決勝・決勝：6分間。延長戦は2分間で実施されます。"
      />
      <RuleItem
        title="マットエリア"
        description="競技エリア8m×8m、安全エリア2mを確保します。"
      />
      <RuleItem
        title="デジタルスコアボード"
        description="リアルタイムでスコアと残り時間を表示し、ブロックチェーンに記録します。"
      />
    </RuleSection>
  );
};