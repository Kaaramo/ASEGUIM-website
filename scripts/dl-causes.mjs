import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
const B='https://framerusercontent.com/images/';
const A=[
 ['images/cause-1.png', B+'H9FJmaX5nOncDkuYSjYfP4u4y8.png'],
 ['images/cause-2.png', B+'9RRCOzPrFmnKgqilf3PJQPs.png'],
 ['images/cause-3.png', B+'rVYk2WCeAZoDwFOqpFtoA7cNDXM.png'],
 ['images/cause-4.png', B+'X0sRaYKg4u6UylO6gsNmxZNPI.png'],
 ['images/cause-5.png', B+'SIoRZY3QllMGLNoZSm0q4CcBBVc.png'],
 ['images/cause-6.png', B+'lu4cfbq0P9n434cxEfE3KGkiJ0.png'],
];
async function dl([rel,url]){const out=join(process.cwd(),'public',rel);await mkdir(dirname(out),{recursive:true});const r=await fetch(url);if(!r.ok)throw new Error(r.status);await writeFile(out,Buffer.from(await r.arrayBuffer()));return rel;}
for(const a of A){try{console.log('OK',await dl(a));}catch(e){console.log('ERR',a[0],e.message);}}
