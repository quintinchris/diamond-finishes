const isImageUploadOn = () => {
  const envValue = process.env.REACT_APP_IMAGE_UPLOAD_ON ?? "";
  if (envValue && envValue.toLowerCase() === "true") {
    return true;
  } else {
    return false;
  }
}

export const envConfig  = {
  ServiceId: process.env.REACT_APP_EMAILJS_SERVICE_ID ?? "",
  TemplateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID ?? "",
  UserId: process.env.REACT_APP_EMAILJS_USER_ID ?? "",
  ImageUploadOn: isImageUploadOn(),
};
