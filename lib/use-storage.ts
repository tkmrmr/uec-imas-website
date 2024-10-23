import { useEffect, useState } from "react";

export default function useStorge(key: string, initValue: number) {
  const [value, setValue] = useState<number>(initValue);

  const onChange = (newValue: number) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  useEffect(() => {
    const data = localStorage.getItem(key);
    if (data) {
      setValue(JSON.parse(data) as number);
    }
  }, [key]);
  return [value, onChange] as [number, (value: number) => void];
}
