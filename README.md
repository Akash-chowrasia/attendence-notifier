# ATTENDENCE NOTIFIER SLACK BOT

I built it for Login & logout reminder on greytHR while i am in plaxonic technologies. me & my team always use to forgot our attendence. This bot triggers at 8:10 morning & 10:10 evening and gives me reminder at every 10 minutes untill i do login/logout & tell the bot that i did it. This bot really helping me alot.

## Technology used: 
 Node.js, EJS
# Instruction for use

 * fork it
 * deploy on a server of your choice
 * setup following ENV Variable on server `PORT, CORS_REGEX, DB_URL, SECRET_KEY, NODE_ENV, DOMAIN, GREYT_HR`
 * open your postman & add all of your group members into it.
 * That's it, it will now notify to you and your friends on time.

 * If you are testing it on localhost, dont forgot to add `.secrets.sh` file into it by initialising with all the ENV Variables as

<pre>
PORT=8000
CORS_REGEX=http://localhost
DB_URL=mongodb://localhost/attendence_notifier
SECRET_KEY=asasadjsgvsdjanbshjavvgsdvshgfvudfvg
NODE_ENV=development
DOMAIN=http://localhost:8000
GREYT_HR=GREYTHR_LOGIN_URL
</pre>

## Execute on Localhost
 * pnpm i
 * pnpm run dev

