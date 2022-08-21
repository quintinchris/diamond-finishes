export type EmailTemplateParams = {
  name: string;
  contact: string;
  message: string;
};

export interface SendEmailParams {
  name: string;
  message: string;
  attachments?: Attachment[];
}

export interface Attachment {
  filename: string;
  encoding: string;
  content: string | Buffer;
}

export interface SendEmailResponse {
  emailSent: boolean
}