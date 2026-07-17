import { cp, mkdir, writeFile } from "node:fs/promises";

const source = "http://localhost:3000/";
const pageUrl = "https://ruxandramusic.github.io/website/";

const response = await fetch(source);
if (!response.ok) {
  throw new Error(`Could not render the local site (${response.status}).`);
}

let html = await response.text();
html = html
  .replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, "")
  .replace(/<link rel="modulepreload"[^>]*>/g, "")
  .replaceAll('href="/assets/', 'href="assets/')
  .replaceAll('src="/assets/', 'src="assets/')
  .replaceAll('url(/assets/', 'url(assets/')
  .replaceAll("https://localhost:3000/og.png", `${pageUrl}og.png`)
  .replaceAll("https://localhost:3000/favicon.svg", `${pageUrl}favicon.svg`);

await mkdir("docs", { recursive: true });
await cp("dist/client", "docs", { recursive: true });
await writeFile("docs/index.html", html);
await writeFile("docs/.nojekyll", "");

console.log("GitHub Pages files are ready in docs/.");
