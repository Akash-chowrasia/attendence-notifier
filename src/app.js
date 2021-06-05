import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { errorHandler, notFoundHandler } from './helpers/express-middleware';
import deviceModule from './modules';

const moduleList = [deviceModule];

export const createApp = () => {
  const app = express();
  app.use(express.json());
  app.use(cookieParser());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(
    cors({
      origin: 'http://localhost:3000',
      optionsSuccessStatus: 200,
      methods: 'GET, PUT, DELETE, POST',
    })
  );
  return app;
};

export const finishApp = (app) => {
  app.use(notFoundHandler);
  app.use(errorHandler);
};

export const introduceModules = (app) => {
  moduleList.map((module) => {
    return module.init(app);
  });
};
