import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Vote, Coins, Users, Trophy } from "lucide-react";

const benefits = [
  {
    title: "DAO投票権",
    description: "重要な意思決定に参加できます",
    icon: Vote,
  },
  {
    title: "収益分配",
    description: "プロジェクトの収益から配当を受け取れます",
    icon: Coins,
  },
  {
    title: "限定コミュニティ",
    description: "メンバー専用のイベントや情報にアクセスできます",
    icon: Users,
  },
  {
    title: "大会優先参加",
    description: "JJFA主催の大会に優先的に参加できます",
    icon: Trophy,
  },
];

export const NFTBenefits = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Member Token の特典
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <benefit.icon className="w-8 h-8 mb-2 text-primary" />
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};