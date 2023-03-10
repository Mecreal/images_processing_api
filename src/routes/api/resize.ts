import express, { Request, Response, IRouter } from 'express';
import path from 'path';
import { sharp_use } from '../../utilities/sharp_use';
import {
  images_in_dir,
  image_dir_link,
  img_dir_ext,
  thumb_dir_f
} from '../../utilities/image_folders';
import * as fs from 'fs';

const resize: IRouter = express.Router();

// Definition of the resize router
resize.get(
  '/',
  async (req: Request, res: Response): Promise<Response | void> => {
    // Checking if the images folder exist
    if (!img_dir_ext) {
      return res.status(404).send(`Error 404, Folder images not found`);
    }
    // checking and creating the thumb folder
    thumb_dir_f();

    // cheking the name of the image
    if (req.query.name === undefined) {
      return res
        .status(400)
        .send(
          `<style>h2{color:red;width:100%; text-align:center;}</style><h2>Error 400, Please define the name of the Image</h2>`
        );
    }

    const name: string = req.query.name as string; // storing the name of the image

    // cheking if the image exist in the folder image
    if (
      !(images_in_dir.includes(name) || images_in_dir.includes(name + '.jpg'))
    )
      return res
        .status(404)
        .send(`Error 404, Image not found. <br/> Please Enter a valide image.`);
    // storing the image path and name with extension if it'snt given and checking the validity of the extension
    var locImg: string = '';
    var nameWExt: string = '';
    const extension: string = path.extname(name);
    if (extension === '') {
      locImg = image_dir_link + name + `.jpg`;
      nameWExt = name + '.jpg';
    } else if (extension === '.jpg') {
      locImg = process.cwd() + name;
      nameWExt = name;
    } else {
      return res.send(
        `Error ${extension}, The extension is invalid. Please use jpg extension.`
      );
    }
    // Checking the validity of the dimentions
    if (req.query.height === undefined && req.query.width === undefined) {
      return res.status(200).sendFile(locImg);
    } else if (
      !(req.query.height !== undefined && req.query.width !== undefined)
    ) {
      return res.status(400).send('Error,Please enter both width and height');
    }
    const height: number = Number(req.query.height);
    const width: number = Number(req.query.width);

    if (isNaN(height) || isNaN(width)) {
      return res
        .status(400)
        .send(
          'Error, the height or width are invalide please enter a valide values'
        );
    }
    const nameWNExt: string = path.parse(nameWExt).name;
    const nameExt: string = path.parse(nameWExt).ext;

    const locthumb: string =
      process.cwd() + `/thumb/${nameWNExt}-${width}-${height}${nameExt}`;

    if (fs.existsSync(locthumb)) {
      console.log('The Image is already exist');
      return res.sendFile(locthumb);
    }
    // if the thmb doesn't exist we resize it
    const sharped: string = await sharp_use(width, height, locImg, locthumb);
    if (sharped !== 'error') {
      return res.status(200).sendFile(sharped);
    } else {
      res.status(400).send('Error during processing');
    }
  }
);

export default resize;
