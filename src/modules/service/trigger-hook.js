import axios from 'axios';
import notifierModel from '../models/notifier-schema';
import { readSecret } from '../../helpers/read-secrets';

const loginHook = async () => {
  return setInterval(async () => {
    const records = await notifierModel.find({});
    records.map(async (record) => {
      if (!record.is_login) {
        await axios.post(`${record.hook}`, {
          text: `Hii ${
            record.name
          } kindly *** LOGIN *** into greytHr from ${readSecret(
            'ATTENDANCE_URL'
          )} and click on ${readSecret('DOMAIN')}/notifier/login?id=${
            record._id
          }`,
        });
      }
    });
  }, 1000 * 60 * 10);
};

const logoutHook = async () => {
  return setInterval(async () => {
    const records = await notifierModel.find({});
    records.map(async (record) => {
      if (!record.is_logout) {
        await axios.post(`${record.hook}`, {
          text: `Hii ${
            record.name
          } kindly *** LOGOUT *** into greytHr from ${readSecret(
            'ATTENDANCE_URL'
          )} and click on  ${readSecret('DOMAIN')}/notifier/logout?id=${
            record._id
          }`,
        });
      }
    });
  }, 1000 * 60 * 10);
};

const triggerHook = async () => {
  let intervalId;
  setInterval(async () => {
    clearInterval(intervalId);
    await notifierModel.updateMany({}, { is_login: false, is_logout: false });
    const dateTime = new Date();
    const time = dateTime.getHours();
    if (time >= 8 && time <= 10) {
      intervalId = await loginHook();
    }
    if (time >= 22 && time <= 23) {
      intervalId = await logoutHook();
    }
  }, 1000 * 60 * 60);
};

export default triggerHook;
