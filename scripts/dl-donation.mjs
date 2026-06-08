import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
const B='https://framerusercontent.com/images/';
const A=[
 ['images/donate-impact.png', B+'udpYfREQKaYiNNAyMqqguYBqoE4.png'],
 ['images/donate-prog-1.png', B+'fUvEIihgzmpEscsWFSHuAQqJBYs.png'],
 ['images/donate-prog-2.png', B+'ydJFTQHZNS6WWSvzCAZDntKKxY.png'],
 ['images/donate-prog-3.png', B+'CNrlcmnHmDVqKBzc14Uap85uVs.png'],
];
async function dl([rel,url]){const out=join(process.cwd(),'public',rel);await mkdir(dirname(out),{recursive:true});const r=await fetch(url);if(!r.ok)throw new Error(r.status);await writeFile(out,Buffer.from(await r.arrayBuffer()));return rel;}
for(const a of A){try{console.log('OK',await dl(a));}catch(e){console.log('ERR',a[0],e.message);}}
