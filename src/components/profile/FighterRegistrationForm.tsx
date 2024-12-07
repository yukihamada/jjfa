import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2 } from "lucide-react";
import { useFighterFormData } from "./hooks/useFighterFormData";
import { useFighterRegistration } from "./hooks/useFighterRegistration";
import { DojoRegistrationDialog } from "@/components/DojoRegistrationDialog";

interface FighterRegistrationFormProps {
  onSuccess: () => void;
  existingFighter?: any;
}

export const FighterRegistrationForm = ({ onSuccess, existingFighter }: FighterRegistrationFormProps) => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [dojoId, setDojoId] = useState("");
  const [beltId, setBeltId] = useState("");
  const [instructor, setInstructor] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [emergencyContact, setEmergencyContact] = useState("");
  const [emergencyPhone, setEmergencyPhone] = useState("");
  const [emergencyRelation, setEmergencyRelation] = useState("");
  
  const { dojos, belts, refetchDojos } = useFighterFormData();
  const { registerFighter, updateFighter, loading } = useFighterRegistration(onSuccess);

  useEffect(() => {
    if (existingFighter) {
      setWeight(existingFighter.weight?.toString() || "");
      setHeight(existingFighter.height?.toString() || "");
      setDojoId(existingFighter.dojo_id || "");
      setBeltId(existingFighter.belt_id || "");
      setInstructor(existingFighter.instructor || "");
    }
  }, [existingFighter]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const fighterData = {
      dojoId: dojoId || null,
      beltId,
      instructor,
      weight,
      height,
      phone,
      address,
      emergencyContact,
      emergencyPhone,
      emergencyRelation,
    };

    if (existingFighter) {
      await updateFighter(existingFighter.id, fighterData);
    } else {
      await registerFighter(fighterData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <label className="block text-sm font-medium mb-1">道場（任意）</label>
        <div className="flex gap-2">
          <div className="flex-1">
            <Select value={dojoId} onValueChange={setDojoId}>
              <SelectTrigger>
                <SelectValue placeholder="道場を選択" />
              </SelectTrigger>
              <SelectContent>
                {dojos.map((dojo) => (
                  <SelectItem key={dojo.id} value={dojo.id}>
                    {dojo.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <DojoRegistrationDialog onSuccess={refetchDojos} />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">帯</label>
        <Select value={beltId} onValueChange={setBeltId} required>
          <SelectTrigger>
            <SelectValue placeholder="帯を選択" />
          </SelectTrigger>
          <SelectContent>
            {belts.map((belt) => (
              <SelectItem key={belt.id} value={belt.id}>
                <span 
                  className={`px-2 py-0.5 rounded ${belt.color === '#FFFFFF' ? 'bg-gray-100 text-gray-900' : ''}`} 
                  style={{ color: belt.color !== '#FFFFFF' ? belt.color : undefined }}
                >
                  {belt.name}
                </span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">指導者</label>
        <Input
          value={instructor}
          onChange={(e) => setInstructor(e.target.value)}
          required
          placeholder="指導者の名前"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">体重 (kg)</label>
        <Input
          type="number"
          step="0.1"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          required
          placeholder="例: 70.5"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">身長 (cm)</label>
        <Input
          type="number"
          step="0.1"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          required
          placeholder="例: 175.0"
        />
      </div>

      {!existingFighter && (
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
        </>
      )}

      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            {existingFighter ? "更新中..." : "登録中..."}
          </>
        ) : (
          existingFighter ? "選手情報を更新" : "選手登録"
        )}
      </Button>
    </form>
  );
};