import React from 'react';

const ImagePlaceholder = ({
  width = '100%',
  height = '100%',
  text = 'Image',
  className = '',
}) => {
  return (
    <div
      className={`flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 text-gray-500 dark:text-gray-400 ${className}`}
      style={{ width, height }}
    >
      <span className="text-lg">{text}</span>
    </div>
  );
};

export default ImagePlaceholder; 