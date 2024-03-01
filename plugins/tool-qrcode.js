import { toDataURL } from 'qrcode'

let handler = async (m, { conn, text }) => {
    if (!text) return conn.reply(m.chat, 'تحويل نص الى مربع Qrcode example: .qr hello jitoss', m)

conn.sendFile(m.chat, await toDataURL(text.slice(0, 2048), { scale: 8 }), 'qrcode.png', 'تابع صانع البوت فى إنستجرام \n https://www.instagram.com/ovmar_1', m)
}

handler.help = ['', 'code'].map(v => 'qr' + v + ' <نص>')
handler.tags = ['tools']
handler.command = /^qr(code)?$/i


export default handler