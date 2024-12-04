import { motion } from "framer-motion";
import { PostPreview } from "./PostPreview";
import { DiscussionFormState } from "./useDiscussionForm";

interface DiscussionFormPreviewProps {
  formState: DiscussionFormState;
}

export const DiscussionFormPreview = ({ formState }: DiscussionFormPreviewProps) => {
  if (!formState.showPreview) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.2 }}
      className="mt-6 border-t pt-6"
    >
      <PostPreview
        title={formState.title}
        content={formState.content}
        visibility={formState.visibility}
      />
    </motion.div>
  );
};