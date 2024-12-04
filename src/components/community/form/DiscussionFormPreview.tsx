import { PostPreview } from "./PostPreview";
import { useFormContext } from "react-hook-form";

export const DiscussionFormPreview = () => {
  const { watch } = useFormContext();
  const title = watch("title");
  const content = watch("content");
  const visibility = watch("visibility");

  if (!title && !content) {
    return (
      <div className="text-center text-gray-500 p-4">
        プレビューはここに表示されます
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <PostPreview
        title={title || "無題"}
        content={content || ""}
        visibility={visibility || "public"}
      />
    </div>
  );
};