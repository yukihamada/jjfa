import { TokenRulesSection } from "../TokenRulesSection";
import { TokenRulesArticle } from "../TokenRulesArticle";

export const Chapter6 = () => {
  return (
    <TokenRulesSection title="第6章 附則">
      <TokenRulesArticle title="第18条（規程改定）">
        <p className="mb-4">特別決議で変更可能。承認後、即時公表。</p>
      </TokenRulesArticle>

      <TokenRulesArticle title="第19条（言語優先）">
        <p className="mb-4">
          日本語版が正式。
          法令やガイドラインが優先。
        </p>
      </TokenRulesArticle>

      <TokenRulesArticle title="第20条（施行日）">
        <p>2024年●月●日から有効。</p>
        <p className="mt-4">
          この規程は、柔術初心者からベテランまで、世界中の人が柔術に参加しやすくなる仕組みを具体的に示しています。
        </p>
        <ul className="list-disc pl-6 mt-2">
          <li>初心者でも、動画ガイド制作や道場情報共有などでトークンをもらえ、練習費用に充てられる。</li>
          <li>有名師範の講習や、特別イベントへの優先参加で高いモチベーションを維持できる。</li>
          <li>道場主やイベント主催者は、トークンを通じて世界中から支援や参加者を集めやすくなり、新しい柔術市場が開ける。</li>
        </ul>
        <p className="mt-4">
          こうした具体例やルール整備によって、トークンを使いながら柔術を楽しむ人が増え、柔術界全体の活性化につながります。
          初心者が安心して一歩を踏み出し、経験者が知識や技術を共有し、柔術文化が豊かに発展していく未来を、この規程はサポートします。
        </p>
      </TokenRulesArticle>
    </TokenRulesSection>
  );
};