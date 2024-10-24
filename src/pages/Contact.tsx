import AnimatedBackground from "@/components/AnimatedBackground";
import { ContactForm } from "@/components/contact/ContactForm";
import { SocialLinks } from "@/components/contact/SocialLinks";

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

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <SocialLinks />
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;