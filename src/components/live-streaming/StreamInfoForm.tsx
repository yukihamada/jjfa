import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface StreamInfoFormProps {
  title: string;
  description: string;
  onTitleChange: (value: string) => void;
  onDescriptionChange: (value: string) => void;
  onUpdate: () => void;
  isStreaming: boolean;
}

export const StreamInfoForm = ({
  title,
  description,
  onTitleChange,
  onDescriptionChange,
  onUpdate,
  isStreaming
}: StreamInfoFormProps) => {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="title" className="text-base font-medium">配信タイトル</Label>
        <Input
          id="title"
          value={title}
          onChange={(e) => onTitleChange(e.target.value)}
          placeholder="配信のタイトルを入力"
          disabled={isStreaming}
          className="text-lg"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description" className="text-base font-medium">配信の説明</Label>
        <Textarea
          id="description"
          value={description}
          onChange={(e) => onDescriptionChange(e.target.value)}
          placeholder="配信の説明を入力（任意）"
          disabled={isStreaming}
          className="min-h-[100px] text-base"
        />
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