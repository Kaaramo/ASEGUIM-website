import { chromium } from "playwright";
import { mkdirSync } from "fs";

const BASE = "http://localhost:3001";
const OUT = "/tmp/mobile-audit";
mkdirSync(OUT, { recursive: true });

const PAGES = [
  "/",
  "/qui-sommes-nous",
  "/bureau-executif",
  "/conseil-consultatif",
  "/nos-domaines",
  "/commission-scientifique",
  "/talents",
  "/contact",
  "/don",
  "/devenir-partenaire",
  "/adhesion",
];

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 375, height: 812 } });

for (const path of PAGES) {
  await page.goto(BASE + path, { waitUntil: "networkidle" });
  const name = path === "/" ? "home" : path.slice(1).replace(/\//g, "-");

  const overflow = await page.evaluate(() => {
    const docWidth = document.documentElement.scrollWidth;
    const viewWidth = window.innerWidth;
    const offenders = [];
    if (docWidth > viewWidth + 1) {
      document.querySelectorAll("body *").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.right > viewWidth + 1 || r.width > viewWidth + 1) {
          offenders.push({
            tag: el.tagName,
            cls: (el.className || "").toString().slice(0, 80),
            right: Math.round(r.right),
            width: Math.round(r.width),
          });
        }
      });
    }
    return { docWidth, viewWidth, hasOverflow: docWidth > viewWidth + 1, offenders: offenders.slice(0, 10) };
  });

  await page.screenshot({ path: `${OUT}/${name}.png`, fullPage: true });
  console.log(`\n=== ${path} ===`);
  console.log(JSON.stringify(overflow, null, 2));
}

await browser.close();
