let handler = async (m, { conn, command, usedPrefix }) => {
    let staff = `EQUIPO DE AYUDANTES DEL BOT
    💜 *Bot:* ${botname}
    💜 *Versión:* ${vs}
    💜 *Libreria:* ${libreria + baileys}
    
    👑 *Propietario:*
    
    • 
    ☁ *Rol:* 𝕷𝖊𝖌𝖓𝖆𝕺𝖋𝖈 🌸
    ☁ *Número:* ${creador}
    ☁ *GitHub:* https://github.com/Legna-chan/HanyuuBot-MD.git
    
    🍄  *Colaboradores:*
    
    • Niño piña 
    ☁ *Rol:* Colaborador
    ☁ *Número:* Wa.me/50557865603
    ☁ *GitHub:* https://github.com/WillZek/WillZek.git`
    await conn.sendFile(m.chat, icons, 'nino.jpg', staff.trim(), fkontak, true, {
    contextInfo: {
    'forwardingScore': 200,
    'isForwarded': false,
    externalAdReply: {
    showAdAttribution: true,
    renderLargerThumbnail: false,
    title: `👑 Developers 👑`,
    body: `🌙 STAFF DE LA BOT`,
    mediaType: 1,
    sourceUrl: redes,
    thumbnailUrl: icono
    }}
    }, { mentions: m.sender })
    await m.react(emoji)
    
    }
    handler.help = ['staff']
    handler.command = ['colaboradores', 'staff']
    handler.register = true
    handler.tags = ['main']
    
    export default handler
