export interface FormErrors {
  content?: string;
}

export interface DiscussionFormState {
  content: string;
  visibility: 'public' | 'dojo' | 'private';
  attachments: { url: string; type: string }[];
  showConfirmDialog: boolean;
}