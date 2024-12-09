import { toast } from "sonner";

interface FighterData {
  beltId: string;
  instructor: string;
  weight: string;
  height: string;
  phone?: string;
  address?: string;
  emergencyContact?: string;
  emergencyPhone?: string;
  emergencyRelation?: string;
}

export const useFormValidation = () => {
  const validateForm = (data: FighterData) => {
    if (!data.beltId) {
      toast.error("帯を選択してください");
      return false;
    }

    if (!data.instructor.trim()) {
      toast.error("指導者名を入力してください");
      return false;
    }

    if (!data.weight || isNaN(parseFloat(data.weight))) {
      toast.error("有効な体重を入力してください");
      return false;
    }

    if (!data.height || isNaN(parseFloat(data.height))) {
      toast.error("有効な身長を入力してください");
      return false;
    }

    // Only validate these fields for new registrations
    if (data.phone !== undefined) {
      if (!data.phone.trim()) {
        toast.error("電話番号を入力してください");
        return false;
      }

      if (!data.address?.trim()) {
        toast.error("住所を入力してください");
        return false;
      }

      if (!data.emergencyContact?.trim()) {
        toast.error("緊急連絡先の氏名を入力してください");
        return false;
      }

      if (!data.emergencyPhone?.trim()) {
        toast.error("緊急連絡先の電話番号を入力してください");
        return false;
      }

      if (!data.emergencyRelation?.trim()) {
        toast.error("緊急連絡先の続柄を入力してください");
        return false;
      }
    }

    return true;
  };

  return { validateForm };
};