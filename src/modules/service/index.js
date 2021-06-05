import assert from 'assert';
import createError from 'http-errors-lite';
import { StatusCodes } from 'http-status-codes';
import deviceModel from '../models';

const deviceService = {};

deviceService.doRegisterDevice = async ({ name, type }) => {
  const record = await deviceModel.findOne({ name });
  assert(
    record === null,
    createError(StatusCodes.BAD_REQUEST, 'device already register')
  );
  return deviceModel.create({ name, type });
};

deviceService.getRecord = async (id) => deviceModel.findById(id);

deviceService.fetchList = async ({
  page,
  size,
  query,
  sort = { createdAt: -1 },
}) => {
  const records = await deviceModel
    .find({ ...query })
    .skip((page - 1) * size)
    .limit(size)
    .sort(sort);
  return records;
};

export default deviceService;
