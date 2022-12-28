import { Response } from 'express';
import sharp from 'sharp';

// here we use the sharp fucntion as defined in the documentation
export const sharp_use = async (
  width: number,
  height: number,
  locImg: string,
  locthumb: string
): Promise<string> => {
  return sharp(locImg)
    .resize(width, height)
    .toFile(locthumb)
    .then((data) => {
      console.log('Image resized successfully');
      return locthumb;
    })
    .catch((error) => {
      return 'error';
    });
};
