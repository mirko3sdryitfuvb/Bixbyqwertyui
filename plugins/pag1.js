//welcome to Jamrock XD

let handler  = async (m, { conn }) => {
 /*await conn.relayMessage(m.chat, {extendedTextMessage:{text: global.wait, contextInfo: { externalAdReply: { showAdAttribution: true, title: '🐱⸽⃕NʏᴀɴCᴀᴛBᴏᴛ - MD🍁⃨፝⃕✰', body: ``, sourceUrl: ``, thumbnail: miniurl }}}}, {})*/
 conn.relayMessage(m.chat,  {
    requestPaymentMessage: {
      currencyCodeIso4217: '€',
      amount1000: 99999999,
      requestFrom: m.sender,
      noteMessage: {
      extendedTextMessage: {

      contextInfo: {
      externalAdReply: {
      showAdAttribution: true
      }}}}}}, {})
}

handler.command = /^paga|chiedi$/i
export default handler
