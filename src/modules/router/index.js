import Router from 'express';
import httpHandler from '../../helpers/http-handler';
import deviceService from '../service';

const router = Router();

router.post(
  '/',
  httpHandler(async (req, res) => {
    const { name, type } = req.body;
    const response = await deviceService.doRegisterDevice({
      name: name.toLowerCase(),
      type,
    });
    res.send(response);
  })
);

router.get(
  '/id/:id',
  httpHandler(async (req, res) => {
    const { id } = req.params;
    const response = await deviceService.getRecord(id);
    res.send(response);
  })
);

router.get(
  '/list',
  httpHandler(async (req, res) => {
    const { page = 1, size = 1000, query, sort } = req.query;
    const response = await deviceService.fetchList({
      page: Number(page),
      size: Number(size),
      query,
      sort,
    });
    res.send(response);
  })
);

export default router;
