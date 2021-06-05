import Router from 'express';
import deviceRouter from './router';

const router = Router();

router.use('/device', deviceRouter);

const deviceModule = {
  init: (app) => {
    app.use(router);
  },
};

export default deviceModule;
