import axios from "axios";
import {Attachment, SendEmailResponse, SendEmailParams} from "./types";

export const sendEmail = async (
  name: string,
  message: string,
  images?: string[],
) => {
  const data: SendEmailParams = {name, message};
  if (images) {
    data.attachments = images?.map((image) => {
      return {
        filename: `attachment-${image.indexOf}.jpeg`,
        content: image,
        encoding: "base64",
      };
    });
  }

  const endpoint = process.env.REACT_APP_API_ENDPOINT;
  const response: SendEmailResponse = await axios.post(endpoint ?? "", data);

  return response?.emailSent;
};

export const convertToBase64 = (file: Blob): Promise<string> => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsBinaryString(file);
    fileReader.onload = () => {
      resolve(window.btoa(fileReader.result?.toString()!));
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};
