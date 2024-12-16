import { useState } from "react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { Loader2, Upload, Image as ImageIcon, Video } from "lucide-react";
import { toast } from "sonner";

interface AttachmentUploadProps {
  onUploadComplete: (urls: { url: string; type: string }[]) => void;
  children?: React.ReactNode; // Added children prop
}

export const AttachmentUpload = ({ onUploadComplete, children }: AttachmentUploadProps) => {
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setIsUploading(true);
    const uploadedFiles: { url: string; type: string }[] = [];

    try {
      for (const file of files) {
        const fileExt = file.name.split('.').pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const filePath = `${fileName}`;

        const { data, error } = await supabase.storage
          .from('discussion_attachments')
          .upload(filePath, file);

        if (error) throw error;

        const { data: { publicUrl } } = supabase.storage
          .from('discussion_attachments')
          .getPublicUrl(filePath);

        uploadedFiles.push({
          url: publicUrl,
          type: file.type.startsWith('image/') ? 'image' : 
                file.type.startsWith('video/') ? 'video' : 'file'
        });
      }

      onUploadComplete(uploadedFiles);
      toast.success('ファイルのアップロードが完了しました');
    } catch (error) {
      console.error('Upload error:', error);
      toast.error('ファイルのアップロードに失敗しました');
    } finally {
      setIsUploading(false);
    }
  };

  if (children) {
    return (
      <div onClick={() => document.getElementById('file-upload')?.click()}>
        {children}
        <input
          id="file-upload"
          type="file"
          multiple
          accept="image/*,video/*"
          className="hidden"
          onChange={handleFileChange}
          disabled={isUploading}
        />
      </div>
    );
  }

  return (
    <div className="relative">
      <Button
        variant="outline"
        className="w-full h-24 border-dashed flex flex-col gap-2 hover:border-primary hover:bg-primary/5"
        disabled={isUploading}
      >
        <label className="flex flex-col items-center justify-center w-full h-full cursor-pointer">
          {isUploading ? (
            <>
              <Loader2 className="w-6 h-6 mb-2 animate-spin" />
              <span className="text-sm">アップロード中...</span>
            </>
          ) : (
            <>
              <Upload className="w-6 h-6 mb-2" />
              <span className="text-sm">クリックまたはドラッグ＆ドロップでファイルを添付</span>
              <span className="text-xs text-muted-foreground mt-1">
                対応形式: 画像（PNG, JPG）、動画（MP4）
              </span>
            </>
          )}
          <input
            type="file"
            multiple
            accept="image/*,video/*"
            className="hidden"
            onChange={handleFileChange}
            disabled={isUploading}
          />
        </label>
      </Button>
    </div>
  );
};