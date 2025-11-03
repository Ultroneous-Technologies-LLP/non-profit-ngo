import { useState, useEffect } from "react";

const INITIAL_WIDTH = 0;

export const useWindowSize = (): { width: number } => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : INITIAL_WIDTH,
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
