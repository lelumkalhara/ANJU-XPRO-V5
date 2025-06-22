//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUw0V2QyTnFrQWNSTllqdUpUM2grcFNCZ0lVcm04ZmtpQUh0VGhPVXlGMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTXRWaWFVZG9ZOC9oZ3BiRlgxRXFPOVlvdnFMU3ZYN0NlQUJtZTFXV293TT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwSTVnZGtJZ3FweUZCUHZTd2o3ajRuM0YvY240YVc2UVJ3YURKeU1EVms0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXSjBCY2RaL05ud25JZFhsMm80a0JaNXNKSFhmNnJ2c0ZJajZaOStYdkFNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndCY21EeGZWdVdIWUR2c1ZFNjBNZnh3VG03QjZqNnpZdFl3WEdLQStubWM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InY5RDh5YkNybG5YcW5sdzJBeGZsVnhjV0cxYjVOM0RtZjdKTFE0T2MzMEk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0VJeU9yU3l0Uy94UVNmZWNWTG14ZUlmTjNIREJqOHlMRmdpYXVCcnZWdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOE1KZmhsSDlaWk9kWEx5aWtoaGs2cFQ5WENRS0hZa0ljVklrdktsd3p4bz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9WYktmYVNrVUM3OGFIZG03RGc4V0ZNTjA0Um0xTUJWNzVMR1BOOTY1Y1p6OEYxckFPYitDRnFTaTJ1dmJVbGg0RnZQcXFua3VxakJmeVA3T1Jzemh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjAsImFkdlNlY3JldEtleSI6InZoanIvUGhQb003bTNFbEkrOVllSjRZY2JVSm9MWGNwdmhTOUNsV0diZGM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjdDTFMtUGZCU05hbEtuUzZCaklvZkEiLCJwaG9uZUlkIjoiOWM2MGQ2ZDgtY2Q3Ni00ZWU2LTg0ZTMtOTAwMDdjNWUxODgxIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhacmNYenIrcW44d3Z1YTFoMElMYkxvaHFobz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrVmpac1M5WDlLNUN2VWxIUFlaUUNDUVhaK2c9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNDdETDhKQUsiLCJtZSI6eyJpZCI6Ijk0NzQzODc3MTU2OjQ4QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkFuamFuYSIsImxpZCI6IjkyODE0NzYzMzk3MTM0OjQ4QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSm1KcTdBR0VJVGk0Y0lHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiUlJONWFFY1BTZFdxQUxnb25aSkFOWTFubi9ReGdjK0UxTlVjRmFzRnNSTT0iLCJhY2NvdW50U2lnbmF0dXJlIjoicXFlNTVhNlVVVUgvbmNuQ01tMExEQVAvYldjcm9XQ0VvMFY1WnlTYjVOcy85aWR0bXFUYjNVZFdPQ1JCTTQ3MmlxZGNyV1NYNTlEcmdVcnVnQ0NOQ2c9PSIsImRldmljZVNpZ25hdHVyZSI6IjgrVlV4TnlCaHpjc0M5NitvL1BlTVdjMk93dEpkU1k3NHdtcktlK3BadnVQVWJhOWVRMjV0MW1xQXNiNDk0bHlMWWo1SkJXazBXSXFoUUhiSmVEdWhRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NDM4NzcxNTY6NDhAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVVVUZVdoSEQwblZxZ0M0S0oyU1FEV05aNS8wTVlIUGhOVFZIQldyQmJFVCJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FzSURRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUwNjI2NTc3LCJsYXN0UHJvcEhhc2giOiIzUjlaMzkiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUxKTSJ9",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "0726884134",
  PASSWORD: 
    process.env.PASSWORD || "Anjana8544@",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
