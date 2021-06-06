# ATTENDANCE NOTIFIER SLACK BOT

I built it for Login & logout reminder on greytHR while i am in plaxonic technologies. me & my team always use to forgot our attendence. This bot triggers at 8:10 morning & 10:10 evening and gives me reminder at every 10 minutes untill i do login/logout & tell the bot that i did it. This bot really helping me alot.

## Technology used: 
 Node.js
## Instruction to use

 * fork it
 * deploy on a server of your choice
 * setup following Variable of object secretMap in read-secrets.js `PORT, CORS_REGEX, DB_URL, SECRET_KEY, NODE_ENV, DOMAIN, GREYT_HR`
 * open your postman & add all of your group members into it.
 * That's it, it will now notify to you and your friends on time.

 * Don't forget to create `read-secrets.js` file on `helpers` folder with the following code below

<pre>
const secretsMap = {
  PORT: process.env.PORT || 8000,
  CORS_REGEX: 'http://localhost',
  DB_URL:
    'your db url',
  SECRET_KEY: 'asasadjsgvsdjanbshjavvgsdvshgfvudfvg',
  NODE_ENV: 'development',
  DOMAIN: 'http://localhost:8000',
  ATTENDANCE_URL: 'your attendance URL',
};

export const readSecret = (secretName) => {
  return secretsMap[secretName];
};

</pre>

## Execute on Localhost
 * pnpm i
 * pnpm run dev

