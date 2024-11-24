import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.owner = [
   ['5216671548329', '𝕷𝖊𝖌𝖓𝖆𝕺𝖋𝖈 🌸', true],
   ['5216677510398', 'HanyuuBot', true],
]

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.mods = []
global.prems = []

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.isBaileysFail = false
global.libreria = 'Baileys'
global.baileys = 'V 6.7.8'
global.languaje = 'Español'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.packname = '🪻̸̷̶͟͞꙰ྀ𝐇𝐚𝐧𝐲𝐮𝐮𝐁𝐨𝐭-𝐌𝐃🪻̸̷̶͟͞꙰ྀ'
global.botname = '🎐𝐇𝐚𝐧𝐲𝐮𝐮𝐁𝐨𝐭-𝐌𝐃🎐'
global.wm = '💜𝐇𝐚𝐧𝐲𝐮𝐮 𝐅𝐮𝐫𝐮𝐝𝐞💜'
global.author = '𝐁𝐲 𝕷𝖊𝖌𝖓𝖆𝕺𝖋𝖈 🌸'
global.dev = '𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 𝕷𝖊𝖌𝖓𝖆𝕺𝖋𝖈 🌸'
global.textbot = '༘🪷⋆𝑯𝒂𝒏𝒚𝒖𝒖𝑶𝒇𝒄౨ৎ⋆˚｡⋆'
global.vs = '3.0.4'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.imagen1 = fs.readFileSync('./Menu.jpg')
global.fantasyVid = ['./media/menus/Menuvid1.mp4', './media/menus/Menuvid2.mp4', './media/menus/Menuvid3.mp4']
global.imagen2 = fs.readFileSync('./Menu2.jpg')
global.imagen3 = fs.readFileSync('./Menu3.jpg')
global.welcome = fs.readFileSync('./media/welcome.jpg')
global.adios = fs.readFileSync('./media/adios.jpg')
global.catalogo = fs.readFileSync('./storage/img/catalogo1.jpg')
global.ianurl = fs.readFileSync('./storage/img/ianurl.jpg')

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.grupo = 'https://chat.whatsapp.com/IkRwaMuPtKNGrgyaA2wgRa'
global.grupo2 = 'https://chat.whatsapp.com/DthYXn40UCfEAQ4meGisKW'
global.grupo3 = 'https://chat.whatsapp.com/Ksyqfbr3S6U48ljN0eH1sl'
global.channel = 'https://whatsapp.com/channel/0029VajkZ6bIXnlwPZmbuH1u'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5216671548329-120363344434593636@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: '🎐𝐇𝐚𝐧𝐲𝐮𝐮𝐁𝐨𝐭-𝐌𝐃🎐', orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}}

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment        

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
