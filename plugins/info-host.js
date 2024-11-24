let handler = async (m, { conn, command, usedPrefix }) => {
let txt = `✨ *H O S T I N G -  PY - H O S T* 

*¿Quieres un Host de calidad y con bajos precios?*
Pues te presento a *HostingPyHost*, un hosting de calidad con servidores dedicados y precios por debajo de 1 USD, estos servidores están destinados a ofrecerte un Uptime 24/7 para que puedas alojar tus proyectos y qué estos funcionen de manera eficaz.

🌺 \`\`\`Información del Host\`\`\`

🌸 *Dashboard:* 
• https://dahs.hostingpy.shop

🍁 *Panel:*
• https://panel.hostingpy.com

☘ *Canal Oficial:*
• https://whatsapp.com/channel/0029VaGt7Uk6WaKkEDZUh43W

🍂 *Contacto (HostingPy Host - Asistencia)*
https://wa.me/595976126756

> *Únete a está comunidad y disfruta de un servicio de calidad ✨*` 
await conn.sendMessage(m.chat, { text: txt,
contextInfo:{
forwardingScore: 9999999,
isForwarded: false, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
title: `🍄 H O S T I N G PY - H O S T 🍄`,
body: `👑 Hosting 24/7 👑`,
"previewType": "PHOTO",
thumbnailUrl: 'https://qu.ax/njcHE.jpg', 
sourceUrl: 'https://dash.corinplus.com'}}},
{ quoted: fkontak})
}
handler.tags = ['main'] 
handler.help = ['host', 'hosting'] 
handler.command = ['host', 'corin', 'corinhost', 'hosting']
export default handler
