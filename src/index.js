import './helpers/db';
import { StatusCodes } from 'http-status-codes';
import { finishApp, createApp, introduceModules } from './app';
import { readSecret } from './helpers/read-secrets';

const PORT = readSecret('PORT');

const app = createApp();

app.get('/healthy', (req, res) => {
  res.send(StatusCodes.OK);
});

introduceModules(app);

finishApp(app);

(async () => {
  try {
    await app.listen(PORT);
    console.log(`------Server Started at PORT : ${PORT}------`);
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
})();
