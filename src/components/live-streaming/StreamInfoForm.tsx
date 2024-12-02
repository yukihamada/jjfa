import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

interface StreamInfoFormProps {
  title: string;
  description: string;
  onTitleChange: (value: string) => void;
  onDescriptionChange: (value: string) => void;
  onUpdate: () => void;
  isStreaming: boolean;
  quality?: string;
  onQualityChange?: (value: string) => void;
}

export const StreamInfoForm = ({
  title,
  description,
  onTitleChange,
  onDescriptionChange,
  onUpdate,
  isStreaming,
  quality = "720p",
  onQualityChange
}: StreamInfoFormProps) => {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="title">配信タイトル</Label>
        <Input
          id="title"
          value={title}
          onChange={(e) => onTitleChange(e.target.value)}
          placeholder="配信のタイトルを入力"
          disabled={isStreaming}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">配信の説明</Label>
        <Textarea
          id="description"
          value={description}
          onChange={(e) => onDescriptionChange(e.target.value)}
          placeholder="配信の説明を入力"
          disabled={isStreaming}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="quality">配信品質</Label>
        <Select
          value={quality}
          onValueChange={onQualityChange}
          disabled={isStreaming}
        >
          <SelectTrigger>
            <SelectValue placeholder="配信品質を選択" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1080p">1080p (高品質)</SelectItem>
            <SelectItem value="720p">720p (推奨)</SelectItem>
            <SelectItem value="480p">480p (低品質)</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {!isStreaming && (
        <Button 
          onClick={onUpdate} 
          variant="outline" 
          className="w-full"
        >
          配信情報を更新
        </Button>
      )}
    </div>
  );
};