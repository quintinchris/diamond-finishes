import { useState } from "react";
import { EmailTemplateParams } from "./types";

export const setParam = (params: EmailTemplateParams, key: string, value: string) => {
  switch (key) {
    case "name":
      params.name = value;
      break;
    case "contact":
      params.contact = value;
      break;
    case "message":
      params.message = value;
      break;
    default:
      break;
  }
}

export const useInput = (initialValue: any) => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    setValue,
    reset: () => setValue(""),
    bind: {
      value,
      onChange: (event: any) => {
        setValue(event.target.value);
      },
    },
  };
};
