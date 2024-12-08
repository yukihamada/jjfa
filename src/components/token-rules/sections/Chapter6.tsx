import { TokenRulesSection } from "../TokenRulesSection";
import { TokenRulesArticle } from "../TokenRulesArticle";

export const Chapter6 = () => {
  return (
    <TokenRulesSection title="第6章 改定・施行・言語">
      <TokenRulesArticle title="第18条（規程改定）">
        <p className="mb-4">
          このルールを変えたい時は、コミュニティ投票（特別決議）で決めます。
          承認後は公式発表してすぐ適用します。
        </p>
      </TokenRulesArticle>

      <TokenRulesArticle title="第19条（言語と優先度）">
        <p className="mb-4">
          この規程は日本語が基本で、別言語版と食い違いがあれば日本語を優先。
          法令やガイドラインに書かれていないことがあれば、それらに従います。
        </p>
      </TokenRulesArticle>

      <TokenRulesArticle title="第20条（施行日）">
        <p className="mb-4">
          この規程は2024年●月●日から有効です。
        </p>
      </TokenRulesArticle>

      <div className="mt-8 p-6 bg-slate-50 rounded-lg">
        <h3 className="font-bold mb-4">まとめ</h3>
        <p className="text-slate-700">
          この規程によって、柔術を始める人、すでに練習している人、教える人、支える人、すべてが安心して参加できる「Web3時代の柔術コミュニティ」を築けます。
          トークンを使って柔術大会や道場運営をサポートし、自分のアイデアで柔術界を盛り上げられます。
          こうした仕組みが、世界中の新しい練習者を呼び込み、柔術をより身近で親しみやすい存在にしてくれます。
        </p>
      </div>
    </TokenRulesSection>
  );
};