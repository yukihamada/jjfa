import { PostPreview } from "./PostPreview";

interface DiscussionFormPreviewProps {
  formState: {
    title: string;
    content: string;
    visibility: string;
  };
}

export const DiscussionFormPreview = ({ formState }: DiscussionFormPreviewProps) => {
  if (!formState.title && !formState.content) {
    return (
      <div className="text-center text-gray-500 p-4">
        プレビューはここに表示されます
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <PostPreview
        title={formState.title || "無題"}
        content={formState.content || ""}
        visibility={formState.visibility || "public"}
      />
    </div>
  );
};