import { Separator } from "@/components/ui/separator";
import { FileText } from "lucide-react";

export const TokenSpecificationHeader = () => {
  return (
    <div className="space-y-4 mb-8">
      <div className="flex items-center gap-2">
        <FileText className="w-8 h-8 text-primary" />
        <h1 className="text-3xl font-bold">トークン技術仕様書</h1>
      </div>
      <p className="text-slate-600">
        本文書は、JJFAトークンの技術的な実装詳細と設計思想を説明するものです。
      </p>
      <Separator className="my-4" />
    </div>
  );
};