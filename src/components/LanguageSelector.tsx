import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Globe } from "lucide-react";
import { useTranslation } from 'react-i18next';

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
  const { i18n } = useTranslation();

  const handleLanguageChange = (value: string) => {
    i18n.changeLanguage(value);
  };

  return (
    <Select defaultValue={i18n.language} onValueChange={handleLanguageChange}>
      <SelectTrigger className="w-[140px] bg-white/80 hover:bg-white border-slate-200 hover:border-slate-300 transition-colors">
        <Globe className="mr-2 h-4 w-4 text-slate-600" />
        <SelectValue placeholder="言語" />
      </SelectTrigger>
      <SelectContent align="end">
        {languages.map((lang) => (
          <SelectItem 
            key={lang.code} 
            value={lang.code}
            className="cursor-pointer hover:bg-slate-100"
          >
            {lang.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};