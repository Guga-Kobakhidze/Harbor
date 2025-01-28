import { useCallback } from "react";

export const useScrollTo = (ref?: React.RefObject<HTMLElement> | null) => {
  const behavior: ScrollBehavior = "smooth";

  const scrollTo = useCallback(() => {
    if (ref?.current) ref.current.scrollIntoView({ behavior });
    else window.scrollTo({ top: 0, left: 0, behavior });
  }, [ref]);

  return { scrollTo };
};
