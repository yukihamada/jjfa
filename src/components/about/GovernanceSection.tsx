import { motion } from "framer-motion";
import { Network } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const GovernanceSection = () => {
  return (
    <motion.section 
      className="py-16 px-4 bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <Network className="w-16 h-16 text-purple-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-6">DAOによるガバナンス</h2>
          <p className="text-lg text-gray-600 mb-8">
            JJFAはDAO（分散型自律組織）の仕組みを取り入れ、トークン保有者がプロジェクトの方針や資金配分、開発計画などに投票で参加できる「参加型ガバナンス」を実現します。これにより、特定の個人や組織に依存せず、コミュニティ自らが進むべき方向を選択できるエコシステムを形成します。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-purple-600 hover:bg-purple-700">
              <Link to="/whitepaper">
                ホワイトペーパーを読む
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/roadmap">
                ロードマップを見る
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};