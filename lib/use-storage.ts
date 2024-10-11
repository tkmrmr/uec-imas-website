import { useEffect, useState } from "react";

export default function useStorge(key: string, initValue: any) {
  const [value, setValue] = useState(initValue);
  const onChange = (newValue: any) => {
    setValue(newValue);
    if (typeof newValue === "number") {
      localStorage.setItem(key, newValue.toString());
    } else {
      localStorage.setItem(key, newValue);
    }
  };

  useEffect(() => {
    const data = localStorage.getItem(key);
    if (data) {
      setValue(data);
    }
  }, [key]);
  return [value, onChange];
}
