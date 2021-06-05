import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import path from 'path';
import { errorHandler, notFoundHandler } from './helpers/express-middleware';
import { readSecret } from './helpers/read-secrets';

export const createApp = () => {
  const app = express();
  app.use(express.json());
  app.use(cookieParser());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(
    cors({
      origin: readSecret('CORS_REGEX'),
      optionsSuccessStatus: 200,
      methods: 'GET, PUT, DELETE, POST',
    })
  );
  app.set('views', path.join(__dirname, './views'));
  app.set('view engine', 'ejs');
  return app;
};

export const finishApp = (app) => {
  app.use(notFoundHandler);
  app.use(errorHandler);
};
