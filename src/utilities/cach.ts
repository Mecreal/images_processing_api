import * as fs from 'fs';
import sharp from 'sharp';

// in this function we check if the image sized already exist
export var check_image = async (
  path: string,
  im_width: number,
  im_height: number
): Promise<boolean> => {
  if (!fs.existsSync(path)) return false;
  const imageBuffer = fs.readFileSync(path);
  const imageMetadata = await sharp(imageBuffer).metadata();
  const image_width = imageMetadata.width as number;
  const image_height = imageMetadata.height as number;
  if (image_width === im_width && image_height === im_height) {
    return true;
  } else {
    return false;
  }
};
