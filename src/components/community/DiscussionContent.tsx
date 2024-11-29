import { AttachmentPreview } from "./AttachmentPreview";

interface DiscussionContentProps {
  discussion: any;
}

export const DiscussionContent = ({ discussion }: DiscussionContentProps) => {
  return (
    <>
      <p className="mt-4 text-slate-600 whitespace-pre-wrap leading-relaxed">
        {discussion.content}
      </p>
      {discussion.attachments && discussion.attachments.length > 0 && (
        <AttachmentPreview attachments={discussion.attachments} readonly />
      )}
    </>
  );
};