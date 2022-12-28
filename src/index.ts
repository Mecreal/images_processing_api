import express, { Express, Request, Response } from 'express';
import morgan from 'morgan';
import routes from './routes/index';
import styles from './utilities/style';
import { welcome } from './utilities/html';

const app: Express = express();
const port = process.env.PORT || 3300;
app.use(morgan('dev'));

app.use((req, res, next) => {
  if (req.url === '/favicon.ico') {
    res.sendStatus(204);
  } else {
    next();
  }
});

app.get('/', (req: Request, res: Response) => {
  res.status(200).send(`${styles + welcome}
  `);
});

//routers of the app
app.use('/api', routes);

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
export default app;
