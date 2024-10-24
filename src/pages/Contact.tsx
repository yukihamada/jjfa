import AnimatedBackground from "@/components/AnimatedBackground";
import { ContactForm } from "@/components/contact/ContactForm";
import { SocialLinks } from "@/components/contact/SocialLinks";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50/50 to-slate-100/50 pt-20">
      <AnimatedBackground />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
            お問い合わせ
          </h1>
          <p className="text-lg text-center mb-12 text-slate-600">
            JJFAに関するご質問・ご相談はこちらから
          </p>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">よくある質問</h2>
            <Accordion type="single" collapsible className="bg-white rounded-lg p-4">
              <AccordionItem value="item-1">
                <AccordionTrigger>JJFAトークンとは何ですか？</AccordionTrigger>
                <AccordionContent>
                  JJFAトークンは、柔術コミュニティの価値交換とガバナンス参加を可能にするユーティリティトークンです。大会エントリー割引や限定コンテンツへのアクセス、運営への参加権などが付与されます。
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>トークンはどうやって取得できますか？</AccordionTrigger>
                <AccordionContent>
                  トークンは、大会への参加、コミュニティへの貢献、公式セールなど、様々な方法で取得することができます。詳細は公式Discordにてご案内しています。
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>大会の参加方法を教えてください</AccordionTrigger>
                <AccordionContent>
                  大会への参加は、公式ウェブサイトからエントリーが可能です。参加には事前の会員登録が必要となります。トーナメント規定や必要書類などの詳細は、各大会の案内ページをご確認ください。
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>コミュニティに参加するにはどうすればいいですか？</AccordionTrigger>
                <AccordionContent>
                  公式Discordサーバーに参加することで、コミュニティの一員となることができます。また、各種SNSでも最新情報を発信していますので、ぜひフォローをお願いします。
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <SocialLinks />
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;