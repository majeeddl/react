import { useState } from "react";
import copy from "copy-to-clipboard";

export const useCopyClipboard = (resetInterval = null) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    if (typeof text === "string" || typeof text === "number") {
      copy(text.toString());
      setIsCopied(true);
    } else {
      setIsCopied(false);
      console.error(`Cannot copy typeof ${typeof text} to clipboard, must be a string or number.`);
    }
  };

  return {
    copyToClipboard,
    isCopied,
  };
};
