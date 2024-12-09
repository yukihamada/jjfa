import { Input } from "@/components/ui/input";

interface EmergencyContactSectionProps {
  emergencyContact: string;
  emergencyPhone: string;
  emergencyRelation: string;
  setEmergencyContact: (value: string) => void;
  setEmergencyPhone: (value: string) => void;
  setEmergencyRelation: (value: string) => void;
}

export const EmergencyContactSection = ({
  emergencyContact,
  emergencyPhone,
  emergencyRelation,
  setEmergencyContact,
  setEmergencyPhone,
  setEmergencyRelation,
}: EmergencyContactSectionProps) => {
  return (
    <div className="space-y-4 pt-4 border-t">
      <h3 className="font-medium">緊急連絡先</h3>
      
      <div>
        <label className="block text-sm font-medium mb-1">氏名</label>
        <Input
          value={emergencyContact}
          onChange={(e) => setEmergencyContact(e.target.value)}
          required
          placeholder="緊急連絡先の氏名"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">続柄</label>
        <Input
          value={emergencyRelation}
          onChange={(e) => setEmergencyRelation(e.target.value)}
          required
          placeholder="例: 父親、母親、配偶者など"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">電話番号</label>
        <Input
          type="tel"
          value={emergencyPhone}
          onChange={(e) => setEmergencyPhone(e.target.value)}
          required
          placeholder="例: 090-1234-5678"
        />
      </div>
    </div>
  );
};