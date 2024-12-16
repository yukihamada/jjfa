import { Card, CardContent } from "@/components/ui/card";
import { AnimatePresence } from "framer-motion";
import { useDiscussionForm } from "./form/useDiscussionForm";
import { DiscussionFormInputs } from "./form/DiscussionFormInputs";
import { DiscussionFormPreview } from "./form/DiscussionFormPreview";
import { DiscussionConfirmDialog } from "./form/DiscussionConfirmDialog";

interface DiscussionFormProps {
  onSuccess?: () => void;
}

export const DiscussionForm = ({ onSuccess }: DiscussionFormProps) => {
  const {
    formState,
    setFormState,
    errors,
    isValid,
    MAX_TITLE_LENGTH,
    MAX_CONTENT_LENGTH,
    createDiscussion,
    handleSubmit,
    handleConfirmedSubmit,
  } = useDiscussionForm(onSuccess);

  return (
    <>
      <Card className="bg-white/80 backdrop-blur-sm shadow-sm border-gray-100">
        <CardContent className="pt-4">
          <DiscussionFormInputs
            formState={formState}
            setFormState={setFormState}
            errors={errors}
            MAX_TITLE_LENGTH={MAX_TITLE_LENGTH}
            MAX_CONTENT_LENGTH={MAX_CONTENT_LENGTH}
            isSubmitting={createDiscussion.isPending}
            onSubmit={handleSubmit}
          />
          <AnimatePresence>
            {formState.showPreview && (
              <DiscussionFormPreview formState={formState} />
            )}
          </AnimatePresence>
        </CardContent>
      </Card>

      <DiscussionConfirmDialog
        formState={formState}
        setFormState={setFormState}
        onConfirm={handleConfirmedSubmit}
        isSubmitting={createDiscussion.isPending}
      />
    </>
  );
};