import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useFighterFormData } from "./hooks/useFighterFormData";
import { useFighterRegistration } from "./hooks/useFighterRegistration";
import { BasicInfoSection } from "./fighter-form/BasicInfoSection";
import { ContactInfoSection } from "./fighter-form/ContactInfoSection";
import { EmergencyContactSection } from "./fighter-form/EmergencyContactSection";

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
      <BasicInfoSection
        dojoId={dojoId}
        beltId={beltId}
        instructor={instructor}
        weight={weight}
        height={height}
        dojos={dojos}
        belts={belts}
        setDojoId={setDojoId}
        setBeltId={setBeltId}
        setInstructor={setInstructor}
        setWeight={setWeight}
        setHeight={setHeight}
        refetchDojos={refetchDojos}
      />

      {!existingFighter && (
        <>
          <ContactInfoSection
            phone={phone}
            address={address}
            setPhone={setPhone}
            setAddress={setAddress}
          />

          <EmergencyContactSection
            emergencyContact={emergencyContact}
            emergencyPhone={emergencyPhone}
            emergencyRelation={emergencyRelation}
            setEmergencyContact={setEmergencyContact}
            setEmergencyPhone={setEmergencyPhone}
            setEmergencyRelation={setEmergencyRelation}
          />
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