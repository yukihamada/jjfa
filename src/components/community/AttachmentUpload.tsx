import { useState } from "react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { Loader2, Upload, Image as ImageIcon, Video } from "lucide-react";
import { toast } from "sonner";

interface AttachmentUploadProps {
  onUploadComplete: (urls: { url: string; type: string }[]) => void;
  children?: React.ReactNode;
}

export const AttachmentUpload = ({ onUploadComplete, children }: AttachmentUploadProps) => {
  const [isUploading, setIsUploading] = useState(false);
  const MAX_FILE_SIZE = 1024 * 1024 * 1024; // 1GB in bytes

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setIsUploading(true);
    const uploadedFiles: { url: string; type: string }[] = [];

    try {
      for (const file of files) {
        // Check file type
        if (!file.type.startsWith('image/') && !file.type.startsWith('video/')) {
          toast.error('画像または動画ファイルのみアップロード可能です');
          continue;
        }

        // Check file size (1GB limit)
        if (file.size > MAX_FILE_SIZE) {
          toast.error('ファイルサイズは1GB以下にしてください');
          continue;
        }

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

      if (uploadedFiles.length > 0) {
        onUploadComplete(uploadedFiles);
        toast.success('ファイルのアップロードが完了しました');
      }
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
        className="w-full h-32 border-2 border-dashed rounded-2xl flex flex-col gap-3 hover:border-primary hover:bg-primary/5 transition-all duration-300 group"
        disabled={isUploading}
      >
        <label className="flex flex-col items-center justify-center w-full h-full cursor-pointer">
          {isUploading ? (
            <>
              <Loader2 className="w-8 h-8 mb-3 animate-spin text-primary" />
              <span className="text-base font-medium text-primary">アップロード中...</span>
            </>
          ) : (
            <>
              <div className="w-12 h-12 mb-3 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Upload className="w-6 h-6 text-primary" />
              </div>
              <span className="text-base font-medium mb-1">
                クリックまたはドラッグ＆ドロップでファイルを添付
              </span>
              <span className="text-sm text-muted-foreground">
                対応形式: 画像（PNG, JPG）、動画（MP4） - 上限: 1GB
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