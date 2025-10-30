import { useState, useEffect } from "react";

export const useWindowSize = (): { width: number } => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
  });

  useEffect(() => {
    const handleResize = (): void => {
      setWindowSize({ width: window.innerWidth });
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return (): void => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};
