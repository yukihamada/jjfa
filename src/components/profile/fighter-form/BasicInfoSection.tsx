import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DojoRegistrationDialog } from "@/components/DojoRegistrationDialog";

interface BasicInfoSectionProps {
  dojoId: string;
  beltId: string;
  instructor: string;
  weight: string;
  height: string;
  dojos: any[];
  belts: any[];
  setDojoId: (value: string) => void;
  setBeltId: (value: string) => void;
  setInstructor: (value: string) => void;
  setWeight: (value: string) => void;
  setHeight: (value: string) => void;
  refetchDojos: () => void;
}

export const BasicInfoSection = ({
  dojoId,
  beltId,
  instructor,
  weight,
  height,
  dojos,
  belts,
  setDojoId,
  setBeltId,
  setInstructor,
  setWeight,
  setHeight,
  refetchDojos,
}: BasicInfoSectionProps) => {
  return (
    <>
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
                <div 
                  className={`px-2 py-0.5 rounded ${
                    belt.color === '#FFFFFF' 
                      ? 'bg-gray-100 text-gray-900' 
                      : 'text-white'
                  }`}
                  style={{ 
                    backgroundColor: belt.color !== '#FFFFFF' ? belt.color : undefined
                  }}
                >
                  {belt.name}
                </div>
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
    </>
  );
};