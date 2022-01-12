import emailjs from "@emailjs/browser";
import { EmailTemplateParams } from "./types";
import {envConfig} from "./envConfig";

export const sendEmail = (params: EmailTemplateParams) => {
  emailjs.init(envConfig.UserId);
  emailjs
    .send(
      envConfig.ServiceId,
      envConfig.TemplateId,
      params
    )
    .then(
      function (response: any) {
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error: any) {
        console.log("FAILED...", error);
      }
    );
};
