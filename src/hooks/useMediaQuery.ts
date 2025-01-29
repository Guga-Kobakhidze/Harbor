import { useEffect, useState } from "react";

const useMediaQuery = (size: number) => {
  const [isSmall, setIsSmall] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmall(window.innerWidth < size);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [size]);

  return { isSmall };
};

export default useMediaQuery;
