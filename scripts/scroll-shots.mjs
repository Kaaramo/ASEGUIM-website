import { chromium } from "playwright";
import { mkdirSync } from "fs";

const BASE = "http://localhost:3001";
const OUT = "/tmp/mobile-audit/scroll";
mkdirSync(OUT, { recursive: true });

const urlPath = process.argv[2] || "/";
const name = urlPath === "/" ? "home" : urlPath.slice(1).replace(/\//g, "-");

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 375, height: 812 } });
await page.goto(BASE + urlPath, { waitUntil: "networkidle" });

const total = await page.evaluate(() => document.documentElement.scrollHeight);
const step = 812;
let i = 0;
for (let y = 0; y < total; y += step) {
  await page.evaluate((y) => window.scrollTo(0, y), y);
  await page.waitForTimeout(250);
  i++;
  await page.screenshot({ path: `${OUT}/${name}-${String(i).padStart(2, "0")}.png` });
}
await browser.close();
console.log(`captured ${i} viewport shots for ${urlPath}, total height ${total}`);
