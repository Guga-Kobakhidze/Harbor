import { useEffect, useRef } from "react";

type Handler = () => void;

interface UseOutsideClickProps {
  handler: Handler;
  listenCapturing?: boolean;
}

function useOutsideClick({
  handler,
  listenCapturing = true,
}: UseOutsideClickProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) handler();
    }

    document.addEventListener("click", handleClick, listenCapturing);

    return () =>
      document.removeEventListener("click", handleClick, listenCapturing);
  }, [handler, listenCapturing]);

  return ref;
}

export default useOutsideClick;
