import mongoose from 'mongoose';
import { readSecret } from './read-secrets';

(async () => {
  try {
    const dbUrl = readSecret('DB_URL');
    await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
  } catch (err) {}
})();
