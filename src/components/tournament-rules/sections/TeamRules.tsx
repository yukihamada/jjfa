import { RuleSection } from "../RuleSection";
import { RuleItem } from "../RuleItem";

export const TeamRules = () => {
  return (
    <RuleSection id="team-rules" title="団体戦ルール">
      <RuleItem
        title="チーム編成"
        description="5名の選手で構成され、各選手の体重制限を遵守する必要があります。"
      />
      <RuleItem
        title="体重制限"
        description="チームの合計体重が設定された制限を超えないようにします。"
      />
      <RuleItem
        title="順序決定"
        description="試合開始前にチーム代表者がデジタルプラットフォームで出場順序を登録します。"
      />
      <RuleItem
        title="勝敗決定"
        description="3勝先取で勝利となります。引き分けの場合は代表戦を行います。"
      />
    </RuleSection>
  );
};