import { PostPreview } from "./PostPreview";
import { DiscussionFormState } from "./useDiscussionForm";

interface DiscussionFormPreviewProps {
  formState: DiscussionFormState;
}

export const DiscussionFormPreview = ({ formState }: DiscussionFormPreviewProps) => {
  const { content, visibility } = formState;

  if (!content) {
    return (
      <div className="text-center text-gray-500 p-4">
        プレビューはここに表示されます
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <PostPreview
        title="無題"
        content={content}
        visibility={visibility}
      />
    </div>
  );
};