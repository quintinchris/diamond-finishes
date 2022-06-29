export const isImageUploadOn = () => {
  const envValue = process.env.REACT_APP_IMAGE_UPLOAD_ON ?? "";
  if (envValue && envValue.toLowerCase() === "true") {
    return true;
  } else {
    return false;
  }
};
