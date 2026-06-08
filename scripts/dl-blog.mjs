import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
const B='https://framerusercontent.com/images/';
const A=[
 ['images/blog-4.png', B+'PsMZLz6F54atrBA6LuVg0l6Bc.png'],
 ['images/blog-5.png', B+'QqFlWAKEPCDFZVOCxoJjrqMmzf4.png'],
 ['images/blog-6.png', B+'bZSNuPDkiaIRlixl2piWp6n1vdc.png'],
];
async function dl([rel,url]){const out=join(process.cwd(),'public',rel);await mkdir(dirname(out),{recursive:true});const r=await fetch(url);if(!r.ok)throw new Error(r.status);await writeFile(out,Buffer.from(await r.arrayBuffer()));return rel;}
for(const a of A){try{console.log('OK',await dl(a));}catch(e){console.log('ERR',a[0],e.message);}}
