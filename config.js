import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'


global.owner = [
  ['212770579205', 'OMAR', true], 

] //Number of owners

//global.pairingNumber = "" //put your bot number here

global.mods = ['212770579205', '212770579205', '212770579205','212770579205','212770579205'] 
global.prems = ['212770579205','212770579205','212770579205', '212770579205','212770579205']
global.allowed = ['212770579205', '212770579205', '212770579205', '212770579205','212770579205']
global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['GataDios']
global.beta = 'mLxstUwm'

global.openAiapi = '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'
global.org = 'org-hE49SehUQEPAGJAy20yr4Om9'

global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://zenzapis.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
  'https://api.neoxr.my.id': `${keysneoxr}`,	
  'https://violetics.pw': 'beta',
  'https://zenzapis.xyz': `${keysxxx}`, 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.botname = '³ OMAR'
global.premium = 'true'
global.packname = '' 
global.author = '@OVMAR_1' 
global.menuvid = 'https://i.imgur.com/Ckb8q4C.mp4'
global.igfg = '▢✓ Follow My channel\nhttps://whatsapp.com/channel/0029VaPj1XN2975EPpWx4p27\n' 
global.dygp = 'https://whatsapp.com/channel/0029VaPj1XN2975EPpWx4p27'
global.fgsc = 'https://github.com/OMARCHARAF0' 
global.fgyt = 'https://whatsapp.com/channel/0029VaPj1XN2975EPpWx4p27'
global.fgpyp = 'https://whatsapp.com/channel/0029VaPj1XN2975EPpWx4p27'
global.fglog = 'OMAR.jpg' 
global.thumb = fs.readFileSync('./OMAR.jpg')

global.audio= 'قم بالرد على أغنية / أوديو'
global.what = ('>*_قم بكتابة النص أو سؤال 🤷🏾‍♂️_*')
global.wait = 'سوف يتم تلبية طلبك الأن 🙋🏻‍♂️. .. \n\n تابع صاحب البوت في الإنستجرام\n https://www.instagram.com/ovmar_1'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✔️'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '3' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
