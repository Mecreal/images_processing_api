import express, { IRouter, Request, Response } from 'express';
import resize from './api/resize'; // Route of my api
import styles from '../utilities/style'; // Style file
import { image_dir_link } from '../utilities/image_folders'; // The path of the images directory
import { message, cards } from '../utilities/html'; // My HTML codes

// This is the api index routes file
const routes: IRouter = express.Router();

// I allow to access to pictures
routes.use('/images', express.static(image_dir_link));

// I show the messages
routes.get('/', (req: Request, res: Response): void => {
  res.send(styles + ' ' + message + ' ' + cards);
});

// Call the route of the API
routes.use('/resize', resize);

export default routes;
