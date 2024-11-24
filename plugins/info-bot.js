import fs from 'fs';
const handler = (m) => m;
handler.all = async function(m) {

const chat = global.db.data.chats[m.chat];
if (chat.isBaneed) return
if (/^bot$/i.test(m.text)) {
conn.reply(m.chat, `🍂 ¡Hola! Soy Hanyuu, en que puedo ayudarte hoy?\n\n✰ Usa *.menu* para ver mis comandos.`, m, rcanal, )
}
/*if (/^que|q$/i.test(m.text)) {
conn.reply(m.chat, `*so*`, m, rcanal, )
}*/
if (/^reglas$/i.test(m.text)) {
conn.reply(m.chat, `> *Hola si quieres unir a HanyuuBot-MD a tus grupos deberás cumplir con los requisitos* 🌙

> *Requisito 1*: *El grupo en el que va a unir al bot debe de tener un mínimo de 25 miembros dado que si no cumple con esta petición el bot no será otorgado*  

> *Requisito 2*: *Deberá de compartir el link del canal del Bot para seguir creciendo la comunidad del Bot*    *Link*: https://whatsapp.com/channel/0029Vavnhn0AojZ2SQ9Dur03

> *Requisito 3*: *Para una función mejor del Bot ( Opcional*) *dar administración al bot para que pueda cumplir con las siguientes tareas: anti link, anti bot, anti spam, kick, entre otras funciones*

> *Requisito 4*: *Si no desea compartir el link del canal del Bot deberá dejar una estrella en el repositorio del Bot para obtener más confianza al utilizarlo* 

> https://github.com/Legna-chan/HanyuuBot-MD.git

> *Requisito 5*: *No hacer Spam con el bot si se presenta este caso se mes dará de baja al bot por favor respete las reglas* 

> Pσɯҽɾҽԃ Bყ 𝕷𝖊𝖌𝖓𝖆𝕺𝖋𝖈 🌸`, m, rcanal, )
}

if (/^Bot de mierda/i.test(m.text)) {
conn.reply(m.chat, `*He hey hey skibidi, no digas toilet. Eres perfecta*`, m, rcanal, )
}
  
if (/^Corin$/i.test(m.text)) {
conn.reply(m.chat, `*_Hola buscas algun servidor con precios bajos ? Te presento a HostingPy un servicio hosting confiable y de buena calidad, entre por aqui https://dahs.hostingpy.shop Gracias por utilizar HanyuuBot-MD_*`, m, rcanal, )
}
if (/^duda$/i.test(m.text)) {
conn.reply(m.chat, `*Hola tienes alguna duda sobre el bot o sobre el hosting enviame mensaje al privado* 🌸 Wa.me/526671548329`, m, rcanal, )
}
return !0;
};
export default handler;
