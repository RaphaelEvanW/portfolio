"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type ThemedIconProps = {
  darkSrc: string;
  lightSrc: string;
  alt?: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
};

export default function ThemedIcon({
  darkSrc,
  lightSrc,
  alt = "",
  width,
  height,
  className = "",
  priority = false,
}: ThemedIconProps) {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const readTheme = () => {
      setIsLight(document.documentElement.classList.contains("light"));
    };

    readTheme();

    const observer = new MutationObserver(readTheme);

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Image
      src={isLight ? lightSrc : darkSrc}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      className={className}
    />
  );
}