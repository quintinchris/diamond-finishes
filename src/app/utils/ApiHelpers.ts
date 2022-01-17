import { envConfig } from "../utils";

export const callApi = async (params: any) => {
  const { url, body, query, method } = params;
  const headers = new Headers();
  const requestUrl = `${url}?${query}`;
  headers.append("Content-Type", "application/json");
  headers.append("Accept", "application/json");
  const request = new Request(requestUrl, {
    method,
    body: body ? JSON.stringify(body) : undefined,
    headers,
    mode: "cors",
    cache: "default",
  });
  const response = await fetch(request);
  const data = await response.json();
  return data;
};

export const postData = async (url = "", data = {}) => {
  const response: any = await fetch(url, {
    method: "POST",
    mode: "no-cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log("Success:", result);
      return response;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

export const callImageApi = async (imageFile: any) => {
  const BASE_API_URL = "https://freeimage.host/api/1/upload";
  const ApiKey = envConfig.ImageUploadApiKey
    ? envConfig.ImageUploadApiKey
    : null;
  if (!ApiKey) console.log(`error accessing api key`);

  const query = {
    key: ApiKey,
    source: imageFile, // Either a image URL or a base64 encoded image string
    format: "json",
  };

  const request = `${BASE_API_URL}?key=${query.key}&source=${query.source}&format=${query.format}`;
  const response: any = await postData(request);
  return response.image.url;
};

export const callImageApiWithFile = async (imageFile: any) => {
  const BASE_API_URL = "https://freeimage.host/api/1/upload";
  const ApiKey = envConfig.ImageUploadApiKey
    ? envConfig.ImageUploadApiKey
    : null;
  if (!ApiKey) console.log(`error accessing api key`);
  const formData = new FormData();
  formData.append("File", imageFile ?? "");

  const query = {
    key: ApiKey,
    // source: imageFile, // Either a image URL or a base64 encoded image string
    format: "json",
  };

  const request = `${BASE_API_URL}?key=${query.key}&format=${query.format}`;
  const response: any = await fetch(request, {
    method: "POST",
    body: formData,
    mode: "no-cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "*",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    },
  })
    .then((response) => response.json())
    .then((result) => {
      console.log("Success:", result);
      return response.image.url;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
