import './helpers/db';
import { StatusCodes } from 'http-status-codes';
import { finishApp, createApp } from './app';
import { readSecret } from './helpers/read-secrets';
import notifierModule from './modules';
import triggerHook from './modules/service/trigger-hook';
import httpHandler from './helpers/http-handler';

const PORT = readSecret('PORT');

const app = createApp();

app.get('/healthy', (req, res) => {
  res.send(StatusCodes.OK);
});

app.get(
  '/login',
  httpHandler(async (req, res) => {
    const { id } = req.query;
    res.render('login', {
      loginUrl: `${readSecret('DOMAIN')}/notifier/login?id=${id}`,
    });
  })
);

app.get(
  '/logout',
  httpHandler(async (req, res) => {
    const { id } = req.query;
    res.render('logout', {
      logoutUrl: `${readSecret('DOMAIN')}/notifier/logout?id=${id}`,
    });
  })
);

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
