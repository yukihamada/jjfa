import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const FutureVisionSection = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">JJFAが描く未来</h2>
        <div className="prose prose-lg max-w-none text-slate-600">
          <p className="mb-6">
            私たちは柔術が持つ多面的な価値を、テクノロジーと人間性を融合させることで最大限に引き出していきます。JJFAは、柔術を愛する全ての人々が、学び、成長し、挑戦できる場を用意し、そのコミュニティがグローバルにつながることで、柔術の新時代を切り拓きます。
          </p>
          <p className="text-2xl font-semibold text-center mt-12">
            今こそ、柔術を「体感」から「世界観」へ。
          </p>
          <p className="text-xl text-center">
            JJFAと共に、新たな柔術の扉を開きましょう。
          </p>
        </div>
      </div>
    </section>
  );
};