import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Camera, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface ProfilePhotoUploadProps {
  userId: string;
  currentPhotoUrl?: string;
  onPhotoUpdate: (url: string) => void;
}

export const ProfilePhotoUpload = ({ userId, currentPhotoUrl, onPhotoUpdate }: ProfilePhotoUploadProps) => {
  const [uploading, setUploading] = useState(false);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setUploading(true);
      const file = event.target.files?.[0];
      if (!file) return;

      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        toast.error("ファイルサイズは5MB以下にしてください");
        return;
      }

      // Check file type
      if (!file.type.startsWith('image/')) {
        toast.error("画像ファイルのみアップロード可能です");
        return;
      }

      const fileExt = file.name.split('.').pop();
      const filePath = `${userId}/${Date.now()}.${fileExt}`;

      const { error: uploadError, data } = await supabase.storage
        .from('profile_photos')
        .upload(filePath, file, {
          upsert: true,
        });

      if (uploadError) {
        throw uploadError;
      }

      const { data: { publicUrl } } = supabase.storage
        .from('profile_photos')
        .getPublicUrl(filePath);

      onPhotoUpdate(publicUrl);
      toast.success("プロフィール写真を更新しました");
    } catch (error) {
      console.error('Error uploading file:', error);
      toast.error("写真のアップロードに失敗しました");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <Avatar className="w-24 h-24">
        <AvatarImage src={currentPhotoUrl} />
        <AvatarFallback>
          {uploading ? (
            <Loader2 className="w-8 h-8 animate-spin" />
          ) : (
            <Camera className="w-8 h-8 text-muted-foreground" />
          )}
        </AvatarFallback>
      </Avatar>
      <div className="flex items-center gap-2">
        <input
          type="file"
          id="photo-upload"
          className="hidden"
          accept="image/*"
          onChange={handleFileUpload}
          disabled={uploading}
        />
        <Button
          variant="outline"
          size="sm"
          onClick={() => document.getElementById('photo-upload')?.click()}
          disabled={uploading}
        >
          {uploading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              アップロード中...
            </>
          ) : (
            <>
              <Camera className="w-4 h-4 mr-2" />
              写真を変更
            </>
          )}
        </Button>
      </div>
    </div>
  );
};