import { Image, Video, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

interface Attachment {
  url: string;
  type: string;
}

interface AttachmentPreviewProps {
  attachments: Attachment[];
  onRemove?: (index: number) => void;
  readonly?: boolean;
}

export const AttachmentPreview = ({ attachments, onRemove, readonly }: AttachmentPreviewProps) => {
  if (!attachments || attachments.length === 0) return null;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
      {attachments.map((attachment, index) => (
        <div key={index} className="relative group">
          {attachment.type === 'image' ? (
            <div className="relative aspect-video">
              <img
                src={attachment.url}
                alt={`添付画像 ${index + 1}`}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
          ) : attachment.type === 'video' ? (
            <div className="relative aspect-video">
              <video
                src={attachment.url}
                controls
                className="rounded-lg w-full h-full object-cover"
                poster={`${attachment.url}#t=0.1`} // Generate thumbnail from the first frame
              />
            </div>
          ) : null}
          
          {!readonly && onRemove && (
            <Button
              variant="destructive"
              size="icon"
              className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={() => onRemove(index)}
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
      ))}
    </div>
  );
};