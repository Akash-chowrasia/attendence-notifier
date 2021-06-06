const secretsMap = {
  PORT: process.env.PORT || 8000,
  CORS_REGEX: 'http://localhost',
  DB_URL:
    'mongodb+srv://akrotutor:Hind786@cluster0.xwvos.mongodb.net/attendanceNotifier?retryWrites=true&w=majority',
  SECRET_KEY: 'asasadjsgvsdjanbshjavvgsdvshgfvudfvg',
  NODE_ENV: 'development',
  DOMAIN: 'http://localhost:8000',
  ATTENDANCE_URL: 'https://plaxonic.greythr.com/',
};

export const readSecret = (secretName) => {
  return secretsMap[secretName];
};
