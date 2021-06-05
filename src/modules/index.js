import Router from 'express';
import notifierRouter from './router';

const router = Router();

router.use('/notifier', notifierRouter);

const notifierModule = {
  init: (app) => {
    app.use(router);
  },
};

export default notifierModule;
