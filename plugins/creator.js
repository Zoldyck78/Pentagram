
import fetch from 'node-fetch'
import axios from 'axios'
import fs from 'fs'

let handler = async (m, { conn, args, command }) => {
	let ppown = 'https://telegra.ph/file/f124c0ce3b165014f02ee.jpg'
let teksbio = `

*ɴᴀᴍᴇ:* aldo belum vaksin
*ᴀɢᴇ:* 99
*sᴛᴀᴛᴜs:* single 

*ʙɪʀᴛʜᴅᴀʏ:* 15 Okt 0001
*ᴀᴅᴅʀᴇss:* Indonesia, Jawa Barat,Bandung`
let foot = `
📷 *Instagram:*
   ╰► ${sig}
🥏 *Whatsapp*
  ╰► wa.me/${nomorown}`

const fload = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 666,
    status: 1,
    surface : 1,
    message: 'Nih kak Ownerku yang ganteng',
    orderTitle: `▮Menu ▸`,
    thumbnail: await(await fetch(ppown)).buffer(), 
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
    await conn.sendButton(m.chat, teksbio, foot, ppown, [['ᴅᴏɴᴀsɪ', '.donasi']], fload)


}
handler.help = ['owner']
handler.tags = ['info']
handler.command = ['creator', 'owner']
export default handler
