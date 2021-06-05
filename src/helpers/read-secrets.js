import fs from 'fs';

const secretsMap = {};

const isDevelopment =
  'NODE_ENV' in process.env && process.env.NODE_ENV === 'development';

export const readSecret = (secretName) => {
  if (isDevelopment) return process.env[secretName];
  if (secretName in secretsMap) return secretsMap[secretName];
  const x = fs.readFileSync(`/var/openfaas/secrets/${secretName}`);
  secretsMap[secretName] = x.toString();
  return secretsMap[secretName];
};
