/*scrip ori by : kyuu X Henzz buy no enc pm wa 6285711324080 • Henzz atau 6281351692548 • kyuu */

const _0x5aa3e2=_0x4f68;(function(_0x53bdfe,_0x5f1246){const _0x5347b8=_0x4f68,_0x25ac6c=_0x53bdfe();while(!![]){try{const _0xf45f47=-parseInt(_0x5347b8(0x95))/0x1*(parseInt(_0x5347b8(0x147))/0x2)+parseInt(_0x5347b8(0xd8))/0x3*(-parseInt(_0x5347b8(0x133))/0x4)+-parseInt(_0x5347b8(0x111))/0x5+-parseInt(_0x5347b8(0x129))/0x6*(parseInt(_0x5347b8(0xef))/0x7)+-parseInt(_0x5347b8(0x92))/0x8*(-parseInt(_0x5347b8(0xba))/0x9)+parseInt(_0x5347b8(0x7b))/0xa+parseInt(_0x5347b8(0x102))/0xb;if(_0xf45f47===_0x5f1246)break;else _0x25ac6c['push'](_0x25ac6c['shift']());}catch(_0x116d82){_0x25ac6c['push'](_0x25ac6c['shift']());}}}(_0x312b,0xc9669));const {modul}=require(_0x5aa3e2(0x9c)),moment=require(_0x5aa3e2(0x72)),{baileys,boom,chalk,fs,figlet,FileType,path,pino,process,PhoneNumber}=modul,{Boom}=boom,{default:XeonBotIncConnect,useSingleFileAuthState,fetchLatestBaileysVersion,generateForwardMessageContent,prepareWAMessageMedia,generateWAMessageFromContent,generateMessageID,downloadContentFromMessage,jidDecode,proto}=require('@adiwajshing/baileys'),{default:makeWASocket,BufferJSON,initInMemoryKeyStore,DisconnectReason,AnyMessageContent,makeInMemoryStore,useMultiFileAuthState,delay}=require(_0x5aa3e2(0x75)),{color,bgcolor}=require('./lib/color'),colors=require(_0x5aa3e2(0x79)),readline=require(_0x5aa3e2(0xaa)),{uncache,nocache}=require('./lib/loader'),{start}=require(_0x5aa3e2(0xaf)),{imageToWebp,videoToWebp,writeExifImg,writeExifVid}=require('./lib/exif'),{smsg,isUrl,generateMessageTag,getBuffer,getSizeMedia,fetchJson,await,sleep,reSize}=require(_0x5aa3e2(0xf8)),owner=JSON[_0x5aa3e2(0xbd)](fs['readFileSync']('./database/owner.json')),mongoDB=require('./lib/mongoDB'),store=makeInMemoryStore({'logger':pino()[_0x5aa3e2(0x127)]({'level':_0x5aa3e2(0xc0),'stream':'store'})}),question=_0x1d19fc=>{const _0x8f042b=_0x5aa3e2,_0x5592f0=readline['createInterface']({'input':process['stdin'],'output':process[_0x8f042b(0xcd)]});return new Promise(_0x51ae93=>{_0x5592f0['question'](_0x1d19fc,_0x51ae93);});},usePairingCode=!![];require(_0x5aa3e2(0x136)),nocache(_0x5aa3e2(0xeb),_0x7b6ad=>console[_0x5aa3e2(0x113)](color('[\x20CHANGE\x20]','green'),color('\x27'+_0x7b6ad+'\x27',_0x5aa3e2(0x87)),_0x5aa3e2(0x9e))),require(_0x5aa3e2(0x107)),nocache(_0x5aa3e2(0x122),_0x8e9ffa=>console[_0x5aa3e2(0x113)](color('[\x20CHANGE\x20]',_0x5aa3e2(0x87)),color('\x27'+_0x8e9ffa+'\x27','green'),_0x5aa3e2(0x9e)));function _0x4f68(_0x6d03e3,_0x299e75){const _0x312b9c=_0x312b();return _0x4f68=function(_0x4f68d8,_0x212ef3){_0x4f68d8=_0x4f68d8-0x71;let _0x74172c=_0x312b9c[_0x4f68d8];return _0x74172c;},_0x4f68(_0x6d03e3,_0x299e75);}function title(){const _0x12d3f2=_0x5aa3e2;console[_0x12d3f2(0x11c)](),console['log'](chalk[_0x12d3f2(0xd4)](_0x12d3f2(0xa8)+chalk[_0x12d3f2(0x77)][_0x12d3f2(0xd4)]('[\x20'+botname+'\x20]')+'\x0a\x0a')),console[_0x12d3f2(0x113)](color(_0x12d3f2(0x146),_0x12d3f2(0x9f))),console[_0x12d3f2(0x113)](color('\x0a'+themeemoji+_0x12d3f2(0xe8),_0x12d3f2(0x101))),console['log'](color(themeemoji+_0x12d3f2(0xf5),_0x12d3f2(0x101))),console['log'](color(themeemoji+'\x20WA\x20NUMBER:\x20'+owner,_0x12d3f2(0x101))),console[_0x12d3f2(0x113)](color(themeemoji+_0x12d3f2(0xc6)+wm+'\x0a','magenta'));}async function XeonBotIncBot(){const _0x5874c4=_0x5aa3e2,{state:_0x21643d,saveCreds:_0x2d609f}=await useMultiFileAuthState('kyuu'),_0x217265=XeonBotIncConnect({'logger':pino({'level':'silent'}),'printQRInTerminal':!usePairingCode,'auth':_0x21643d,'browser':[_0x5874c4(0xde),'','']});if(usePairingCode&&!_0x217265[_0x5874c4(0xb9)][_0x5874c4(0x143)][_0x5874c4(0x117)]){const _0x47bfa3=await question(_0x5874c4(0x100)),_0x3c79ec=await _0x217265[_0x5874c4(0xdc)](_0x47bfa3[_0x5874c4(0x11b)]());console[_0x5874c4(0x113)](_0x5874c4(0xf0)+_0x3c79ec);}return console[_0x5874c4(0x113)](color(figlet[_0x5874c4(0x103)](_0x5874c4(0x10f),{'font':'Standard','horizontalLayout':_0x5874c4(0x7f),'vertivalLayout':_0x5874c4(0x7f),'whitespaceBreak':![]}),_0x5874c4(0xb2))),_0x217265['ws']['on']('CB:Blocklist',_0x5ad87b=>{const _0x44ba51=_0x5874c4;if(blocked[_0x44ba51(0x12d)]>0x2)return;for(let _0x29cf0f of _0x5ad87b[0x1][_0x44ba51(0xcc)]){blocked[_0x44ba51(0xa1)](_0x29cf0f[_0x44ba51(0xe7)](_0x44ba51(0x116),_0x44ba51(0x97)));}}),_0x217265['ev']['on'](_0x5874c4(0x139),async _0x34a30d=>{const _0x38cc7d=_0x5874c4;try{kay=_0x34a30d[_0x38cc7d(0xa7)][0x0];if(!kay[_0x38cc7d(0xa0)])return;kay[_0x38cc7d(0xa0)]=Object[_0x38cc7d(0x9b)](kay[_0x38cc7d(0xa0)])[0x0]===_0x38cc7d(0x8b)?kay['message'][_0x38cc7d(0x8b)]['message']:kay[_0x38cc7d(0xa0)];if(kay[_0x38cc7d(0xd9)]&&kay['key']['remoteJid']==='status@broadcast')return;if(!_0x217265[_0x38cc7d(0x13d)]&&!kay['key']['fromMe']&&_0x34a30d[_0x38cc7d(0x81)]===_0x38cc7d(0x110))return;if(kay[_0x38cc7d(0xd9)]['id'][_0x38cc7d(0x104)](_0x38cc7d(0xb1))&&kay[_0x38cc7d(0xd9)]['id'][_0x38cc7d(0x12d)]===0x10)return;m=smsg(_0x217265,kay,store),require('./case')(_0x217265,m,_0x34a30d,store);}catch(_0x3518f3){console[_0x38cc7d(0x113)](_0x3518f3);}}),_0x217265['ev']['on']('groups.update',async _0x504075=>{const _0x1d3f01=_0x5874c4;try{ppgroup=await _0x217265[_0x1d3f01(0xda)](anu['id'],_0x1d3f01(0x11f));}catch(_0x4522e3){ppgroup='https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60';}console['log'](_0x504075);const _0x5368c9=_0x504075[0x0];if(_0x5368c9[_0x1d3f01(0x11a)]==!![])await sleep(0x7d0),_0x217265[_0x1d3f01(0xac)](_0x5368c9['id'],{'text':'「\x20Group\x20Settings\x20Change\x20」\x0a\x0aGroup\x20has\x20been\x20closed\x20by\x20admin,\x20Now\x20only\x20admins\x20can\x20send\x20messages\x20!'});else{if(_0x5368c9[_0x1d3f01(0x11a)]==![])await sleep(0x7d0),_0x217265[_0x1d3f01(0xac)](_0x5368c9['id'],{'text':_0x1d3f01(0xe0)});else{if(_0x5368c9[_0x1d3f01(0x128)]==!![])await sleep(0x7d0),_0x217265['sendMessage'](_0x5368c9['id'],{'text':_0x1d3f01(0x132)});else{if(_0x5368c9[_0x1d3f01(0x128)]==![])await sleep(0x7d0),_0x217265[_0x1d3f01(0xac)](_0x5368c9['id'],{'text':_0x1d3f01(0x89)});else!_0x5368c9[_0x1d3f01(0xa9)]==''?(await sleep(0x7d0),_0x217265[_0x1d3f01(0xac)](_0x5368c9['id'],{'text':_0x1d3f01(0xb3)+_0x5368c9[_0x1d3f01(0xa9)]})):(await sleep(0x7d0),_0x217265[_0x1d3f01(0xac)](_0x5368c9['id'],{'text':_0x1d3f01(0x13c)+_0x5368c9['subject']+'*'}));}}}}),global[_0x5874c4(0x93)]=global['db'],global['loadDatabase']=async function _0x514403(){const _0x4e0f88=_0x5874c4;if(global['db'][_0x4e0f88(0x7c)])return new Promise(_0xe40fbd=>setInterval(function(){const _0x423076=_0x4e0f88;!global['db'][_0x423076(0x7c)]?(clearInterval(this),_0xe40fbd(global['db'][_0x423076(0x115)]==null?global[_0x423076(0xb5)]():global['db'][_0x423076(0x115)])):null;},0x1*0x3e8));if(global['db'][_0x4e0f88(0x115)]!==null)return;global['db'][_0x4e0f88(0x7c)]=!![],await global['db'][_0x4e0f88(0x86)](),global['db'][_0x4e0f88(0x7c)]=![],global['db'][_0x4e0f88(0x115)]={'users':{},'chats':{},'game':{},'database':{},'settings':{},'setting':{},'others':{},'sticker':{},...global['db'][_0x4e0f88(0x115)]||{}},global['db'][_0x4e0f88(0x99)]=_[_0x4e0f88(0x99)](global['db'][_0x4e0f88(0x115)]);},loadDatabase(),_0x217265['ev']['on'](_0x5874c4(0x85),async _0x5ab089=>{const _0x314c78=_0x5874c4;console[_0x314c78(0x113)](_0x5ab089);try{let _0x18c1ca=await _0x217265[_0x314c78(0x10a)](_0x5ab089['id']),_0x3f7e57=_0x5ab089[_0x314c78(0x140)];for(let _0x5ec1da of _0x3f7e57){try{ppuser=await _0x217265['profilePictureUrl'](_0x5ec1da,_0x314c78(0x11f));}catch(_0x4f8f41){ppuser='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60';}try{ppgroup=await _0x217265[_0x314c78(0xda)](_0x5ab089['id'],'image');}catch(_0x410e89){ppgroup=_0x314c78(0x98);}memb=_0x18c1ca[_0x314c78(0x140)]['length'],XeonWlcm=await getBuffer(ppuser),XeonLft=await getBuffer(ppuser);if(_0x5ab089[_0x314c78(0xb4)]==_0x314c78(0x88)){const _0x4522b6=await getBuffer(ppuser);let _0x4f4636=_0x5ec1da;const _0x40ea23=moment['tz'](_0x314c78(0x13f))['format'](_0x314c78(0xfd)),_0x482080=moment['tz'](_0x314c78(0x13f))[_0x314c78(0xcf)]('DD/MM/YYYY'),_0x21e599=_0x18c1ca['participants'][_0x314c78(0x12d)];xeonbody='@'+_0x4f4636[_0x314c78(0xab)]('@')[0x0]+_0x314c78(0x13b)+_0x18c1ca[_0x314c78(0xf1)],_0x217265['sendMessage'](_0x5ab089['id'],{'text':xeonbody,'contextInfo':{'mentionedJid':[_0x5ec1da],'externalAdReply':{'showAdAttribution':!![],'containsAutoReply':!![],'title':'\x20'+global[_0x314c78(0xee)],'body':''+ownername,'previewType':_0x314c78(0xae),'thumbnailUrl':'','thumbnail':XeonWlcm,'sourceUrl':''+wagc}}});}else{if(_0x5ab089[_0x314c78(0xb4)]=='remove'){const _0x289d55=await getBuffer(ppuser),_0x4efdb6=moment['tz'](_0x314c78(0x13f))['format'](_0x314c78(0xfd)),_0x5d71e2=moment['tz'](_0x314c78(0x13f))['format'](_0x314c78(0x13a));let _0x160f6a=_0x5ec1da;const _0x45d037=_0x18c1ca[_0x314c78(0x140)][_0x314c78(0x12d)];xeonbody='@'+_0x160f6a['split']('@')[0x0]+'\x20𝙇𝙚𝙖𝙫𝙞𝙣𝙜\x20𝙏𝙤\x20𝙂𝙧𝙪𝙥'+_0x18c1ca[_0x314c78(0xf1)]+':',_0x217265[_0x314c78(0xac)](_0x5ab089['id'],{'text':xeonbody,'contextInfo':{'mentionedJid':[_0x5ec1da],'externalAdReply':{'showAdAttribution':!![],'containsAutoReply':!![],'title':'\x20'+global[_0x314c78(0xee)],'body':''+ownername,'previewType':_0x314c78(0xae),'thumbnailUrl':'','thumbnail':XeonLft,'sourceUrl':''+wagc}}});}else{if(_0x5ab089[_0x314c78(0xb4)]=='promote'){const _0x88f081=await getBuffer(ppuser),_0x136690=moment['tz'](_0x314c78(0x13f))[_0x314c78(0xcf)](_0x314c78(0xfd)),_0x54477f=moment['tz']('Asia/Kolkata')[_0x314c78(0xcf)]('DD/MM/YYYY');let _0x5dfc85=_0x5ec1da;xeonbody=_0x314c78(0xc7)+_0x5dfc85['split']('@')[0x0]+_0x314c78(0x108),_0x217265[_0x314c78(0xac)](_0x5ab089['id'],{'text':xeonbody,'contextInfo':{'mentionedJid':[_0x5ec1da],'externalAdReply':{'showAdAttribution':!![],'containsAutoReply':!![],'title':'\x20'+global[_0x314c78(0xee)],'body':''+ownername,'previewType':_0x314c78(0xae),'thumbnailUrl':'','thumbnail':XeonWlcm,'sourceUrl':''+wagc}}});}else{if(_0x5ab089[_0x314c78(0xb4)]==_0x314c78(0x134)){const _0x951680=await getBuffer(ppuser),_0x12d394=moment['tz']('Asia/Kolkata')[_0x314c78(0xcf)](_0x314c78(0xfd)),_0x4d991b=moment['tz'](_0x314c78(0x13f))['format'](_0x314c78(0x13a));let _0x369916=_0x5ec1da;xeonbody=_0x314c78(0x131)+_0x369916['split']('@')[0x0]+_0x314c78(0x145),_0x217265[_0x314c78(0xac)](_0x5ab089['id'],{'text':xeonbody,'contextInfo':{'mentionedJid':[_0x5ec1da],'externalAdReply':{'showAdAttribution':!![],'containsAutoReply':!![],'title':'\x20'+global[_0x314c78(0xee)],'body':''+ownername,'previewType':'PHOTO','thumbnailUrl':'','thumbnail':XeonLft,'sourceUrl':''+wagc}}});}}}}}}catch(_0x27f5ce){console[_0x314c78(0x113)](_0x27f5ce);}}),_0x217265['sendTextWithMentions']=async(_0x2b936b,_0x3ccd5b,_0x4c582a,_0x458e6f={})=>_0x217265['sendMessage'](_0x2b936b,{'text':_0x3ccd5b,'contextInfo':{'mentionedJid':[..._0x3ccd5b[_0x5874c4(0x84)](/@(\d{0,16})/g)][_0x5874c4(0x121)](_0x4318b1=>_0x4318b1[0x1]+_0x5874c4(0xc9))},..._0x458e6f},{'quoted':_0x4c582a}),_0x217265[_0x5874c4(0x141)]=_0x245bf9=>{const _0x522bd9=_0x5874c4;if(!_0x245bf9)return _0x245bf9;if(/:\d+@/gi[_0x522bd9(0x80)](_0x245bf9)){let _0x472601=jidDecode(_0x245bf9)||{};return _0x472601[_0x522bd9(0x96)]&&_0x472601[_0x522bd9(0xf3)]&&_0x472601[_0x522bd9(0x96)]+'@'+_0x472601['server']||_0x245bf9;}else return _0x245bf9;},_0x217265['ev']['on'](_0x5874c4(0x126),_0x262837=>{const _0x46e400=_0x5874c4;for(let _0x33ec0c of _0x262837){let _0x242636=_0x217265['decodeJid'](_0x33ec0c['id']);if(store&&store[_0x46e400(0xe6)])store['contacts'][_0x242636]={'id':_0x242636,'name':_0x33ec0c[_0x46e400(0x110)]};}}),_0x217265[_0x5874c4(0x105)]=(_0x52d31e,_0x3877db=![])=>{const _0x1e5ae1=_0x5874c4;id=_0x217265[_0x1e5ae1(0x141)](_0x52d31e),_0x3877db=_0x217265[_0x1e5ae1(0xfb)]||_0x3877db;let _0xb0057;if(id[_0x1e5ae1(0x8e)](_0x1e5ae1(0xb8)))return new Promise(async _0x1bbb81=>{const _0x3c3e17=_0x1e5ae1;_0xb0057=store[_0x3c3e17(0xe6)][id]||{};if(!(_0xb0057[_0x3c3e17(0xfe)]||_0xb0057[_0x3c3e17(0xf1)]))_0xb0057=_0x217265[_0x3c3e17(0x10a)](id)||{};_0x1bbb81(_0xb0057['name']||_0xb0057[_0x3c3e17(0xf1)]||PhoneNumber('+'+id[_0x3c3e17(0xe7)](_0x3c3e17(0xc9),''))[_0x3c3e17(0xc1)](_0x3c3e17(0x10b)));});else _0xb0057=id===_0x1e5ae1(0xd7)?{'id':id,'name':'WhatsApp'}:id===_0x217265['decodeJid'](_0x217265[_0x1e5ae1(0x96)]['id'])?_0x217265['user']:store['contacts'][id]||{};return(_0x3877db?'':_0xb0057[_0x1e5ae1(0xfe)])||_0xb0057['subject']||_0xb0057[_0x1e5ae1(0xbf)]||PhoneNumber('+'+_0x52d31e[_0x1e5ae1(0xe7)]('@s.whatsapp.net',''))[_0x1e5ae1(0xc1)](_0x1e5ae1(0x10b));},_0x217265[_0x5874c4(0xe4)]=(_0x43e49c='')=>{const _0x254d90=_0x5874c4;return[..._0x43e49c[_0x254d90(0x84)](/@([0-9]{5,16}|0)/g)][_0x254d90(0x121)](_0x36f624=>_0x36f624[0x1]+_0x254d90(0xc9));},_0x217265[_0x5874c4(0x135)]=async(_0x21e5dd,_0x40ae90,_0x4294ca='',_0x20868a={})=>{const _0x9e8f3f=_0x5874c4;let _0x576c83=[];for(let _0x42f9c7 of _0x40ae90){_0x576c83['push']({'displayName':await _0x217265[_0x9e8f3f(0x105)](_0x42f9c7),'vcard':_0x9e8f3f(0x144)+await _0x217265[_0x9e8f3f(0x105)](_0x42f9c7)+_0x9e8f3f(0xe1)+await _0x217265['getName'](_0x42f9c7)+_0x9e8f3f(0x78)+_0x42f9c7+':'+_0x42f9c7+_0x9e8f3f(0xa6)+ytname+_0x9e8f3f(0x8c)+socialm+_0x9e8f3f(0x114)+location+_0x9e8f3f(0x8d)});}_0x217265[_0x9e8f3f(0xac)](_0x21e5dd,{'contacts':{'displayName':_0x576c83['length']+_0x9e8f3f(0x13e),'contacts':_0x576c83},..._0x20868a},{'quoted':_0x4294ca});},_0x217265[_0x5874c4(0xe2)]=_0x254527=>{const _0xfdf19a=_0x5874c4;return _0x217265[_0xfdf19a(0x109)]({'tag':'iq','attrs':{'to':'@s.whatsapp.net','type':_0xfdf19a(0x142),'xmlns':_0xfdf19a(0x130)},'content':[{'tag':'status','attrs':{},'content':Buffer['from'](_0x254527,_0xfdf19a(0xa3))}]}),_0x254527;},_0x217265[_0x5874c4(0x13d)]=!![],_0x217265[_0x5874c4(0xc5)]=async(_0x157d12,_0x51a23b,_0x4e427b='',_0x3fdf90='',_0x2c1975)=>{const _0x21cfa6=_0x5874c4;let _0x29762e=Buffer['isBuffer'](_0x51a23b)?_0x51a23b:/^data:.*?\/.*?;base64,/i[_0x21cfa6(0x80)](_0x51a23b)?Buffer[_0x21cfa6(0x123)](_0x51a23b[_0x21cfa6(0xab)]`,`[0x1],_0x21cfa6(0x94)):/^https?:\/\//[_0x21cfa6(0x80)](_0x51a23b)?await await getBuffer(_0x51a23b):fs[_0x21cfa6(0xf4)](_0x51a23b)?fs['readFileSync'](_0x51a23b):Buffer['alloc'](0x0);return await _0x217265[_0x21cfa6(0xac)](_0x157d12,{'image':_0x29762e,'caption':_0x4e427b,..._0x2c1975},{'quoted':_0x3fdf90});},_0x217265['sendImageAsSticker']=async(_0x4efabb,_0x8d4ac7,_0x2dbd3d,_0x431c91={})=>{const _0xc4e56c=_0x5874c4;let _0x41036b=Buffer[_0xc4e56c(0xec)](_0x8d4ac7)?_0x8d4ac7:/^data:.*?\/.*?;base64,/i[_0xc4e56c(0x80)](_0x8d4ac7)?Buffer[_0xc4e56c(0x123)](_0x8d4ac7['split']`,`[0x1],_0xc4e56c(0x94)):/^https?:\/\//[_0xc4e56c(0x80)](_0x8d4ac7)?await await getBuffer(_0x8d4ac7):fs[_0xc4e56c(0xf4)](_0x8d4ac7)?fs['readFileSync'](_0x8d4ac7):Buffer['alloc'](0x0),_0x3628f6;_0x431c91&&(_0x431c91[_0xc4e56c(0xa5)]||_0x431c91['author'])?_0x3628f6=await writeExifImg(_0x41036b,_0x431c91):_0x3628f6=await imageToWebp(_0x41036b),await _0x217265[_0xc4e56c(0xac)](_0x4efabb,{'sticker':{'url':_0x3628f6},..._0x431c91},{'quoted':_0x2dbd3d})[_0xc4e56c(0x9a)](_0x37a3f1=>{const _0x1890a4=_0xc4e56c;return fs[_0x1890a4(0xd3)](_0x3628f6),_0x37a3f1;});},_0x217265[_0x5874c4(0x11e)]=async(_0x1adbb8,_0xcc930c,_0x125ce4,_0x4b0c08={})=>{const _0x1a4779=_0x5874c4;let _0x1faf25=Buffer[_0x1a4779(0xec)](_0xcc930c)?_0xcc930c:/^data:.*?\/.*?;base64,/i[_0x1a4779(0x80)](_0xcc930c)?Buffer[_0x1a4779(0x123)](_0xcc930c[_0x1a4779(0xab)]`,`[0x1],'base64'):/^https?:\/\//[_0x1a4779(0x80)](_0xcc930c)?await await getBuffer(_0xcc930c):fs['existsSync'](_0xcc930c)?fs[_0x1a4779(0x112)](_0xcc930c):Buffer[_0x1a4779(0x7d)](0x0),_0x1e65d1;return _0x4b0c08&&(_0x4b0c08['packname']||_0x4b0c08['author'])?_0x1e65d1=await writeExifVid(_0x1faf25,_0x4b0c08):_0x1e65d1=await videoToWebp(_0x1faf25),await _0x217265[_0x1a4779(0xac)](_0x1adbb8,{'sticker':{'url':_0x1e65d1},..._0x4b0c08},{'quoted':_0x125ce4}),_0x1e65d1;},_0x217265[_0x5874c4(0x12a)]=async(_0x2e1b22,_0x2d051f,_0x47d5f8=![],_0xcfa93b={})=>{const _0x487fe8=_0x5874c4;let _0x349dbb;_0xcfa93b[_0x487fe8(0x120)]&&(_0x2d051f[_0x487fe8(0xa0)]=_0x2d051f['message']&&_0x2d051f['message'][_0x487fe8(0x8b)]&&_0x2d051f[_0x487fe8(0xa0)][_0x487fe8(0x8b)][_0x487fe8(0xa0)]?_0x2d051f[_0x487fe8(0xa0)]['ephemeralMessage'][_0x487fe8(0xa0)]:_0x2d051f[_0x487fe8(0xa0)]||undefined,_0x349dbb=Object['keys'](_0x2d051f[_0x487fe8(0xa0)][_0x487fe8(0xa2)]['message'])[0x0],delete(_0x2d051f['message']&&_0x2d051f[_0x487fe8(0xa0)][_0x487fe8(0x9d)]?_0x2d051f[_0x487fe8(0xa0)][_0x487fe8(0x9d)]:_0x2d051f[_0x487fe8(0xa0)]||undefined),delete _0x2d051f[_0x487fe8(0xa0)][_0x487fe8(0xa2)][_0x487fe8(0xa0)][_0x349dbb][_0x487fe8(0x71)],_0x2d051f[_0x487fe8(0xa0)]={..._0x2d051f[_0x487fe8(0xa0)]['viewOnceMessage'][_0x487fe8(0xa0)]});let _0x4acd7a=Object['keys'](_0x2d051f[_0x487fe8(0xa0)])[0x0],_0x415c42=await generateForwardMessageContent(_0x2d051f,_0x47d5f8),_0x5f0e4c=Object[_0x487fe8(0x9b)](_0x415c42)[0x0],_0x4b2ad3={};if(_0x4acd7a!='conversation')_0x4b2ad3=_0x2d051f[_0x487fe8(0xa0)][_0x4acd7a]['contextInfo'];_0x415c42[_0x5f0e4c][_0x487fe8(0x91)]={..._0x4b2ad3,..._0x415c42[_0x5f0e4c][_0x487fe8(0x91)]};const _0x180686=await generateWAMessageFromContent(_0x2e1b22,_0x415c42,_0xcfa93b?{..._0x415c42[_0x5f0e4c],..._0xcfa93b,..._0xcfa93b['contextInfo']?{'contextInfo':{..._0x415c42[_0x5f0e4c][_0x487fe8(0x91)],..._0xcfa93b[_0x487fe8(0x91)]}}:{}}:{});return await _0x217265[_0x487fe8(0xd5)](_0x2e1b22,_0x180686['message'],{'messageId':_0x180686['key']['id']}),_0x180686;},_0x217265[_0x5874c4(0xb7)]=async(_0x2bd5d0,_0x944f05,_0x437053=!![])=>{const _0x543060=_0x5874c4;let _0x1baec4=_0x2bd5d0[_0x543060(0x125)]?_0x2bd5d0[_0x543060(0x125)]:_0x2bd5d0,_0x459c8b=(_0x2bd5d0['msg']||_0x2bd5d0)['mimetype']||'',_0x23d7ca=_0x2bd5d0['mtype']?_0x2bd5d0[_0x543060(0xca)]['replace'](/Message/gi,''):_0x459c8b[_0x543060(0xab)]('/')[0x0];const _0x221d18=await downloadContentFromMessage(_0x1baec4,_0x23d7ca);let _0x45510e=Buffer['from']([]);for await(const _0x1a5e8f of _0x221d18){_0x45510e=Buffer[_0x543060(0x119)]([_0x45510e,_0x1a5e8f]);}let _0xebf114=await FileType[_0x543060(0x12e)](_0x45510e);return trueFileName=_0x437053?_0x944f05+'.'+_0xebf114[_0x543060(0xfa)]:_0x944f05,await fs[_0x543060(0x10c)](trueFileName,_0x45510e),trueFileName;},_0x217265[_0x5874c4(0xe9)]=async _0x549bcd=>{const _0x3c6bdd=_0x5874c4;let _0x1e9fb3=(_0x549bcd[_0x3c6bdd(0x125)]||_0x549bcd)[_0x3c6bdd(0xdb)]||'',_0xb597c9=_0x549bcd[_0x3c6bdd(0xca)]?_0x549bcd['mtype'][_0x3c6bdd(0xe7)](/Message/gi,''):_0x1e9fb3[_0x3c6bdd(0xab)]('/')[0x0];const _0x363f61=await downloadContentFromMessage(_0x549bcd,_0xb597c9);let _0x2ae585=Buffer[_0x3c6bdd(0x123)]([]);for await(const _0x49d3b7 of _0x363f61){_0x2ae585=Buffer[_0x3c6bdd(0x119)]([_0x2ae585,_0x49d3b7]);}return _0x2ae585;},_0x217265[_0x5874c4(0x118)]=async(_0x3fbb29,_0x7e0734)=>{const _0x416e5a=_0x5874c4;let _0x1a965d,_0x2e256b=Buffer[_0x416e5a(0xec)](_0x3fbb29)?_0x3fbb29:/^data:.*?\/.*?;base64,/i[_0x416e5a(0x80)](_0x3fbb29)?Buffer[_0x416e5a(0x123)](_0x3fbb29[_0x416e5a(0xab)]`,`[0x1],_0x416e5a(0x94)):/^https?:\/\//['test'](_0x3fbb29)?await(_0x1a965d=await getBuffer(_0x3fbb29)):fs[_0x416e5a(0xf4)](_0x3fbb29)?(filename=_0x3fbb29,fs[_0x416e5a(0x112)](_0x3fbb29)):typeof _0x3fbb29===_0x416e5a(0xc2)?_0x3fbb29:Buffer[_0x416e5a(0x7d)](0x0),_0x55cd85=await FileType[_0x416e5a(0x12e)](_0x2e256b)||{'mime':_0x416e5a(0x138),'ext':_0x416e5a(0xfc)};filename=path['join'](__filename,_0x416e5a(0x8f)+new Date()*0x1+'.'+_0x55cd85[_0x416e5a(0xfa)]);if(_0x2e256b&&_0x7e0734)fs[_0x416e5a(0xea)][_0x416e5a(0x74)](filename,_0x2e256b);return{'res':_0x1a965d,'filename':filename,'size':await getSizeMedia(_0x2e256b),..._0x55cd85,'data':_0x2e256b};},_0x217265['sendMedia']=async(_0x3fd29e,_0x119a06,_0x121788='',_0x5ac783='',_0x4910f5='',_0x3956ca={})=>{const _0x5efabd=_0x5874c4;let _0x579e4b=await _0x217265[_0x5efabd(0x118)](_0x119a06,!![]),{mime:_0x4269e9,ext:_0x2adeb6,res:_0x23900f,data:_0x566344,filename:_0x155a49}=_0x579e4b;if(_0x23900f&&_0x23900f[_0x5efabd(0x130)]!==0xc8||file['length']<=0x10000)try{throw{'json':JSON['parse'](file[_0x5efabd(0x106)]())};}catch(_0xb489d6){if(_0xb489d6['json'])throw _0xb489d6[_0x5efabd(0xe3)];}let _0x3133f9='',_0x3c084=_0x4269e9,_0x10e176=_0x155a49;if(_0x3956ca['asDocument'])_0x3133f9=_0x5efabd(0x8a);if(_0x3956ca['asSticker']||/webp/[_0x5efabd(0x80)](_0x4269e9)){let {writeExif:_0x5f3d0a}=require(_0x5efabd(0xce)),_0x177646={'mimetype':_0x4269e9,'data':_0x566344};_0x10e176=await _0x5f3d0a(_0x177646,{'packname':_0x3956ca[_0x5efabd(0xa5)]?_0x3956ca[_0x5efabd(0xa5)]:global['packname'],'author':_0x3956ca[_0x5efabd(0xed)]?_0x3956ca['author']:global[_0x5efabd(0xed)],'categories':_0x3956ca[_0x5efabd(0x11d)]?_0x3956ca[_0x5efabd(0x11d)]:[]}),await fs[_0x5efabd(0xea)][_0x5efabd(0xb6)](_0x155a49),_0x3133f9=_0x5efabd(0x73),_0x3c084=_0x5efabd(0xc4);}else{if(/image/[_0x5efabd(0x80)](_0x4269e9))_0x3133f9=_0x5efabd(0x11f);else{if(/video/[_0x5efabd(0x80)](_0x4269e9))_0x3133f9=_0x5efabd(0xbe);else{if(/audio/[_0x5efabd(0x80)](_0x4269e9))_0x3133f9=_0x5efabd(0xbc);else _0x3133f9=_0x5efabd(0x8a);}}}return await _0x217265[_0x5efabd(0xac)](_0x3fd29e,{[_0x3133f9]:{'url':_0x10e176},'caption':_0x5ac783,'mimetype':_0x3c084,'fileName':_0x121788,..._0x3956ca},{'quoted':_0x4910f5,..._0x3956ca}),fs['promises'][_0x5efabd(0xb6)](_0x10e176);},_0x217265[_0x5874c4(0xff)]=(_0x3010af,_0x1d8fa5,_0x19bcf8='',_0x2523b6)=>_0x217265[_0x5874c4(0xac)](_0x3010af,{'text':_0x1d8fa5,..._0x2523b6},{'quoted':_0x19bcf8}),_0x217265[_0x5874c4(0x12c)]=_0x335374=>smsg(_0x217265,_0x335374,store),_0x217265['ev']['on'](_0x5874c4(0xf9),async _0x3e0a27=>{const _0x1da7b6=_0x5874c4,{connection:_0x524497,lastDisconnect:_0xda01b5}=_0x3e0a27;if(_0x524497===_0x1da7b6(0xf7)){let _0x206c16=new Boom(_0xda01b5?.['error'])?.[_0x1da7b6(0xdf)]['statusCode'];if(_0x206c16===DisconnectReason[_0x1da7b6(0xdd)])console[_0x1da7b6(0x113)](_0x1da7b6(0xd1)),_0x217265[_0x1da7b6(0xf6)]();else{if(_0x206c16===DisconnectReason[_0x1da7b6(0x12b)])console[_0x1da7b6(0x113)](_0x1da7b6(0x12f)),XeonBotIncBot();else{if(_0x206c16===DisconnectReason[_0x1da7b6(0x76)])console[_0x1da7b6(0x113)](_0x1da7b6(0xd6)),XeonBotIncBot();else{if(_0x206c16===DisconnectReason[_0x1da7b6(0x83)])console[_0x1da7b6(0x113)](_0x1da7b6(0x10d)),_0x217265[_0x1da7b6(0xf6)]();else{if(_0x206c16===DisconnectReason[_0x1da7b6(0xe5)])console[_0x1da7b6(0x113)](_0x1da7b6(0x124)),_0x217265[_0x1da7b6(0xf6)]();else{if(_0x206c16===DisconnectReason[_0x1da7b6(0xbb)])console[_0x1da7b6(0x113)]('Restart\x20Required,\x20Restarting...'),XeonBotIncBot();else{if(_0x206c16===DisconnectReason['timedOut'])console['log'](_0x1da7b6(0xc8)),XeonBotIncBot();else _0x217265[_0x1da7b6(0x7e)](_0x1da7b6(0xc3)+_0x206c16+'|'+_0x524497);}}}}}}}else _0x524497===_0x1da7b6(0x137)&&_0x217265[_0x1da7b6(0xac)](owner+_0x1da7b6(0xc9),{'text':_0x1da7b6(0xd2)});console[_0x1da7b6(0x113)](_0x1da7b6(0x7a),_0x3e0a27);}),_0x217265['ev']['on']('creds.update',await _0x2d609f),start('2',colors[_0x5874c4(0x77)]['white'](_0x5874c4(0xd0))),_0x217265['sendButtonText']=(_0x34c139,_0xcbb10f=[],_0x29b2db,_0x1b7343,_0x42b56c='',_0x22727f={})=>{const _0x4f36e4=_0x5874c4;let _0x4f2bfc={'text':_0x29b2db,'footer':_0x1b7343,'buttons':_0xcbb10f,'headerType':0x2,..._0x22727f};_0x217265[_0x4f36e4(0xac)](_0x34c139,_0x4f2bfc,{'quoted':_0x42b56c,..._0x22727f});},_0x217265[_0x5874c4(0xcb)]=async(_0x479588,_0x28d10b='',_0x164919='',_0x1db1dc,_0x77f3cc={})=>{const _0x48dbb9=_0x5874c4;let _0x52c04c=await prepareWAMessageMedia({'image':_0x1db1dc},{'upload':_0x217265[_0x48dbb9(0xb0)]});const _0x297478=generateWAMessageFromContent(_0x479588,{'productMessage':{'product':{'productImage':_0x52c04c[_0x48dbb9(0xf2)],'productId':_0x48dbb9(0xa4),'title':_0x28d10b,'description':_0x164919,'currencyCode':'INR','priceAmount1000':_0x48dbb9(0x10e),'url':''+websitex,'productImageCount':0x1,'salePriceAmount1000':'0'},'businessOwnerJid':ownernumber+_0x48dbb9(0xc9)}},_0x77f3cc);return _0x217265[_0x48dbb9(0xd5)](_0x479588,_0x297478[_0x48dbb9(0xa0)],{'messageId':_0x297478[_0x48dbb9(0xd9)]['id']});},_0x217265['send5ButLoc']=async(_0x272849,_0x5410f1='',_0x8d7dac='',_0x52162e,_0x454876=[],_0x51c8a7={})=>{const _0x3da541=_0x5874c4;var _0x354849=generateWAMessageFromContent(_0x272849,proto[_0x3da541(0x90)]['fromObject']({'templateMessage':{'hydratedTemplate':{'hydratedContentText':_0x5410f1,'locationMessage':{'jpegThumbnail':_0x52162e},'hydratedFooterText':_0x8d7dac,'hydratedButtons':_0x454876}}}),_0x51c8a7);_0x217265['relayMessage'](_0x272849,_0x354849[_0x3da541(0xa0)],{'messageId':_0x354849[_0x3da541(0xd9)]['id']});},_0x217265['sendButImg']=async(_0x50f6fd,_0x26bc9d,_0x260273,_0xd9815a,_0x33877a)=>{const _0x16e48d=_0x5874c4;let _0x1ddea7=Buffer['isBuffer'](_0x26bc9d)?_0x26bc9d:/^data:.*?\/.*?;base64,/i[_0x16e48d(0x80)](_0x26bc9d)?Buffer[_0x16e48d(0x123)](_0x26bc9d[_0x16e48d(0xab)]`,`[0x1],_0x16e48d(0x94)):/^https?:\/\//['test'](_0x26bc9d)?await await getBuffer(_0x26bc9d):fs[_0x16e48d(0xf4)](_0x26bc9d)?fs[_0x16e48d(0x112)](_0x26bc9d):Buffer[_0x16e48d(0x7d)](0x0),_0x552373={'image':_0x1ddea7,'jpegThumbnail':_0x1ddea7,'caption':_0x260273,'fileLength':'1','footer':_0xd9815a,'buttons':_0x33877a,'headerType':0x4};_0x217265[_0x16e48d(0xac)](_0x50f6fd,_0x552373,{'quoted':m});},_0x217265;}XeonBotIncBot(),process['on'](_0x5aa3e2(0x82),function(_0x5b1069){const _0x2312b1=_0x5aa3e2;console[_0x2312b1(0x113)](_0x2312b1(0xad),_0x5b1069);});function _0x312b(){const _0x1d7161=['Connection\x20closed,\x20reconnecting....','status','𝗢𝗼𝗽𝘀‼️\x20@','「\x20Group\x20Settings\x20Change\x20」\x0a\x0aGroup\x20info\x20has\x20been\x20restricted,\x20Now\x20only\x20admin\x20can\x20edit\x20group\x20info\x20!','4tsAEUD','demote','sendContact','./case.js','open','application/octet-stream','messages.upsert','DD/MM/YYYY','\x20𝙅𝙤𝙞𝙣𝙚𝙙\x20𝙏𝙤\x20𝙂𝙧𝙪𝙥\x20','「\x20Group\x20Settings\x20Change\x20」\x0a\x0a*Group\x20name\x20has\x20been\x20changed\x20to*\x0a\x0a*','public','\x20Contact','Asia/Kolkata','participants','decodeJid','set','creds','BEGIN:VCARD\x0aVERSION:3.0\x0aN:',',\x20you\x20have\x20been\x20*demoted*\x20from\x20*admin*\x20😬','<\x20==================================================\x20>','2SItzxm','viewOnce','moment-timezone','sticker','writeFile','@adiwajshing/baileys','connectionLost','bold','\x0aitem1.TEL;waid=','colors','Connected...','4463330tQOqBB','READ','alloc','end','default','test','type','uncaughtException','connectionReplaced','matchAll','group-participants.update','read','green','add','「\x20Group\x20Settings\x20Change\x20」\x0a\x0aGroup\x20info\x20has\x20been\x20opened,\x20Now\x20participants\x20can\x20edit\x20group\x20info\x20!','document','ephemeralMessage','\x0aitem2.X-ABLabel:YouTube\x0aitem3.URL:',';;;;\x0aitem4.X-ABLabel:Region\x0aEND:VCARD','endsWith','./lib','Message','contextInfo','58184gbczUw','DATABASE','base64','633968msfzwA','user','s.whatsapp.net','https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60','chain','then','keys','./module','ignore','Updated','cyan','message','push','viewOnceMessage','utf-8','9999','packname','\x0aitem1.X-ABLabel:Click\x20here\x20to\x20chat\x0aitem2.EMAIL;type=INTERNET:','messages','\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','desc','readline','split','sendMessage','Caught\x20exception:\x20','PHOTO','./lib/spinner','waUploadToServer','BAE5','aqua','「\x20Group\x20Settings\x20Change\x20」\x0a\x0a*Group\x20description\x20has\x20been\x20changed\x20to*\x0a\x0a','action','loadDatabase','unlink','downloadAndSaveMediaMessage','@g.us','authState','1746hhnXgJ','restartRequired','audio','parse','video','verifiedName','silent','getNumber','string','Unknown\x20DisconnectReason:\x20','image/webp','sendImage','\x20CREDIT:\x20','\x20𝗖𝗼𝗻𝗴𝗿𝗮𝘁𝘀🎉\x20@','Connection\x20TimedOut,\x20Reconnecting...','@s.whatsapp.net','mtype','sendKatalog','blocklist','stdout','./lib/exif','format','\x0aWaiting\x20for\x20New\x20Messages..','Bad\x20Session\x20File,\x20Please\x20Delete\x20Session\x20and\x20Scan\x20Again','*Bot\x20started!*\x0a\x0a\x0a_Don\x27t\x20forget\x20to\x20support,\x20bro\x20:)_\x0a\x0aYouTube:\x20https://youtube.com/@4Ksanzz\x0a\x0aGitHub:\x20https://github.com/4ksanzz\x0a\x0aInstsgram:\x20https://instagram.com/fhl.dx17\x0a\x0aWhatsApp\x20Pm:\x20wa.me/6281236167286\x0a\x0a\x20WhatsApp\x20Gc1:\x20https://chat.whatsapp.com/CfxAwJYP6Rl2J4uOwgavBh\x0a\x0aWhatsApp\x20Gc2:\x20https://chat.whatsapp.com/CfxAwJYP6Rl2J4uOwgavBh\x0a\x0aWhatsApp\x20Gc3:\x20https://chat.whatsapp.com/CfxAwJYP6Rl2J4uOwgavBh\x0a\x0aDonate:\x20https://prnt.sc/4RvtjEeIyrFH\x20\x0a\x0a\x0a_*Thanks\x20to*_\x0a_*4K\x20Sanzz*_\x0a_*Myself*_\x0a_*Family*_\x0a_*Friends\x20who\x20helped\x20me\x20assemble\x20this\x20script*_','unlinkSync','yellow','relayMessage','Connection\x20Lost\x20from\x20Server,\x20reconnecting...','0@s.whatsapp.net','591477ogRRRR','key','profilePictureUrl','mimetype','requestPairingCode','badSession','Chrome\x20(Linux)','output','「\x20Group\x20Settings\x20Change\x20」\x0a\x0aThe\x20group\x20has\x20been\x20opened\x20by\x20admin,\x20Now\x20participants\x20can\x20send\x20messages\x20!','\x0aFN:','setStatus','json','parseMention','loggedOut','contacts','replace','\x20YT\x20CHANNEL:\x20FallXD425','downloadMediaMessage','promises','../case.js','isBuffer','author','botname','140dWfaXs','Pairing\x20code:\x20','subject','imageMessage','server','existsSync','\x20GITHUB:\x204ksanzz\x20','logout','close','./lib/myfunc','connection.update','ext','withoutContact','.bin','HH:mm:ss','name','sendText','Masukan\x20Nomer\x20Yang\x20Aktif\x20Awali\x20Dengan\x2062:\x0a','magenta','20873732ZeanLv','textSync','startsWith','getName','toString','./index.js',',\x20you\x20have\x20been\x20*promoted*\x20to\x20*admin*\x20🥳','query','groupMetadata','international','writeFileSync','Connection\x20Replaced,\x20Another\x20New\x20Session\x20Opened,\x20Please\x20Close\x20Current\x20Session\x20First','100000','KyuuXPLOID','notify','3279015FDuCcT','readFileSync','log','\x0aitem3.X-ABLabel:GitHub\x0aitem4.ADR:;;','data','c.us','registered','getFile','concat','announce','trim','clear','categories','sendVideoAsSticker','image','readViewOnce','map','../index.js','from','Device\x20Logged\x20Out,\x20Please\x20Scan\x20Again\x20And\x20Run.','msg','contacts.update','child','restrict','432912HfYZPg','copyNForward','connectionClosed','serializeM','length','fromBuffer'];_0x312b=function(){return _0x1d7161;};return _0x312b();}