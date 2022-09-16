import axios from "axios";
import {SendEmailResponse, SendEmailParams} from "./types";

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

  const headers = {
    "Content-Type": "application/json",
  };

  const url = `${process.env.REACT_APP_API_ENDPOINT}/send-email`;
  const response: SendEmailResponse = await axios.post(url, data, {headers});

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
