import { webp2png } from '../lib/webp2mp4.js'
let handler = async (m, { conn, usedPrefix, command }) => {
    const notStickerMessage = `قم بالرد على الملصق الذي تريد تحويله الى صورة command *${usedPrefix + command}*`
    if (!m.quoted) throw notStickerMessage
    const q = m.quoted || m
    let mime = q.mediaType || ''
    if (!/sticker/.test(mime)) throw notStickerMessage
    let media = await q.download()
    let out = await webp2png(media).catch(_ => null) || Buffer.alloc(0)
    await conn.sendFile(m.chat, out, 'out.png', 'ثم تحويل الملصق الى صورة \n تابع صانع البوت فى إنستجرام \n https://www.instagram.com/ovmar_1', m)
}
handler.help = ['toimg (reply)']
handler.tags = ['sticker']
handler.command = ['toimg']
handler.limit = true;

export default handler