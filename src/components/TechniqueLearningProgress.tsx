import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { Loader2, Star, Upload } from "lucide-react";

const SKILL_LEVELS = ["beginner", "intermediate", "advanced", "expert", "master"] as const;

export const TechniqueLearningProgress = () => {
  const [selectedTechnique, setSelectedTechnique] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [skillLevel, setSkillLevel] = useState<typeof SKILL_LEVELS[number]>("beginner");
  const [notes, setNotes] = useState("");
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  
  const queryClient = useQueryClient();

  // Fetch technique categories
  const { data: categories } = useQuery({
    queryKey: ["techniqueCategories"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("technique_details")
        .select("category")
        .distinct();
      
      if (error) throw error;
      return data.map(item => item.category);
    }
  });

  // Fetch techniques by category
  const { data: techniques } = useQuery({
    queryKey: ["techniques", selectedCategory],
    queryFn: async () => {
      if (!selectedCategory) return [];
      const { data, error } = await supabase
        .from("technique_details")
        .select("*")
        .eq("category", selectedCategory);
      
      if (error) throw error;
      return data;
    },
    enabled: !!selectedCategory
  });

  // Fetch user's progress
  const { data: userProgress, isLoading: isLoadingProgress } = useQuery({
    queryKey: ["learningProgress"],
    queryFn: async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("Not authenticated");

      const { data, error } = await supabase
        .from("learning_progress")
        .select("*")
        .eq("user_id", user.id);
      
      if (error) throw error;
      return data;
    }
  });

  const updateProgress = useMutation({
    mutationFn: async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("Not authenticated");

      setIsUploading(true);
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

      const { error } = await supabase
        .from("learning_progress")
        .upsert({
          user_id: user.id,
          technique: selectedTechnique,
          skill_level: skillLevel,
          notes,
          video_url: videoUrl || null,
        });

      if (error) throw error;
    },
    onSuccess: () => {
      toast.success("進捗を保存しました！");
      queryClient.invalidateQueries({ queryKey: ["learningProgress"] });
      setNotes("");
      setVideoFile(null);
    },
    onError: (error) => {
      console.error("Error updating progress:", error);
      toast.error("進捗の保存に失敗しました。");
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

  if (isLoadingProgress) {
    return (
      <div className="flex items-center justify-center p-8">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6 p-6 bg-white rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold text-slate-800">柔術技術の習熟度トラッカー</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            技術カテゴリー
          </label>
          <Select
            value={selectedCategory || ""}
            onValueChange={setSelectedCategory}
          >
            <SelectTrigger>
              <SelectValue placeholder="カテゴリーを選択" />
            </SelectTrigger>
            <SelectContent>
              {categories?.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            技術
          </label>
          <Select
            value={selectedTechnique}
            onValueChange={setSelectedTechnique}
            disabled={!selectedCategory}
          >
            <SelectTrigger>
              <SelectValue placeholder="技術を選択" />
            </SelectTrigger>
            <SelectContent>
              {techniques?.map((technique) => (
                <SelectItem key={technique.id} value={technique.technique_name}>
                  {technique.technique_name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            習熟度
          </label>
          <div className="flex gap-1">
            {SKILL_LEVELS.map((level, index) => (
              <button
                key={level}
                onClick={() => setSkillLevel(level)}
                className={`p-2 rounded-full transition-colors ${
                  index < SKILL_LEVELS.indexOf(skillLevel) + 1
                    ? "text-yellow-400"
                    : "text-gray-300"
                }`}
              >
                <Star className="h-6 w-6 fill-current" />
              </button>
            ))}
          </div>
        </div>

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
              アップロード中...
            </>
          ) : (
            "進捗を保存"
          )}
        </Button>
      </div>

      {userProgress && userProgress.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-slate-800 mb-4">最近の進捗</h3>
          <div className="space-y-4">
            {userProgress.map((progress) => (
              <div
                key={progress.id}
                className="p-4 border rounded-lg bg-slate-50"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium text-slate-900">
                      {progress.technique}
                    </h4>
                    <p className="text-sm text-slate-600">{progress.notes}</p>
                  </div>
                  <div className="flex gap-1">
                    {SKILL_LEVELS.map((_, index) => (
                      <Star
                        key={index}
                        className={`h-4 w-4 ${
                          index < SKILL_LEVELS.indexOf(progress.skill_level) + 1
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                {progress.video_url && (
                  <div className="mt-2">
                    <video
                      controls
                      className="w-full rounded"
                      src={progress.video_url}
                    >
                      お使いのブラウザは動画の再生に対応していません。
                    </video>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};