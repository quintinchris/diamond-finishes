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
    mode: "no-cors", // this returns opaque (useless) respone -> use cors instead
    cache: "no-cache",
    // credentials: "include",
    headers: {
      "Cookie": "PHPSESSID=72tu1moejg1b3deg5cafmske9l",
      "Content-Type": "*",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    }
  })
};

export function getImageUrl(base64Image: string): Promise<any> {
  const baseUrl = "https://freeimage.host/api/1/upload";
  const apiKey = envConfig.ImageUploadApiKey ?? console.log(`error accessing api key`);
  const requestUrl = `https://cors-anywhere.herokuapp.com/${baseUrl}?key=${apiKey}&format=json`;
  
  return new Promise((resolve, reject) => {
    if (apiKey) {
      callApi(requestUrl, "POST", base64Image)
      .then((response) => {
        resolve({
          data: response.json(),
        })
      })
      .catch((error) => reject(error));
    } else {
      reject(`error accessing api key`);
    }
  })
}

// export async function blah(imageFile: any): Promise<any> {
//   const BASE_API_URL = "https://freeimage.host/api/1/upload";
//   const ApiKey = envConfig.ImageUploadApiKey
//     ? envConfig.ImageUploadApiKey
//     : null;
//   if (!ApiKey) console.log(`error accessing api key`);

//   const query = {
//     key: ApiKey,
//     source: imageFile, // Either a image URL or a base64 encoded image string
//     format: "json",
//   };

//   const request = `${BASE_API_URL}?key=${query.key}&source=${imageFile}&format=${query.format}`;
//   const response = await fetch(request, {
//     method: "POST",
//     mode: "no-cors",
//     cache: "no-cache",
//     credentials: "same-origin",
//     headers: {
//       "Content-Type": "*",
//       "Access-Control-Allow-Origin": "*",
//       "Access-Control-Allow-Headers":
//         "Origin, X-Requested-With, Content-Type, Accept",
//       "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
//     },
//   });

//   const data = await response.json();

//   if (response.ok) {
//     return Promise.resolve(data?.image?.url);
//   } else {
//     const error = new Error(data.error);
//     return Promise.reject(error);
//   }
// };

// export const postData = async (url = "", data = {}) => {
//   const response: any = await fetch(url, {
//     method: "POST",
//     mode: "no-cors",
//     cache: "no-cache",
//     credentials: "same-origin",
//     headers: {
//       "Content-Type": "application/json",
//       "Access-Control-Allow-Origin": "*",
//       "Access-Control-Allow-Headers":
//         "Origin, X-Requested-With, Content-Type, Accept",
//       "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
//     },
//     redirect: "follow",
//     referrerPolicy: "no-referrer",
//     body: JSON.stringify(data),
//   })
//     .then((response) => response.json())
//     .then((result) => {
//       console.log("Success:", result);
//       return response;
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//     });
// };

// export const callImageApi = async (imageFile: any) => {
//   const BASE_API_URL = "https://freeimage.host/api/1/upload";
//   const ApiKey = envConfig.ImageUploadApiKey
//     ? envConfig.ImageUploadApiKey
//     : null;
//   if (!ApiKey) console.log(`error accessing api key`);

//   const query = {
//     key: ApiKey,
//     source: imageFile, // Either a image URL or a base64 encoded image string
//     format: "json",
//   };

//   const request = `${BASE_API_URL}?key=${query.key}&source=${query.source}&format=${query.format}`;
//   const response: any = await postData(request);
//   return response.image.url;
// };

// export const callImageApiWithFile = async (imageFile: any) => {
//   const BASE_API_URL = "https://freeimage.host/api/1/upload";
//   const ApiKey = envConfig.ImageUploadApiKey
//     ? envConfig.ImageUploadApiKey
//     : null;
//   if (!ApiKey) console.log(`error accessing api key`);

//   const query = {
//     key: ApiKey,
//     source: imageFile, // Either a image URL or a base64 encoded image string
//     format: "json",
//   };

//   const request = `${BASE_API_URL}?key=${query.key}&source=${query.source}&format=${query.format}`;
//   return fetch(request, {
//     method: "POST",
//     mode: "no-cors",
//     cache: "no-cache",
//     credentials: "same-origin",
//     headers: {
//       "Content-Type": "*",
//       "Access-Control-Allow-Origin": "*",
//       "Access-Control-Allow-Headers":
//         "Origin, X-Requested-With, Content-Type, Accept",
//       "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
//     },
//   }).then((response) => response.json());
// };