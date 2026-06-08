// Downloads Careloop home-page assets from framerusercontent.com into public/.
// Batched (4 concurrent). Run: node scripts/download-assets.mjs
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const ROOT = process.cwd();
const B = 'https://framerusercontent.com/images/';

const ASSETS = [
  // images -> public/images
  ['images/logo.svg',            B + 'jKot6leo68NCRPDLMoapinQwX4.svg'],
  ['images/logo-wordmark.svg',   B + 'mPOzCqQo3j15OTTz3RP6sfTz4.svg'],
  ['images/hero-bg.png',         B + '9SPvs9stOPw6g7zJknw9BeHKtsQ.png'],
  ['images/icon-64.png',         B + 'HDDjT0VP5yPwD7dl4pFRR8ia1o.png'],
  ['images/donate-spotlight.png',B + '9uG8AexlMs8rnTBls22OqCUB6Kk.png'],
  ['images/about.png',           B + '8X6VmtjddorKLKcdERPKl7uuc.png'],
  ['images/program-1.png',       B + '83HZw3jBBe79y4wzZgUPNaTJBY.png'],
  ['images/program-2.png',       B + 'KMXHRbxJB2FFHCdRscW4gNa1INg.png'],
  ['images/program-3.png',       B + 'qVkTSSJ6DF0EegWYG68PHBeFTt0.png'],
  ['images/program-4.png',       B + 'ydJFTQHZNS6WWSvzCAZDntKKxY.png'],
  ['images/shape-programs.svg',  B + 'mtyzoWHn2LWIEwm9kKaP7uwLytU.svg'],
  ['images/cause-1.png',         B + 'H9FJmaX5nOncDkuYSjYfP4u4y8.png'],
  ['images/cause-2.png',         B + '9RRCOzPrFmnKgqilf3PJQPs.png'],
  ['images/cause-3.png',         B + 'rVYk2WCeAZoDwFOqpFtoA7cNDXM.png'],
  ['images/shape-small.svg',     B + 'H6kC0ErjPZHgdPqRxI6zFTjYr54.svg'],
  ['images/work-1.png',          B + 'eWnWay9OJehPLmJMhvtyqLMsa8.png'],
  ['images/work-2.png',          B + 'gq6TD902e4onhBZb74DJDQuEuU.png'],
  ['images/work-3.png',          B + 'ggaJ5S1WbmUK8TCe1oYyLSR5s.png'],
  ['images/guiding-star.png',    B + 'buslzMJ7yy2zB3gIqqvz6yIcpo.png'],
  ['images/blog-1.png',          B + 'QTCutjoW4WvOB2id37xixvOmjDo.png'],
  ['images/blog-2.png',          B + 'gT0wju6UaE8NJOWSnLRHAptZ7WM.png'],
  ['images/blog-3.png',          B + 'cpKD9NwGOAgOqZcLyBZLLEX99U.png'],
  // seo -> public/seo
  ['seo/favicon-1.png',          B + 'Bt648a4RQQJpUgTSg00wKqm9ppU.png'],
  ['seo/favicon-2.png',          B + 'yuSMs8NzlE5AGgHcsIkT9FSCyT4.png'],
  ['seo/og.png',                 B + 'geuLBUIMNa3BxRv5NlPvDdCWnQ.png'],
];

async function dl([rel, url]) {
  const out = join(ROOT, 'public', rel);
  await mkdir(dirname(out), { recursive: true });
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(out, buf);
  return `${rel} (${(buf.length/1024).toFixed(0)}kb)`;
}

async function run() {
  const batch = 4;
  const results = [];
  for (let i = 0; i < ASSETS.length; i += batch) {
    const slice = ASSETS.slice(i, i + batch);
    const r = await Promise.allSettled(slice.map(dl));
    r.forEach((x, j) => {
      if (x.status === 'fulfilled') results.push('OK  ' + x.value);
      else results.push('ERR ' + slice[j][0] + ' -> ' + x.reason.message);
    });
  }
  console.log(results.join('\n'));
  console.log(`\nDone: ${results.filter(r=>r.startsWith('OK')).length}/${ASSETS.length}`);
}
run();
