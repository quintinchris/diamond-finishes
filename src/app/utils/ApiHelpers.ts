import axios from "axios";

export const sendEmail = async (
  name: string,
  text: string,
  attachments?: string[]
) => {
  const images = attachments?.map((attachment) => {
    return {
      filename: `attachment-${attachment.indexOf}.jpeg`,
      content: attachment,
      encoding: "base64",
    };
  });
  const endpoint = process.env.API_ENDPOINT;
  const response = await axios.post(endpoint, {
    name,
    text,
    images,
  });

  return response.data;
};

export const convertToBase64 = (file: Blob) => {
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
