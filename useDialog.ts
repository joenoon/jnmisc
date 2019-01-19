import {useState} from 'react';

interface UseDialogControlArgs {
  beforeOpen?: any;
  beforeClose?: any;
}

export function useDialogControl(opts: UseDialogControlArgs) {
  const [isOpen, setIsOpen] = useState(false);

  const open = async () => {
    if (opts.beforeOpen) await opts.beforeOpen();
    setIsOpen(true);
  };

  const close = async (...args: any) => {
    if (opts.beforeClose) await opts.beforeClose();
    setIsOpen(false);
  };

  return {
    open,
    close,
    isOpen,
  };
}

export type UseDialogControl = ReturnType<typeof useDialogControl>;
