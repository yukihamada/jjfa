import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

export const FighterRegistrationForm = ({ onSuccess }: { onSuccess: () => void }) => {
  const [loading, setLoading] = useState(false);
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [dojoId, setDojoId] = useState("");
  const [beltId, setBeltId] = useState("");
  const [instructor, setInstructor] = useState("");
  const [dojos, setDojos] = useState<any[]>([]);
  const [belts, setBelts] = useState<any[]>([]);

  // Fetch dojos and belts on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: dojosData, error: dojosError } = await supabase
          .from('dojos')
          .select('id, name')
          .order('name');
        
        if (dojosError) {
          console.error("Error fetching dojos:", dojosError);
          toast.error("道場データの取得に失敗しました");
          return;
        }
        if (dojosData) setDojos(dojosData);

        const { data: beltsData, error: beltsError } = await supabase
          .from('belts')
          .select('id, name, color')
          .order('belt_order');
        
        if (beltsError) {
          console.error("Error fetching belts:", beltsError);
          toast.error("帯データの取得に失敗しました");
          return;
        }
        if (beltsData) setBelts(beltsData);
      } catch (error) {
        console.error("Error in fetchData:", error);
        toast.error("データの取得中にエラーが発生しました");
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data: { user }, error: userError } = await supabase.auth.getUser();
      
      if (userError) {
        console.error("Auth error:", userError);
        toast.error("認証エラー: ログインが必要です");
        return;
      }

      if (!user) {
        toast.error("ログインが必要です");
        return;
      }

      // Validate required fields
      if (!dojoId) {
        toast.error("道場を選択してください");
        return;
      }

      if (!beltId) {
        toast.error("帯を選択してください");
        return;
      }

      if (!instructor.trim()) {
        toast.error("指導者名を入力してください");
        return;
      }

      if (!weight || isNaN(parseFloat(weight))) {
        toast.error("有効な体重を入力してください");
        return;
      }

      if (!height || isNaN(parseFloat(height))) {
        toast.error("有効な身長を入力してください");
        return;
      }

      // Check if user already has a fighter profile
      const { data: existingFighter, error: checkError } = await supabase
        .from("fighters")
        .select("id")
        .eq("user_id", user.id)
        .single();

      if (checkError && checkError.code !== "PGRST116") { // PGRST116 is "no rows returned" error
        console.error("Error checking existing fighter:", checkError);
        toast.error("既存の選手データの確認中にエラーが発生しました");
        return;
      }

      if (existingFighter) {
        toast.error("すでに選手登録が完了しています");
        return;
      }

      const { error: insertError } = await supabase
        .from("fighters")
        .insert({
          user_id: user.id,
          weight: parseFloat(weight),
          height: parseFloat(height),
          dojo_id: dojoId,
          belt_id: beltId,
          instructor: instructor,
          is_active: true,
        });

      if (insertError) {
        console.error("Insert error:", insertError);
        if (insertError.code === "23503") {
          toast.error("選択された道場または帯が無効です");
        } else if (insertError.code === "23505") {
          toast.error("すでに選手登録が完了しています");
        } else {
          toast.error(`選手登録に失敗しました: ${insertError.message}`);
        }
        return;
      }

      toast.success("選手登録が完了しました");
      onSuccess();
    } catch (error) {
      console.error("Error in handleSubmit:", error);
      toast.error("予期せぬエラーが発生しました。もう一度お試しください。");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">道場</label>
        <Select value={dojoId} onValueChange={setDojoId} required>
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

      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            登録中...
          </>
        ) : (
          "選手登録"
        )}
      </Button>
    </form>
  );
};