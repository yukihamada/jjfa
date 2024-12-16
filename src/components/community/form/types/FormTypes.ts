export interface DiscussionFormState {
  content: string;
  visibility: "public" | "dojo" | "private" | "instructor";
  attachments: any[];
  showConfirmDialog: boolean;
}

export interface FormErrors {
  content?: string;
}