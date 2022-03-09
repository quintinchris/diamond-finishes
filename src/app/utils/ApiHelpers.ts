import { envConfig } from "../utils";

export function convertToBase64(file: Blob) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsBinaryString (file);
    fileReader.onload = () => {
      resolve(window.btoa(fileReader.result?.toString()!));
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
}

export function callApi(
  URL: string,
  method: string = "GET",
  body?: any,
): Promise<Response> {
  const formData = new FormData();
  formData.append("source", body);
  return fetch(URL, {
    method: method,
    body: formData,
    mode: "cors", // this returns opaque (useless) respone -> use cors instead
    cache: "no-cache",
    // credentials: "include",
    headers: {
      "Cookie": "PHPSESSID=72tu1moejg1b3deg5cafmske9l",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    }
  })
};

