import { useState } from 'react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
}

export function ImageWithFallback({ 
  src, 
  alt, 
  className = '', 
  fallbackSrc = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik01MCAzMEM1Ny45NTUzIDMwIDY0IDM2LjA0NDcgNjQgNDRDNjQgNTEuOTU1MyA1Ny45NTUzIDU4IDUwIDU4QzQyLjA0NDcgNTggMzYgNTEuOTU1MyAzNiA0NEMzNiAzNi4wNDQ3IDQyLjA0NDcgMzAgNTAgMzBaTTUwIDY2QzYxLjU5OCA2NiA3MiA3MC4wMDIgNzIgNzVWNzJDNzIgNjcuMDAyIDYxLjU5OCA2MyA1MCA2M0MzOC40MDIgNjMgMjggNjcuMDAyIDI4IDcyVjc1QzI4IDcwLjAwMiAzOC40MDIgNjYgNTAgNjZaIiBmaWxsPSIjOTk5OTk5Ii8+Cjwvc3ZnPg==' 
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setImgSrc(fallbackSrc);
      setHasError(true);
    }
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={handleError}
      loading="lazy"
    />
  );
}
