import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Globe } from "lucide-react";

const languages = [
  { code: "ja", name: "日本語" },
  { code: "en", name: "English" },
  { code: "pt", name: "Português" },
  { code: "ko", name: "한국어" },
  { code: "zh", name: "中文" },
  { code: "es", name: "Español" },
  { code: "fr", name: "Français" },
  { code: "th", name: "ไทย" },
  { code: "vi", name: "Tiếng Việt" },
];

export const LanguageSelector = () => {
  return (
    <Select defaultValue="ja">
      <SelectTrigger className="w-[140px] bg-transparent border-none hover:bg-slate-100 focus:ring-0">
        <Globe className="mr-2 h-4 w-4" />
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {languages.map((lang) => (
          <SelectItem key={lang.code} value={lang.code}>
            {lang.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};