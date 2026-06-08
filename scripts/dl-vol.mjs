import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
const B='https://framerusercontent.com/images/';
const A=[
 ['images/volunteer-hero.png', B+'u48uR84SDA82VrZVAeaIrxrIn4o.png'],
 ['images/vol-1.png', B+'jKof6XVFZm8ZJoF2H5h1useiua8.png'],
 ['images/vol-2.png', B+'rNfckYwcQNmGQIxFS8roH80I4Cw.png'],
 ['images/vol-3.png', B+'8SbdNVNTieOP0PxxyJHmaQUjXas.png'],
];
async function dl([rel,url]){const out=join(process.cwd(),'public',rel);await mkdir(dirname(out),{recursive:true});const r=await fetch(url);if(!r.ok)throw new Error(r.status);await writeFile(out,Buffer.from(await r.arrayBuffer()));return rel;}
for(const a of A){try{console.log('OK',await dl(a));}catch(e){console.log('ERR',a[0],e.message);}}
