import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
const B='https://framerusercontent.com/images/';
const A=[
 ['images/about-hero.jpg', B+'juMW4nK6oG3fRkboFopMqgzZE6w.jpg'],
 ['images/team-1.png', B+'BmBSOxyaa8m0F2yLWLcOVMNfLA.png'],
 ['images/team-2.png', B+'8cqTlG4bkEakEzZ0huss2vopnI.png'],
 ['images/team-3.png', B+'86VqzSexdWWUJaM9SOuB4ToPjU.png'],
 ['images/team-up.png', B+'SrNQUQ6LoSJfs67NL5hAsvrXt0.png'],
 ['images/blob-green.svg', B+'0QYlTaZ6vR7gAXHUBZQCBg8kg.svg'],
];
async function dl([rel,url]){const out=join(process.cwd(),'public',rel);await mkdir(dirname(out),{recursive:true});const r=await fetch(url);if(!r.ok)throw new Error(r.status+' '+url);await writeFile(out,Buffer.from(await r.arrayBuffer()));return rel;}
for(const a of A){try{console.log('OK',await dl(a));}catch(e){console.log('ERR',a[0],e.message);}}
