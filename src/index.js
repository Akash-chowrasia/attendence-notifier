import './helpers/db';
import { StatusCodes } from 'http-status-codes';
import { finishApp, createApp } from './app';
import { readSecret } from './helpers/read-secrets';
import notifierModule from './modules';
import triggerHook from './modules/service/trigger-hook';

const PORT = readSecret('PORT');

const app = createApp();

app.get('/healthy', (req, res) => {
  res.send(StatusCodes.OK);
});

notifierModule.init(app);

finishApp(app);

(async () => {
  try {
    await app.listen(PORT);
    console.log(`------Server Started at PORT : ${PORT}------`);
    await triggerHook();
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
})();
