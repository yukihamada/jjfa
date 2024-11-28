import { useState } from "react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { Loader2, File, Image, Video } from "lucide-react";
import { toast } from "sonner";

interface AttachmentUploadProps {
  onUploadComplete: (urls: { url: string; type: string }[]) => void;
}

export const AttachmentUpload = ({ onUploadComplete }: AttachmentUploadProps) => {
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

  return (
    <div className="mt-4">
      <Button
        variant="outline"
        className="w-full"
        disabled={isUploading}
      >
        <label className="flex items-center justify-center w-full cursor-pointer">
          {isUploading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              アップロード中...
            </>
          ) : (
            <>
              <File className="w-4 h-4 mr-2" />
              画像・動画を添付
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