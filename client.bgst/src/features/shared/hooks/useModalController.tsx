import { ReactNode, useState } from "react";

export const useModalController = (title: string, children: ReactNode, onClose: () => void, onSubmit: () => void) => {
  const [open, setOpen] = useState<boolean>(false);
  return {
    open,
    setOpen,
    children,
    title,
    onClose,
    onSubmit
  };
};
