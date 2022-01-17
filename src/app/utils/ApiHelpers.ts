import { ApiCallParams, envConfig } from "../utils";

export const callApi = async (params: any) => {
  const { url, body, query, method } = params;
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Accept", "application/json");
  const request = new Request(url, {
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

async function postData(url = "", data = {}) {
//   new Promise<any>((resolve) => {
//     // Get result
//     resolve(result)
// }).then(r => console.log(r.id))
  
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "no-cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  })
    .then((response) => response.json())
    .then((result) => {
      console.log("Success:", result);
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  return response; // parses JSON response into native JavaScript objects
}

export const callImageApi = async (params: any) => {
  const BASE_API_URL = "https://freeimage.host/api/1/upload";
  const query = {
    key: envConfig.ImageUploadApiKey,
    source: params, // Either a image URL or a base64 encoded image string
    format: "json",
  };

  const request = `${BASE_API_URL}/?key=${query.key}&source=${query.source}&format=${query.format}`;
  const response: any = await postData(request);
  return response.image.url;
};
