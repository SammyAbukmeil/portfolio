'use client';

import React, { useState, ComponentPropsWithoutRef } from 'react';

type IframeProps = ComponentPropsWithoutRef<'iframe'>;

interface LoadingIframeProps extends IframeProps {
  src: string;
}

const LoadingIframe: React.FC<LoadingIframeProps> = ({ src, style, ...props }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative">
      {isLoading && (
        <div
          className="absolute inset-0 bg-zinc-800 rounded border border-zinc-700 flex items-center justify-center animate-pulse"
          style={style}
        >
          <div className="flex flex-col items-center space-y-3">
            <div className="w-8 h-8 border-2 border-zinc-600 border-t-primary rounded-full animate-spin"></div>
            <div className="text-zinc-400 text-sm">Loading CodeSandbox...</div>
          </div>
        </div>
      )}
      <iframe
        src={src}
        onLoad={handleLoad}
        style={{
          ...style,
          opacity: isLoading ? 0 : 1,
          transition: 'opacity 0.3s ease-in-out',
        }}
        className={isLoading ? 'invisible' : ''}
        {...props}
      />
    </div>
  );
};

export default LoadingIframe;