import { useEffect, useState } from "react";
import { StyledImage } from "../Landing.style";
import circleImagePng from "../../../assets/main-circle.png";

const RotatingImage = () => {
  const [rotation, setRotation] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prevRotation) => {
        const newRotation = (prevRotation + 0.3) % 360;
        return newRotation;
      });
    }, 12);

    return () => clearInterval(interval);
  }, []);

  return (
    <StyledImage
      src={circleImagePng}
      alt="circle-image"
      style={{ transform: `rotate(${rotation}deg)` }}
    />
  );
};

export default RotatingImage;
