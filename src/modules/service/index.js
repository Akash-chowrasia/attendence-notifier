import assert from 'assert';
import createError from 'http-errors-lite';
import { StatusCodes } from 'http-status-codes';
import axios from 'axios';
import notifierModel from '../models';

const service = {};

service.addHook = async ({ name, hook }) => {
  const record = await notifierModel.findOne({ hook });
  assert(
    record === null,
    createError(StatusCodes.BAD_REQUEST, 'hook already register')
  );
  const result = await notifierModel.create({ name, hook });
  return result;
};

service.getHooks = async () => notifierModel.find({});

service.deleteHook = async (id) => notifierModel.findByIdAndDelete(id);

service.markLogin = async (id) =>
  notifierModel.findByIdAndUpdate(id, { is_login: true });

service.markLogout = async (id) =>
  notifierModel.findByIdAndUpdate(id, { is_logout: true });

export default service;
