function _0x2727(_0x302740,_0x321810){const _0xb457c=_0xb457();return _0x2727=function(_0x2727f6,_0x1455da){_0x2727f6=_0x2727f6-0x103;let _0x96f54e=_0xb457c[_0x2727f6];return _0x96f54e;},_0x2727(_0x302740,_0x321810);}(function(_0x46fed8,_0xb55492){const _0x57bc7a=_0x2727,_0xefd7ef=_0x46fed8();while(!![]){try{const _0x3b5942=parseInt(_0x57bc7a(0x112))/0x1+-parseInt(_0x57bc7a(0x11e))/0x2*(parseInt(_0x57bc7a(0x104))/0x3)+parseInt(_0x57bc7a(0x10b))/0x4+-parseInt(_0x57bc7a(0x125))/0x5*(parseInt(_0x57bc7a(0x107))/0x6)+parseInt(_0x57bc7a(0x10f))/0x7+-parseInt(_0x57bc7a(0x10e))/0x8*(-parseInt(_0x57bc7a(0x117))/0x9)+parseInt(_0x57bc7a(0x119))/0xa*(-parseInt(_0x57bc7a(0x106))/0xb);if(_0x3b5942===_0xb55492)break;else _0xefd7ef['push'](_0xefd7ef['shift']());}catch(_0x58f442){_0xefd7ef['push'](_0xefd7ef['shift']());}}}(_0xb457,0x32f0f));let linkRegex=/chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i;function _0xb457(){const _0x170b1f=['Halo','fromMe','173045ipuMGn','status@broadcast','jid','150orwoOh','𝐀𝐧𝐭𝐢\x20-\x20𝐋𝐢𝐧𝐤\x20','209IVpcRX','12TBAnjH','user','groupInviteCode','sendMessage','1284228FPdJBJ','chats','https://chat.whatsapp.com/','1826288OSZntg','1579977LEUAVN','restrict','chat','151421qMKIFp','text','settings','data','⚠\x20𝐋𝐈𝐍𝐊\x20𝐃𝐈\x20𝐀𝐋𝐓𝐑𝐈\x20𝐆𝐑𝐔𝐏𝐏𝐈\x20𝐍𝐎𝐍\x20𝐒𝐎𝐍𝐎\x20𝐂𝐎𝐍𝐒𝐄𝐍𝐓𝐈𝐓𝐈\x20','9HtcYhc','includes','341080pDGOEQ','groupParticipantsUpdate','404','remove','status','22VVHugk','exec','https://chat.whatsapp.com','antiLink','key'];_0xb457=function(){return _0x170b1f;};return _0xb457();}export async function before(_0x2cc073,{isAdmin:_0x52f200,isBotAdmin:_0x5591be}){const _0x58dd92=_0x2727;if(_0x2cc073['isBaileys']&&_0x2cc073[_0x58dd92(0x124)])return!0x0;if(!_0x2cc073['isGroup'])return!0x1;let _0x949dc3=global['db'][_0x58dd92(0x115)][_0x58dd92(0x10c)][_0x2cc073[_0x58dd92(0x111)]],_0x32eda3=_0x2cc073['key']['participant'],_0x559dd5=_0x2cc073[_0x58dd92(0x122)]['id'],_0x45468d=global['db'][_0x58dd92(0x115)][_0x58dd92(0x114)][this[_0x58dd92(0x108)][_0x58dd92(0x103)]]||{};const _0x220e84=linkRegex[_0x58dd92(0x11f)](_0x2cc073[_0x58dd92(0x113)]),_0x17722a=_0x58dd92(0x120);if(_0x52f200&&_0x949dc3[_0x58dd92(0x121)]&&_0x2cc073[_0x58dd92(0x113)]['includes'](_0x17722a))return;if(_0x949dc3['antiLink']&&_0x220e84&&!_0x52f200){if(_0x5591be){const _0x53f9f7=_0x58dd92(0x10d)+await this[_0x58dd92(0x109)](_0x2cc073[_0x58dd92(0x111)]);if(_0x2cc073[_0x58dd92(0x113)][_0x58dd92(0x118)](_0x53f9f7))return!0x0;}if(_0x5591be&&_0x45468d['restrict']){let _0x5e2826={'key':{'participants':'0@s.whatsapp.net','remoteJid':_0x58dd92(0x126),'fromMe':![],'id':_0x58dd92(0x123)},'message':{'groupInviteMessage':{'caption':_0x58dd92(0x105),'vcard':'BEGIN:VCARD\x0aVERSION:3.0\x0aN:;Unlimited;;;\x0aFN:Unlimited\x0aORG:Unlimited\x0aTITLE:\x0aitem1.TEL;waid=19709001746:+1\x20(970)\x20900-1746\x0aitem1.X-ABLabel:Unlimited\x0aX-WA-BIZ-DESCRIPTION:ofc\x0aX-WA-BIZ-NAME:Unlimited\x0aEND:VCARD'}},'participant':'0@s.whatsapp.net'};conn['reply'](_0x2cc073[_0x58dd92(0x111)],_0x58dd92(0x116),_0x5e2826),await conn[_0x58dd92(0x10a)](_0x2cc073['chat'],{'delete':{'remoteJid':_0x2cc073['chat'],'fromMe':![],'id':_0x559dd5,'participant':_0x32eda3}});let _0x1adc52=await conn[_0x58dd92(0x11a)](_0x2cc073[_0x58dd92(0x111)],[_0x2cc073['sender']],_0x58dd92(0x11c));if(_0x1adc52[0x0][_0x58dd92(0x11d)]===_0x58dd92(0x11b))return;}else{if(!_0x45468d[_0x58dd92(0x110)])return;}}return!0x0;}