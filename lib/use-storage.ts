import { useEffect, useState } from "react";

export default function useStorge(key: string, initValue: string) {
  const [value, setValue] = useState(initValue);
  const onChange = (newValue: string) => {
    setValue(newValue);
    localStorage.setItem(key, newValue);
  };

  useEffect(() => {
    const data = localStorage.getItem(key);
    if (data) {
      setValue(data);
    }
  }, [key]);
  return [value, onChange];
}
