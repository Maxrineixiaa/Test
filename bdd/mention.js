const a9_0x4d863c=a9_0x5d1e;(function(_0xc098ee,_0x623e50){const _0x32fe54=a9_0x5d1e,_0x3db80e=_0xc098ee();while(!![]){try{const _0x4c2aa1=-parseInt(_0x32fe54(0x118))/0x1+parseInt(_0x32fe54(0x102))/0x2*(-parseInt(_0x32fe54(0x103))/0x3)+-parseInt(_0x32fe54(0x106))/0x4+parseInt(_0x32fe54(0x116))/0x5*(-parseInt(_0x32fe54(0x111))/0x6)+parseInt(_0x32fe54(0x11a))/0x7*(parseInt(_0x32fe54(0x10f))/0x8)+-parseInt(_0x32fe54(0x110))/0x9+parseInt(_0x32fe54(0x108))/0xa;if(_0x4c2aa1===_0x623e50)break;else _0x3db80e['push'](_0x3db80e['shift']());}catch(_0x26e02e){_0x3db80e['push'](_0x3db80e['shift']());}}}(a9_0x3f2a,0x2d796),require(a9_0x4d863c(0x107))[a9_0x4d863c(0x109)]());const {Pool}=require('pg'),s=require(a9_0x4d863c(0x10e));var dbUrl=s[a9_0x4d863c(0x11e)]?s[a9_0x4d863c(0x11e)]:'postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9';const proConfig={'connectionString':dbUrl,'ssl':{'rejectUnauthorized':![]}},pool=new Pool(proConfig);async function creerTableMention(){const _0x2ae8b0=a9_0x4d863c,_0x3dd00f=await pool[_0x2ae8b0(0x10d)]();try{await _0x3dd00f[_0x2ae8b0(0x119)](_0x2ae8b0(0x113)),console[_0x2ae8b0(0x115)](_0x2ae8b0(0x11c));}catch(_0x36fcde){console[_0x2ae8b0(0x10c)](_0x2ae8b0(0x112),_0x36fcde);}finally{_0x3dd00f[_0x2ae8b0(0x10a)]();}};function a9_0x5d1e(_0x32d222,_0x45c295){const _0x3f2aee=a9_0x3f2a();return a9_0x5d1e=function(_0x5d1e10,_0x16d898){_0x5d1e10=_0x5d1e10-0x102;let _0x310350=_0x3f2aee[_0x5d1e10];return _0x310350;},a9_0x5d1e(_0x32d222,_0x45c295);}creerTableMention();async function addOrUpdateDataInMention(_0x276441,_0x1a5ba3,_0x5c9e12){const _0x433b85=a9_0x4d863c,_0x28e0e2=await pool[_0x433b85(0x10d)]();try{const _0x5d8f98='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20INSERT\x20INTO\x20mention\x20(id,\x20url,\x20type,\x20message)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20VALUES\x20(1,\x20$1,\x20$2,\x20$3)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20ON\x20CONFLICT\x20(id)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20DO\x20UPDATE\x20SET\x20\x20url\x20=\x20excluded.url,\x20type\x20=\x20excluded.type\x20,\x20message\x20=\x20excluded.message;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',_0x8f406c=[_0x276441,_0x1a5ba3,_0x5c9e12];await _0x28e0e2[_0x433b85(0x119)](_0x5d8f98,_0x8f406c),console[_0x433b85(0x115)](_0x433b85(0x10b));}catch(_0x190909){console[_0x433b85(0x10c)](_0x433b85(0x117),_0x190909);}finally{_0x28e0e2[_0x433b85(0x10a)]();}};async function modifierStatusId1(_0x56cef8){const _0x1ccc85=a9_0x4d863c,_0x305ec3=await pool['connect']();try{const _0x4ed434=_0x1ccc85(0x11d),_0x496105=[_0x56cef8];await _0x305ec3['query'](_0x4ed434,_0x496105),console[_0x1ccc85(0x115)]('Le\x20status\x20a\x20été\x20modifié\x20avec\x20succès\x20pour\x20l\x27ID\x201\x20dans\x20la\x20table\x20\x27mention\x27.');}catch(_0x21c961){console[_0x1ccc85(0x10c)](_0x1ccc85(0x105),_0x21c961);}finally{_0x305ec3['release']();}};async function recupererToutesLesValeurs(){const _0x2e6afc=a9_0x4d863c,_0x1e55f4=await pool[_0x2e6afc(0x10d)]();try{const _0x4ac4b4='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20SELECT\x20*\x20FROM\x20mention;\x0a\x20\x20\x20\x20\x20\x20\x20\x20',_0x2a5982=await _0x1e55f4[_0x2e6afc(0x119)](_0x4ac4b4);return console[_0x2e6afc(0x115)](_0x2e6afc(0x104),_0x2a5982[_0x2e6afc(0x11b)]),_0x2a5982['rows'];}catch(_0x5e9053){console[_0x2e6afc(0x10c)]('Erreur\x20lors\x20de\x20la\x20récupération\x20des\x20valeurs\x20de\x20la\x20table\x20\x27mention\x27:',_0x5e9053);}finally{_0x1e55f4[_0x2e6afc(0x10a)]();}};function a9_0x3f2a(){const _0x2a8e88=['218lqSOnt','6558XZFBkq','Voici\x20toutes\x20les\x20valeurs\x20de\x20la\x20table\x20\x27mention\x27:','Erreur\x20lors\x20de\x20la\x20modification\x20du\x20status\x20pour\x20l\x27ID\x201\x20dans\x20la\x20table\x20\x27mention\x27:','908640VClhDy','dotenv','11609040tBszAT','config','release','Données\x20ajoutées\x20ou\x20mises\x20à\x20jour\x20dans\x20la\x20table\x20\x27mention\x27\x20avec\x20succès.','error','connect','../set','16UzNScF','1584117kmvjse','678gwrfdX','Une\x20erreur\x20est\x20survenue\x20lors\x20de\x20la\x20création\x20de\x20la\x20table\x20\x27mention\x27:','\x0a\x20\x20\x20\x20\x20\x20\x20\x20CREATE\x20TABLE\x20IF\x20NOT\x20EXISTS\x20mention\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id\x20serial\x20PRIMARY\x20KEY,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20status\x20text\x20DEFAULT\x20\x27non\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20url\x20text,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20type\x20text,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20message\x20text\x0a\x20\x20\x20\x20\x20\x20\x20\x20);\x0a\x20\x20\x20\x20\x20\x20','exports','log','2630LMkysN','Erreur\x20lors\x20de\x20l\x27ajout\x20ou\x20de\x20la\x20mise\x20à\x20jour\x20des\x20données\x20dans\x20la\x20table\x20\x27mention\x27:','343859rhahNr','query','245357kcdlpG','rows','La\x20table\x20\x27mention\x27\x20a\x20été\x20créée\x20avec\x20succès.','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20UPDATE\x20mention\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20SET\x20status\x20=\x20$1\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20WHERE\x20id\x20=\x201;\x0a\x20\x20\x20\x20\x20\x20\x20\x20','DATABASE_URL'];a9_0x3f2a=function(){return _0x2a8e88;};return a9_0x3f2a();}module[a9_0x4d863c(0x114)]={'addOrUpdateDataInMention':addOrUpdateDataInMention,'recupererToutesLesValeurs':recupererToutesLesValeurs,'modifierStatusId1':modifierStatusId1};