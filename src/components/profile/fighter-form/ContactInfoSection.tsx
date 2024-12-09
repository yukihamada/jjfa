import { Input } from "@/components/ui/input";

interface ContactInfoSectionProps {
  phone: string;
  address: string;
  setPhone: (value: string) => void;
  setAddress: (value: string) => void;
}

export const ContactInfoSection = ({
  phone,
  address,
  setPhone,
  setAddress,
}: ContactInfoSectionProps) => {
  return (
    <>
      <div>
        <label className="block text-sm font-medium mb-1">電話番号</label>
        <Input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          placeholder="例: 090-1234-5678"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">住所</label>
        <Input
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
          placeholder="例: 東京都渋谷区..."
        />
      </div>
    </>
  );
};