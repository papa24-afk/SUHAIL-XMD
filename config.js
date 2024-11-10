const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_22_58_11_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAyMDksXG4gICAgICAgIDkzLFxuICAgICAgICA0OCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNDIsXG4gICAgICAgIDEzLFxuICAgICAgICA3NyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjE0LFxuICAgICAgICA2MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxOSxcbiAgICAgICAgMCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjAzLFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjYsXG4gICAgICAgIDI0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDk0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNyxcbiAgICAgICAgOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDc3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDQ4LFxuICAgICAgICAyOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjEzLFxuICAgICAgICA2OSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMDksXG4gICAgICAgIDg5LFxuICAgICAgICAzOCxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNzksXG4gICAgICAgIDExMyxcbiAgICAgICAgMjUsXG4gICAgICAgIDU2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNDksXG4gICAgICAgIDQ1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDU4LFxuICAgICAgICA5NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNDksXG4gICAgICAgIDE1MixcbiAgICAgICAgMjUwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjMzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDk1LFxuICAgICAgICA5NCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDk2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE1MixcbiAgICAgICAgNzMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDMwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTMxLFxuICAgICAgICA1MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDgwLFxuICAgICAgICA3MyxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgODAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyLFxuICAgICAgICAxNTksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDc0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDc3LFxuICAgICAgICA4OSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDQ1LFxuICAgICAgICA2MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjI0LFxuICAgICAgICA1MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgNzksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTMxLFxuICAgICAgICA5NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDUzLFxuICAgICAgICA1NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDg3LFxuICAgICAgICAzMyxcbiAgICAgICAgNzgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTc5LFxuICAgICAgICA1MSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDExNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjU0LFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDk0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA3NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMixcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDEzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDc3LFxuICAgICAgICAxOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTc3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDksXG4gICAgICAgIDExMixcbiAgICAgICAgMjcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDY0LFxuICAgICAgICA3MixcbiAgICAgICAgMjksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjIxLFxuICAgICAgICAyMTksXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjMyLFxuICAgICAgICA2MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDI2LFxuICAgICAgICAxNjksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDYwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDgsXG4gICAgICAgIDE2LFxuICAgICAgICAxMixcbiAgICAgICAgMTM0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDM0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ4aXBsRjdHWmV6dTRPV0N3M0ZTVC9QaTJqMWNwMWhIcXl5TGxZRmswOVJJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzMzI2OTUxMDcyOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQTMwNzg0NkMwQURCNDFEOEExOTM3NDUxOUNEM0E3MDRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMxMjc5NDk4XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiA2MSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiA2MSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIldsQUVDX09BUmVDQ2FPd05ldXB0MUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMTU3ZjkxMmItMDcyMi00ZDA3LWE5OTItNzQzNzEyYmZmYTViXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExMSxcbiAgICAgIDEzMyxcbiAgICAgIDI1MixcbiAgICAgIDExMCxcbiAgICAgIDY0LFxuICAgICAgMjAyLFxuICAgICAgMTQ1LFxuICAgICAgMjUsXG4gICAgICA5MixcbiAgICAgIDE3OSxcbiAgICAgIDE3OCxcbiAgICAgIDIxOSxcbiAgICAgIDYzLFxuICAgICAgMTIzLFxuICAgICAgNjcsXG4gICAgICAxOTMsXG4gICAgICAyNCxcbiAgICAgIDIxMSxcbiAgICAgIDMsXG4gICAgICAxMDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQzLFxuICAgICAgMTIxLFxuICAgICAgMTEsXG4gICAgICA3MSxcbiAgICAgIDIyNCxcbiAgICAgIDQzLFxuICAgICAgODcsXG4gICAgICA1OSxcbiAgICAgIDExNSxcbiAgICAgIDI0MyxcbiAgICAgIDIyNyxcbiAgICAgIDIzNSxcbiAgICAgIDE2MixcbiAgICAgIDIzOCxcbiAgICAgIDI4LFxuICAgICAgNzgsXG4gICAgICAyNDksXG4gICAgICA5NCxcbiAgICAgIDE3NCxcbiAgICAgIDIwMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI5QTRBUTlDWVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjMzMjY5NTEwNzI5OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJCcnVoXCIsXG4gICAgXCJsaWRcIjogXCIxOTkxMjAwNTMxNjY5MjoyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0ptc3Y1NERFSUwxeExrR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiS3ZzUHdoLzFqczZWOUJtQ2N1NU1KZVNmVTNobmV2aTR6R09HTCsrT1hUcz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIwMXIrU3N1Ni9vZVFEemtLNHk4bmRJRUtyUncwckl0di9aRmd6TFRxSkt1TVpLUUNDS04wZCsxMzBMWFlKVnZuY055b3U3UHpRZFM4NGFFc0owczlBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJwd21vYUIwTCtZTUloMytkeStFWm50ZWZERE5kNDg3UGsxLy9YSlZnUmpWOU55VDNMYWkyUHAzMDBLakkxY2FjNEhXZHBwZWZoRE1ULzllZHEvNkhqZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzMyNjk1MTA3Mjk6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDU5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzEyNzk0OTYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHcXBcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUdxcC5qc29uIjogIntcImtleURhdGFcIjpcImVHRGpkSHJQZEhIZnJCc2lpNWp4TFo3bk9oTEszYUR3L09NL3dOOWh0dUE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODY5MjU4Nzc3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzEyNzk0OTgyNzNcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
