import {ChangeEvent, useState} from "react";

const useTextField = (label: string, initialValue: string = '') => {
  const [value, setValue] = useState<string>(initialValue);
  const [error, setError] = useState<boolean>(false);

  const onChange = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setValue(e.target.value);
    setError(false);
  };

  const empty = (): boolean => {
    const trimValue = value.trim();
    return trimValue === '' || trimValue === initialValue;
  };

  const alert = () => {
    setError(true);
    setValue(value.trim());
    setTimeout(() => setError(false), 2000);
  };

  const clear = () => {
    setValue('')
  }

  return {
    bind: {
      label,
      value,
      error,
      onChange,
    },
    empty,
    value: value.trim(),
    alert,
    clear,
  };
};

export default useTextField;