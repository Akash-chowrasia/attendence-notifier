import axios from 'axios';
import notifierModel from '../models/notifier-schema';
import { readSecret } from '../../helpers/read-secrets';

const loginHook = async () => {
  setInterval(async () => {
    const records = await notifierModel.find({});
    records.map(async (record) => {
      if (!record.is_login) {
        await axios.post(`${record.hook}`, {
          text: `Hii ${
            record.name
          } kindly *** LOGIN *** into greytHr from ${readSecret(
            'GREYT_HR'
          )} and click on ** DONE ** at ${readSecret('DOMAIN')}/login?id=${
            record._id
          }`,
        });
      }
    });
  }, 1000 * 60 * 10);
};

const logoutHook = async () => {
  setInterval(async () => {
    const records = await notifierModel.find({});
    records.map(async (record) => {
      if (!record.is_logout) {
        await axios.post(`${record.hook}`, {
          text: `Hii ${
            record.name
          } kindly *** LOGOUT *** into greytHr from ${readSecret(
            'GREYT_HR'
          )} and click on ** DONE ** at ${readSecret('DOMAIN')}/logout?id=${
            record._id
          }`,
        });
      }
    });
  }, 1000 * 60 * 10);
};

const triggerHook = async () => {
  await notifierModel.updateMany({}, { is_login: false, is_logout: false });
  const dateTime = new Date();
  const time = dateTime.getHours();
  if (time >= 8 && time <= 12) {
    await loginHook();
  }
  await logoutHook();
};

export default triggerHook;
