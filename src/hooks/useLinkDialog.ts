import {useState} from "react";

const useLinkDialog = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [token, setToken] = useState<string>('');

  const show = () => {
    setOpen(true);
  }

  return {
    bind: {
      open,
      setOpen,
      token,
    },
    show,
    setToken,
  }
}

export default useLinkDialog;