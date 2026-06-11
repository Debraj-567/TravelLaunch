"use client";

import React, { useEffect, useState } from "react";

const DEFAULT_FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=1200";

type ResilientImageProps = Omit<React.ImgHTMLAttributes<HTMLImageElement>, "src"> & {
  src: string;
  fallbackSrc?: string;
};

export const ResilientImage = ({
  src,
  fallbackSrc = DEFAULT_FALLBACK_IMAGE,
  alt,
  onError,
  ...props
}: ResilientImageProps) => {
  const [activeSrc, setActiveSrc] = useState(src || fallbackSrc);
  const [usedFallback, setUsedFallback] = useState(false);

  useEffect(() => {
    setActiveSrc(src || fallbackSrc);
    setUsedFallback(false);
  }, [src, fallbackSrc]);

  const handleError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (!usedFallback && activeSrc !== fallbackSrc) {
      setUsedFallback(true);
      setActiveSrc(fallbackSrc);
    }

    onError?.(event);
  };

  return <img src={activeSrc} alt={alt} onError={handleError} {...props} />;
};
