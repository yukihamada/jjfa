import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Users, Globe, Scale, Database, Building, Trophy, Book, Network, MessageSquare, HelpCircle, Activity } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const AboutPage = () => {
  const { t } = useTranslation();
  
  const slides = [
    {
      id: 1,
      title: "JJFAとは？",
      subtitle: "世界中の柔術コミュニティをつなぎ、持続的で公平なエコシステムを目指す組織",
      icon: <Users className="w-12 h-12 text-primary" />,
      image: "/hero-bg.jpg"
    },
    {
      id: 2,
      title: "ビジョン",
      content: ["国籍・年齢・性別を問わず、誰もが参加できるコミュニティ", "柔術を通じて、礼儀・敬意・協力を広げる"],
      icon: <Globe className="w-12 h-12 text-primary" />
    },
    {
      id: 3,
      title: "課題と解決策",
      challenges: ["資金不足（小規模道場・大会運営）", "情報・技術共有の停滞", "初期貢献者が報われない状況"],
      solutions: ["Web3技術＆トークンエコノミー", "DAOガバナンスで参加型の意思決定", "公平な価値分配"],
      icon: <Scale className="w-12 h-12 text-primary" />
    },
    {
      id: 4,
      title: "JJFAの仕組み",
      content: ["トークン発行でエコシステム内の取引・報酬を透明化", "トークン保有者が投票で意思決定（DAO）"],
      icon: <Database className="w-12 h-12 text-primary" />
    },
    {
      id: 5,
      title: "主な取り組み",
      initiatives: [
        { title: "道場サポート", icon: <Building className="w-6 h-6" />, desc: "資金援助、ノウハウ共有" },
        { title: "大会支援", icon: <Trophy className="w-6 h-6" />, desc: "大会・イベントの開催支援" },
        { title: "教育支援", icon: <Book className="w-6 h-6" />, desc: "オンライン教育コンテンツで技術共有" }
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold mb-4">JJFA（Jiu-Jitsu For ALL）</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          世界中の柔術コミュニティをつなぎ、持続的で公平なエコシステムを目指す組織
        </p>
      </motion.div>

      {/* Vision Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
      >
        {slides.slice(1, 4).map((slide) => (
          <Card key={slide.id} className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <div className="mb-4">{slide.icon}</div>
              <CardTitle>{slide.title}</CardTitle>
              <CardDescription>
                {slide.content && (
                  <ul className="space-y-2 mt-4">
                    {slide.content.map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Activity className="w-4 h-4 text-green-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {slide.challenges && (
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">課題:</h4>
                      <ul className="space-y-2">
                        {slide.challenges.map((challenge, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <Activity className="w-4 h-4 text-red-500" />
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">解決策:</h4>
                      <ul className="space-y-2">
                        {slide.solutions?.map((solution, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <Activity className="w-4 h-4 text-green-500" />
                            {solution}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </motion.div>

      {/* Initiatives Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">主な取り組み</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {slides[4].initiatives.map((initiative, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <div className="mb-4">{initiative.icon}</div>
                <CardTitle>{initiative.title}</CardTitle>
                <CardDescription>{initiative.desc}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </motion.div>

      {/* Contact Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold mb-8">お問い合わせ</h2>
        <div className="flex justify-center gap-4">
          <MessageSquare className="w-6 h-6" />
          <HelpCircle className="w-6 h-6" />
        </div>
        <p className="mt-4 text-gray-600">
          お気軽にご連絡ください
        </p>
      </motion.div>
    </div>
  );
};

export default AboutPage;