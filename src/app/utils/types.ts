export type EmailTemplateParams = {
  name: string;
  contact: string;
  message: string;
};

export type ApiCallParams = {
  url: string;
  body?: string;
  query?: string;
  method?: string;
}
