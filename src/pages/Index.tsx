import { BackgroundGradient } from "@/components/BackgroundGradient";
import { SEO } from "@/components/SEO";
import { PageTitle } from "@/components/PageTitle";

const Index = () => {
  return (
    <>
      <SEO 
        title="JJFA - 柔術 for ALL"
        description="JJFAは柔術の普及とコミュニティの発展を目指すプラットフォームです。"
      />
      <div className="relative min-h-screen">
        <BackgroundGradient />
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-600">
            JJFA - 柔術 for ALL
          </h1>
          <p className="text-xl text-center text-slate-600 mb-12">
            柔術の普及とコミュニティの発展を目指すプラットフォーム
          </p>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg text-slate-700 mb-6">
              JJFAは、柔術を通じて人々をつなぎ、共に成長できる場を提供します。
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;