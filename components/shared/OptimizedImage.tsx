'use client';
import { getCloudinaryImage } from '@/lib/cloudinary';
import { AdvancedImage, responsive } from '@cloudinary/react';
import { FC } from 'react';

interface OptimizedImageProps {
  src: string;
  steps?: number[];
  objectFit?: 'cover' | 'contain';
}

const OptimizedImage: FC<OptimizedImageProps> = ({
  src,
  steps,
  objectFit = 'cover',
}) => {
  return (
    <AdvancedImage
      width="100%"
      height="100%"
      style={{ objectFit: objectFit }}
      cldImg={getCloudinaryImage(src)}
      plugins={[responsive({ steps })]}
    />
  );
};

export default OptimizedImage;
