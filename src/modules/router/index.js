import Router from 'express';
import { StatusCodes } from 'http-status-codes';
import httpHandler from '../../helpers/http-handler';
import service from '../service';

const router = Router();

router.post(
  '/',
  httpHandler(async (req, res) => {
    const { name, hook } = req.body;
    const response = await service.addHook({ name, hook });
    res.send(response);
  })
);

router.get(
  '/',
  httpHandler(async (req, res) => {
    const response = await service.getHooks();
    res.send(response);
  })
);

router.delete(
  '/id/:id',
  httpHandler(async (req, res) => {
    const { id } = req.params;
    await service.deleteHook(id);
    res.sendStatus(StatusCodes.OK);
  })
);

router.get(
  '/login',
  httpHandler(async (req, res) => {
    const { id } = req.query;
    await service.markLogin(id);
    res.sendStatus(StatusCodes.OK);
  })
);

router.get(
  '/logout',
  httpHandler(async (req, res) => {
    const { id } = req.query;
    await service.markLogout(id);
    res.sendStatus(StatusCodes.OK);
  })
);

export default router;
