import * as fs from 'fs';

// The image import part
var images_in_dir_beforetest: string[] = []; // we define the var as a empty string
export const image_dir_link = process.cwd() + '/images/'; // Here we call path.resolve to get the path of the image directory
export const img_dir_ext: boolean = fs.existsSync(image_dir_link); // We check if it exists
if (img_dir_ext) {
  images_in_dir_beforetest = fs.readdirSync(image_dir_link); // If so we conctatinate the names of the images it in the constant to export it
}
export const images_in_dir: string[] = images_in_dir_beforetest; // here we export the list of the images in the directory

// Thumb directory
export const thumb_dir: string = process.cwd() + `/thumb/`;
export const thumb_dir_f = (): void => {
  const thumb_check: boolean = fs.existsSync(thumb_dir);
  if (!thumb_check) {
    try {
      fs.mkdirSync(thumb_dir);
      console.log('Directory created successfully');
    } catch (error) {
      console.error(error);
    }
  }
};
