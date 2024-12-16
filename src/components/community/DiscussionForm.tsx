import { Card } from "@/components/ui/card";
import { useDiscussionForm } from "./form/useDiscussionForm";
import { DiscussionFormInputs } from "./form/DiscussionFormInputs";

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
  } = useDiscussionForm(onSuccess);

  return (
    <DiscussionFormInputs
      formState={formState}
      setFormState={setFormState}
      errors={errors}
      MAX_TITLE_LENGTH={MAX_TITLE_LENGTH}
      MAX_CONTENT_LENGTH={MAX_CONTENT_LENGTH}
      isSubmitting={createDiscussion.isPending}
      onSubmit={handleSubmit}
    />
  );
};