let handler = async (m, {
command
}) => {
let menzione = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
if (command == 'addprem') {
global.db.data.users[menzione].premium = true
m.reply('È ora premium')
}
if (command == 'remprem') {
global.db.data.users[menzione].premium = false
m.reply('Non è piu premium')
}
}
handler.command = /^(addprem|remprem)$/i
handler.group = true
handler.botAdmin = true
export default handler