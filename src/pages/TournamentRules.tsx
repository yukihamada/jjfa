import { PageTitle } from "@/components/PageTitle";
import { TableOfContents } from "@/components/tournament-rules/TableOfContents";
import { RuleSection } from "@/components/tournament-rules/RuleSection";
import { RuleItem } from "@/components/tournament-rules/RuleItem";

const TournamentRules = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageTitle title="JJFA公式大会ルール" />
      
      <div className="prose prose-slate max-w-none">
        <p className="text-lg mb-8">
          JiuFightトーナメントは、柔術の技術と戦略を最大限に引き出すために設計された独自のルールセットを採用しています。
          このルールセットは、攻撃的な柔術を奨励し、試合のペースを速く保ちながら、選手の安全を確保することを目的としています。
        </p>

        <TableOfContents />

        <RuleSection id="introduction" title="はじめに">
          <RuleItem
            title="JJFAの理念と目的"
            description="柔術をすべての人に身近なものとし、コミュニティの持続可能な成長と公正な価値分配を目指します。"
          />
          <RuleItem
            title="JiuFightのコンセプト"
            description="柔術の新時代を切り開く、技術と競技精神を重視した大会です。"
          />
        </RuleSection>

        <RuleSection id="match-format" title="試合形式">
          <RuleItem
            title="トーナメント方式"
            description="シングルイリミネーション方式で実施され、敗者は次のラウンドに進めません。"
          />
          <RuleItem
            title="試合時間"
            description="試合は2分間の1ラウンドで構成されます。"
          />
          <RuleItem
            title="マットサイズ"
            description="マットサイズは6m×6m以上を使用します。"
          />
          <RuleItem
            title="勝敗の決定方法"
            description="ポイント、サブミッション、または審判の判定によって勝敗が決まります。"
          />
        </RuleSection>

        <RuleSection id="team-rules" title="団体戦ルール">
          <RuleItem
            title="チーム編成"
            description="同じ帯色の選手で構成されたチームで対戦します。"
          />
          <RuleItem
            title="体重制限"
            description="チームの合計体重が210kg以下である必要があります。"
          />
          <RuleItem
            title="勝敗決定"
            description="各選手の勝ち抜き戦で、勝ち数の多いチームが勝利となります。"
          />
          <RuleItem
            title="同点の場合"
            description="勝ち数が同じ場合は、獲得ポイントの合計が多いチームが勝利となります。"
          />
        </RuleSection>

        {/* ... 他のセクションも同様に実装 */}
        <RuleSection id="point-system" title="ポイントシステム">
          <RuleItem
            title="テイクダウン"
            description="立った状態から相手をコントロールしながら倒し、上位のポジションを確保：2ポイント"
          />
          <RuleItem
            title="スイープ"
            description="ガードポジションから相手のバランスを崩し、上位のポジションを確保：2ポイント"
          />
          <RuleItem
            title="押さえ込み"
            description="相手を仰向けにして3秒間押さえ込みを維持：2ポイント"
          />
          <RuleItem
            title="マウントポジション"
            description="相手の胸の上に完全なコントロールで跨る：4ポイント"
          />
          <RuleItem
            title="バックコントロール"
            description="両フックを入れて相手の背後をコントロール：4ポイント"
          />
        </RuleSection>

        {/* ... 残りのセクションも同様に実装 */}
        <RuleSection id="awards" title="表彰とメダル授与">
          <RuleItem
            title="NFTメダル"
            description="メダルはNFTとして付与され、実物のメダルは表彰式での写真撮影用に一時的に貸し出されます。"
          />
          <RuleItem
            title="メダル申請"
            description="実物のメダルは希望者が別途申請することで、トークンを使用して購入することができます。"
          />
          <RuleItem
            title="表彰式"
            description="上位3位以内の競技者は表彰台に立ち、セレモニーに参加します。"
          />
        </RuleSection>
      </div>
    </div>
  );
};

export default TournamentRules;