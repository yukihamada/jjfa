import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatePresence } from "framer-motion";
import { FormTips } from "./form/FormTips";
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
      <Card className="bg-white/80 backdrop-blur-sm shadow-lg">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">新しい投稿を作成</CardTitle>
          <p className="text-sm text-muted-foreground">
            コミュニティと知識を共有しましょう
          </p>
        </CardHeader>
        <CardContent>
          <FormTips />
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
            {formState.showPreview && <DiscussionFormPreview formState={formState} />}
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