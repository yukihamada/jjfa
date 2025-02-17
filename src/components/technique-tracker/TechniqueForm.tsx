import { useState, useEffect } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Loader2, Upload } from "lucide-react";
import { TechniqueSelect } from "./TechniqueSelect";
import { SkillLevelSelect, type SkillLevel } from "./SkillLevelSelect";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface TechniqueFormProps {
  onSuccess: () => void;
  editingProgress?: any;
}

export const TechniqueForm = ({ onSuccess, editingProgress }: TechniqueFormProps) => {
  const [selectedTechnique, setSelectedTechnique] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [skillLevel, setSkillLevel] = useState<SkillLevel>("beginner");
  const [notes, setNotes] = useState("");
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const queryClient = useQueryClient();

  useEffect(() => {
    if (editingProgress) {
      setSelectedTechnique(editingProgress.technique || "");
      setSkillLevel(editingProgress.skill_level || "beginner");
      setNotes(editingProgress.notes || "");
    }
  }, [editingProgress]);

  const updateProgress = useMutation({
    mutationFn: async () => {
      if (!selectedTechnique) {
        throw new Error("技を選択してください");
      }

      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("Not authenticated");

      setIsUploading(true);
      setError(null);
      let videoUrl = "";

      if (videoFile) {
        const fileExt = videoFile.name.split(".").pop();
        const filePath = `${user.id}/${crypto.randomUUID()}.${fileExt}`;
        
        const { error: uploadError } = await supabase.storage
          .from("videos")
          .upload(filePath, videoFile);

        if (uploadError) throw uploadError;

        const { data: { publicUrl } } = supabase.storage
          .from("videos")
          .getPublicUrl(filePath);
        
        videoUrl = publicUrl;
      }

      if (editingProgress) {
        const { error } = await supabase
          .from("learning_progress")
          .update({
            technique: selectedTechnique,
            skill_level: skillLevel,
            notes,
            video_url: videoUrl || editingProgress.video_url,
          })
          .eq('id', editingProgress.id);

        if (error) throw error;
      } else {
        const { error } = await supabase
          .from("learning_progress")
          .insert({
            user_id: user.id,
            technique: selectedTechnique,
            skill_level: skillLevel,
            notes,
            video_url: videoUrl || null,
          });

        if (error) throw error;
      }
    },
    onSuccess: () => {
      toast.success(editingProgress ? "進捗を更新しました！" : "進捗を保存しました！");
      queryClient.invalidateQueries({ queryKey: ["learningProgress"] });
      setNotes("");
      setVideoFile(null);
      setError(null);
      onSuccess();
    },
    onError: (error: any) => {
      console.error("Error updating progress:", error);
      let errorMessage = editingProgress ? "進捗の更新に失敗しました。" : "進捗の保存に失敗しました。";
      
      if (error.code === "23514" && error.message.includes("valid_skill_level")) {
        errorMessage = "選択された熟練度が無効です。もう一度選択してください。";
      } else if (error.message) {
        errorMessage = error.message;
      }
      
      setError(errorMessage);
      toast.error(errorMessage);
    },
    onSettled: () => {
      setIsUploading(false);
    }
  });

  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setVideoFile(e.target.files[0]);
    }
  };

  return (
    <div className="space-y-4">
      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <TechniqueSelect
        selectedCategory={selectedCategory}
        selectedTechnique={selectedTechnique}
        onCategoryChange={setSelectedCategory}
        onTechniqueChange={setSelectedTechnique}
      />

      <SkillLevelSelect
        skillLevel={skillLevel}
        onSkillLevelChange={setSkillLevel}
      />

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">
          メモ
        </label>
        <Textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="この技術についてのメモを書いてください"
          className="min-h-[100px]"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">
          動画
        </label>
        <div className="flex items-center gap-4">
          <Input
            type="file"
            accept="video/*"
            onChange={handleVideoChange}
            className="hidden"
            id="video-upload"
          />
          <label
            htmlFor="video-upload"
            className="flex items-center gap-2 px-4 py-2 border rounded-md cursor-pointer hover:bg-slate-50"
          >
            <Upload className="h-4 w-4" />
            {videoFile ? videoFile.name : "動画をアップロード"}
          </label>
        </div>
      </div>

      <Button
        onClick={() => updateProgress.mutate()}
        disabled={!selectedTechnique || isUploading}
        className="w-full"
      >
        {isUploading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            {editingProgress ? "更新中..." : "アップロード中..."}
          </>
        ) : (
          editingProgress ? "進捗を更新" : "進捗を保存"
        )}
      </Button>
    </div>
  );
};