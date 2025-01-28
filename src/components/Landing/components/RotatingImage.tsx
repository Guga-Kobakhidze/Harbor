import { useEffect, useState } from "react";
import { StyledImage } from "../Landing.style";

const RotatingImage = ({ src, alt }: { src: string; alt: string }) => {
  const [rotation, setRotation] = useState<number>(0);

  useEffect(() => {
    const savedRotation = localStorage.getItem("imageRotation");
    if (savedRotation) {
      setRotation(parseFloat(savedRotation));
    }

    const interval = setInterval(() => {
      setRotation((prevRotation) => {
        const newRotation = (prevRotation + 0.3) % 360;
        localStorage.setItem("imageRotation", newRotation.toString());
        return newRotation;
      });
    }, 1000 / 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <StyledImage
      src={src}
      alt={alt}
      style={{ transform: `rotate(${rotation}deg)` }}
    />
  );
};

export default RotatingImage;
