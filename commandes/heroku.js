const a29_0x34dfba=a29_0x284c;(function(_0x53a9de,_0x272a7d){const _0x48183c=a29_0x284c,_0x2cea30=_0x53a9de();while(!![]){try{const _0x4dab2b=parseInt(_0x48183c(0x211))/0x1+parseInt(_0x48183c(0x22f))/0x2*(-parseInt(_0x48183c(0x201))/0x3)+-parseInt(_0x48183c(0x217))/0x4+parseInt(_0x48183c(0x226))/0x5+parseInt(_0x48183c(0x22b))/0x6*(-parseInt(_0x48183c(0x202))/0x7)+parseInt(_0x48183c(0x1f5))/0x8+parseInt(_0x48183c(0x1fa))/0x9*(parseInt(_0x48183c(0x1ff))/0xa);if(_0x4dab2b===_0x272a7d)break;else _0x2cea30['push'](_0x2cea30['shift']());}catch(_0x204b52){_0x2cea30['push'](_0x2cea30['shift']());}}}(a29_0x4405,0xbe468));const {zokou}=require('../framework/zokou'),s=require('../set'),fs=require('fs'),dotenv=require(a29_0x34dfba(0x239));function getDescriptionFromEnv(_0x2d3acd){const _0x2720b8=a29_0x34dfba;filePath=_0x2720b8(0x219);const _0x41cadd=fs[_0x2720b8(0x222)](filePath,'utf-8'),_0x58eb81=JSON[_0x2720b8(0x215)](_0x41cadd),_0x3cad3=_0x58eb81[_0x2720b8(0x206)][_0x2d3acd];return _0x3cad3&&_0x3cad3[_0x2720b8(0x1fe)]?_0x3cad3[_0x2720b8(0x1fe)]:'The\x20environment\x20variable\x20description\x20was\x20not\x20found.';}zokou({'nomCom':a29_0x34dfba(0x23d),'categorie':'heroku'},async(_0x5c30b9,_0x55a557,_0x2e3eed)=>{const _0x4bbc58=a29_0x34dfba,{ms:_0x315edc,repondre:_0x5da5cc,superUser:_0x4e0352,arg:_0xd88450}=_0x2e3eed;if(!_0x4e0352){_0x5da5cc(_0x4bbc58(0x237));return;};if(s['HEROKU_APP_NAME']==null||s[_0x4bbc58(0x1f7)]==null){_0x5da5cc(_0x4bbc58(0x1fd));return;};if(!_0xd88450[0x0]||!_0xd88450[_0x4bbc58(0x20e)]('')[_0x4bbc58(0x203)]('=')){_0x5da5cc(_0x4bbc58(0x218));return;};const _0x372fdd=_0xd88450[_0x4bbc58(0x20e)]('\x20'),_0xe607a8=require(_0x4bbc58(0x228)),_0x16a9d7=new _0xe607a8({'token':s['HEROKU_APY_KEY']});let _0x55501b=_0x4bbc58(0x20c)+s[_0x4bbc58(0x209)];await _0x16a9d7['patch'](_0x55501b+_0x4bbc58(0x214),{'body':{[_0x372fdd[_0x4bbc58(0x203)]('=')[0x0]]:_0x372fdd['split']('=')[0x1]}}),await _0x5da5cc('Heroku\x20var\x20changes\x20,\x20rebootings....');}),zokou({'nomCom':a29_0x34dfba(0x1f6),'categorie':a29_0x34dfba(0x227)},async(_0x26dbb5,_0x3b4cd6,_0x58560c)=>{const _0x1e22fc=a29_0x34dfba,{ms:_0xb11038,repondre:_0x22a2f9,superUser:_0x3824e6,arg:_0x9a3a13}=_0x58560c;if(!_0x3824e6){_0x22a2f9(_0x1e22fc(0x23c));return;};if(s[_0x1e22fc(0x209)]==null||s[_0x1e22fc(0x1f7)]==null){_0x22a2f9(_0x1e22fc(0x1fd));return;};const _0x40e7b2=require(_0x1e22fc(0x228)),_0x5dbf18=new _0x40e7b2({'token':s['HEROKU_APY_KEY']});let _0x1d93e3=_0x1e22fc(0x20c)+s[_0x1e22fc(0x209)],_0x26fb6b=await _0x5dbf18[_0x1e22fc(0x21a)](_0x1d93e3+_0x1e22fc(0x214)),_0x4fc331=_0x1e22fc(0x22c);for(vr in _0x26fb6b){_0x4fc331+='🍁\x20*'+vr+'*\x20'+'=\x20'+_0x26fb6b[vr]+'\x0a';}_0x22a2f9(_0x4fc331);}),zokou({'nomCom':'getvar','categorie':a29_0x34dfba(0x227)},async(_0x57c87d,_0xf7b212,_0x2670d1)=>{const _0x43ce80=a29_0x34dfba,{ms:_0x186cd8,repondre:_0x197bf7,superUser:_0x56e751,arg:_0x284898}=_0x2670d1;if(!_0x56e751){_0x197bf7(_0x43ce80(0x1f3));return;};if(s[_0x43ce80(0x209)]==null||s[_0x43ce80(0x1f7)]==null){_0x197bf7(_0x43ce80(0x1fd));return;};if(!_0x284898[0x0]){_0x197bf7(_0x43ce80(0x224));return;};try{const _0xe6b708=require(_0x43ce80(0x228)),_0x2ea58a=new _0xe6b708({'token':s[_0x43ce80(0x1f7)]});let _0x238dac='/apps/'+s[_0x43ce80(0x209)],_0x3de161=await _0x2ea58a[_0x43ce80(0x21a)](_0x238dac+_0x43ce80(0x214));for(vr in _0x3de161){if(_0x284898[_0x43ce80(0x20e)]('\x20')===vr)return _0x197bf7(vr+'=\x20'+_0x3de161[vr]);}}catch(_0xca137c){_0x197bf7(_0x43ce80(0x1f9)+_0xca137c);}}),zokou({'nomCom':a29_0x34dfba(0x22d),'categorie':'Heroku'},async(_0x179e26,_0x27c490,_0x17b8a4)=>{const _0x4a9f26=a29_0x34dfba,{ms:_0x4b5b26,repondre:_0x144c51,superUser:_0x9dc23f,auteurMessage:_0x2ccc13}=_0x17b8a4;if(!_0x9dc23f){_0x144c51(_0x4a9f26(0x1f8));return;};let _0x4f9924=[{'nom':_0x4a9f26(0x232),'choix':['yes','no']},{'nom':_0x4a9f26(0x223),'choix':['yes','no']},{'nom':_0x4a9f26(0x23b),'choix':[_0x4a9f26(0x236),'no']},{'nom':_0x4a9f26(0x213),'choix':['yes','no']},{'nom':_0x4a9f26(0x216),'choix':[_0x4a9f26(0x236),'no']},{'nom':_0x4a9f26(0x212),'choix':[_0x4a9f26(0x236),'no']},{'nom':_0x4a9f26(0x221),'choix':['1','2','3','4']},{'nom':'PM_CHATBOT','choix':[_0x4a9f26(0x236),'no']}],_0x160940=_0x4a9f26(0x23f);for(v=0x0;v<_0x4f9924[_0x4a9f26(0x21d)];v++){_0x160940+=v+0x1+'-\x20*'+_0x4f9924[v][_0x4a9f26(0x20f)]+'*\x0a';}_0x160940+='\x0aChoose\x20a\x20variable\x20by\x20its\x20number';let _0xe0427d=await _0x27c490[_0x4a9f26(0x229)](_0x179e26,{'text':_0x160940},{'quoted':_0x4b5b26});console[_0x4a9f26(0x1fc)](_0xe0427d);let _0x21773f=await _0x27c490['awaitForMessage']({'chatJid':_0x179e26,'sender':_0x2ccc13,'timeout':0xea60,'filter':_0x39b20f=>_0x39b20f[_0x4a9f26(0x238)][_0x4a9f26(0x1f4)]&&_0x39b20f[_0x4a9f26(0x238)][_0x4a9f26(0x1f4)][_0x4a9f26(0x233)]['stanzaId']==_0xe0427d[_0x4a9f26(0x20b)]['id']&&(_0x39b20f[_0x4a9f26(0x238)][_0x4a9f26(0x1f4)][_0x4a9f26(0x200)]>0x0&&_0x39b20f[_0x4a9f26(0x238)][_0x4a9f26(0x1f4)][_0x4a9f26(0x200)]<=_0x4f9924['length'])}),_0x1c65d4=_0x21773f[_0x4a9f26(0x238)][_0x4a9f26(0x1f4)]['text']-0x1,{nom:_0x4b17fb,choix:_0x2df7d6}=_0x4f9924[_0x1c65d4],_0x2ae40f='\x20\x20\x20\x20╭──────༺♡༻──────╮\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Zokou-settings\x0a\x20\x20\x20\x20╰──────༺♡༻──────╯\x0a\x0a';_0x2ae40f+=_0x4a9f26(0x21f)+_0x4b17fb+'\x0a',_0x2ae40f+=_0x4a9f26(0x21e)+getDescriptionFromEnv(_0x4b17fb)+'\x0a\x0a',_0x2ae40f+='┌──────\x20⋆⋅☆⋅⋆\x20──────┐\x0a\x0a';for(i=0x0;i<_0x2df7d6['length'];i++){_0x2ae40f+=_0x4a9f26(0x21c)+(i+0x1)+_0x4a9f26(0x23e)+_0x2df7d6[i]+'\x0a';}_0x2ae40f+=_0x4a9f26(0x220);let _0x40e737=await _0x27c490[_0x4a9f26(0x229)](_0x179e26,{'text':_0x2ae40f},{'quoted':_0x21773f}),_0x2abaa9=await _0x27c490[_0x4a9f26(0x240)]({'chatJid':_0x179e26,'sender':_0x2ccc13,'timeout':0xea60,'filter':_0x515299=>_0x515299[_0x4a9f26(0x238)][_0x4a9f26(0x1f4)]&&_0x515299[_0x4a9f26(0x238)][_0x4a9f26(0x1f4)]['contextInfo'][_0x4a9f26(0x234)]==_0x40e737[_0x4a9f26(0x20b)]['id']&&(_0x515299[_0x4a9f26(0x238)]['extendedTextMessage'][_0x4a9f26(0x200)]>0x0&&_0x515299[_0x4a9f26(0x238)]['extendedTextMessage']['text']<=_0x2df7d6[_0x4a9f26(0x21d)])}),_0x12c8ed=_0x2abaa9[_0x4a9f26(0x238)][_0x4a9f26(0x1f4)][_0x4a9f26(0x200)]-0x1;if(s[_0x4a9f26(0x207)]=='no')try{const _0x545590=dotenv[_0x4a9f26(0x215)](fs[_0x4a9f26(0x222)]('set.env',{'encoding':_0x4a9f26(0x22a)}));_0x545590[_0x4b17fb]=_0x2df7d6[_0x12c8ed];const _0x4836f6=Object['keys'](_0x545590)[_0x4a9f26(0x20d)](_0x2548c1=>_0x2548c1+'='+_0x545590[_0x2548c1])[_0x4a9f26(0x20e)]('\x0a');fs[_0x4a9f26(0x22e)](_0x4a9f26(0x1f1),_0x4836f6),_0x144c51(_0x4a9f26(0x20a));const {exec:_0x53d359}=require(_0x4a9f26(0x1fb));_0x53d359('pm2\x20restart\x20all');}catch(_0x395c24){console['error'](_0x395c24),_0x144c51('Error');}else{if(s[_0x4a9f26(0x209)]==null||s[_0x4a9f26(0x1f7)]==null){_0x144c51(_0x4a9f26(0x1fd));return;};const _0x352274=require(_0x4a9f26(0x228)),_0x3bd960=new _0x352274({'token':s['HEROKU_APY_KEY']});let _0xff0c3=_0x4a9f26(0x20c)+s['HEROKU_APP_NAME'];await _0x3bd960[_0x4a9f26(0x23a)](_0xff0c3+'/config-vars',{'body':{[_0x4b17fb]:_0x2df7d6[_0x12c8ed]}}),await _0x144c51(_0x4a9f26(0x225));}});function a29_0x284c(_0x177e3b,_0x1a5c05){const _0x440550=a29_0x4405();return a29_0x284c=function(_0x284ca3,_0x5b50c6){_0x284ca3=_0x284ca3-0x1f1;let _0x38b8f5=_0x440550[_0x284ca3];return _0x38b8f5;},a29_0x284c(_0x177e3b,_0x1a5c05);}function changevars(_0x23133b,_0x8c009c){const _0x5b4770=a29_0x34dfba;zokou({'nomCom':_0x23133b,'categorie':_0x5b4770(0x1f2)},async(_0x550a1e,_0x3a717a,_0x27158c)=>{const _0x2f97bd=_0x5b4770,{arg:_0xa75ff8,superUser:_0x53d1a6,repondre:_0x28f04c}=_0x27158c;if(!_0x53d1a6){_0x28f04c(_0x2f97bd(0x1f8));return;};if(!_0xa75ff8[0x0]){_0x28f04c(getDescriptionFromEnv(_0x8c009c));return;};if(s['HEROKU']=='no')try{const _0x1ff7a3=dotenv['parse'](fs[_0x2f97bd(0x222)](_0x2f97bd(0x1f1),{'encoding':'utf-8'}));_0x1ff7a3[_0x8c009c]=_0xa75ff8[_0x2f97bd(0x20e)]('\x20');const _0x5ed83a=Object[_0x2f97bd(0x241)](_0x1ff7a3)[_0x2f97bd(0x20d)](_0xf44647=>_0xf44647+'='+_0x1ff7a3[_0xf44647])['join']('\x0a');fs['writeFileSync'](_0x2f97bd(0x1f1),_0x5ed83a),_0x28f04c('variable\x20refresh\x0a\x20restart\x20in\x20progress....');const {exec:_0x2844e1}=require(_0x2f97bd(0x1fb));_0x2844e1(_0x2f97bd(0x21b));}catch(_0x1a4df3){console[_0x2f97bd(0x1fc)](_0x1a4df3),_0x28f04c(_0x2f97bd(0x1f9));}else{if(s[_0x2f97bd(0x209)]==null||s[_0x2f97bd(0x1f7)]==null){_0x28f04c(_0x2f97bd(0x1fd));return;};const _0x2dfa26=require(_0x2f97bd(0x228)),_0x2762f8=new _0x2dfa26({'token':s[_0x2f97bd(0x1f7)]});let _0x2d43ce=_0x2f97bd(0x20c)+s[_0x2f97bd(0x209)];await _0x2762f8['patch'](_0x2d43ce+_0x2f97bd(0x214),{'body':{[_0x8c009c]:_0xa75ff8[_0x2f97bd(0x20e)]('\x20')}}),await _0x28f04c(_0x2f97bd(0x225));}});}function a29_0x4405(){const _0x2e3d97=['BOT_MENU_LINKS','WARN_COUNT','AUTO_READ_STATUS','contextInfo','stanzaId','botname','yes','only\x20Mods\x20can\x20use\x20this\x20commande','message','dotenv','patch','PM_PERMIT','only\x20mods\x20can\x20use\x20this\x20commande','setvar','*\x20=>\x20','\x20\x20\x20\x20╭──────༺♡༻──────╮\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Zokou-settings\x0a\x20\x20\x20\x20╰──────༺♡༻──────╯\x0a\x0a','awaitForMessage','keys','set.env','Heroku','Only\x20Mods\x20can\x20use\x20this\x20command','extendedTextMessage','11255936cuIhTA','getallvar','HEROKU_APY_KEY','command\x20reserved\x20for\x20bot\x20owner','Error','331713TNCkkP','child_process','log','Please\x20fill\x20in\x20the\x20HEROKU_APP_NAME\x20and\x20HEROKU_APY_KEY\x20environment\x20variables','description','130wSYSKv','text','555PhaLpt','35FeIWuX','split','warncount','linkmenu','env','HEROKU','setprefix','HEROKU_APP_NAME','variable\x20refresh\x0a\x20restart\x20in\x20progress....','key','/apps/','map','join','nom','BOT_NAME','44535jMJpTC','ANTI_VIEW_ONCE','PUBLIC_MODE','/config-vars','parse','STARTING_BOT_MESSAGE','4510204pBLLLh','Bad\x20format\x20;\x20Exemple\x20of\x20using\x20:\x0asetvar\x20OWNER_NAME=Fredora','./app.json','get','pm2\x20restart\x20all','*\x20*','length','*Description*\x20:','*Name*\x20:','\x0a└──────\x20⋆⋅☆⋅⋆\x20──────┘\x0a\x0aPlease\x20reply\x20on\x20message\x20with\x20the\x20number\x20corresponding\x20to\x20your\x20choice','PRESENCE','readFileSync','AUTO_DOWNLOAD_STATUS','insert\x20the\x20variable\x20name\x20in\x20capital\x20letter','variable\x20refresh,\x20restart\x20in\x20progress....','7069680AFVeWZ','heroku','heroku-client','sendMessage','utf-8','868302gviXfZ','*Heroku\x20Vars\x20list\x20*\x0a\x0a','settings','writeFileSync','7720TUpQjT'];a29_0x4405=function(){return _0x2e3d97;};return a29_0x4405();};changevars(a29_0x34dfba(0x208),'PREFIX'),changevars(a29_0x34dfba(0x205),a29_0x34dfba(0x230)),changevars(a29_0x34dfba(0x204),a29_0x34dfba(0x231)),changevars(a29_0x34dfba(0x235),a29_0x34dfba(0x210));