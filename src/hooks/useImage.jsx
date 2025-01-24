import { useState, useEffect } from "react";

const useImage = (src) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setImage(img);
    img.onerror = () => console.error(`Failed to load image: ${src}`);
  }, [src]);

  return [image];
};

export default useImage;
