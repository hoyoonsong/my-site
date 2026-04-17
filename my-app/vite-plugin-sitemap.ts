import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import type { Plugin } from "vite";
import { gallerySections } from "./src/data/gallery";

function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

/** Canonical site origin; prefer SITE_URL on Vercel for a custom domain. */
function siteBase(): string {
  const explicit = process.env.SITE_URL?.trim();
  if (explicit) return explicit.replace(/\/$/, "");
  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) {
    const host = vercel.replace(/^https?:\/\//, "").replace(/\/$/, "");
    return `https://${host}`;
  }
  return "http://127.0.0.1:5173";
}

export function sitemapPlugin(): Plugin {
  let outDir = "dist";

  return {
    name: "generate-sitemap-robots",
    apply: "build",
    configResolved(config) {
      outDir = config.build.outDir;
    },
    closeBundle() {
      const base = siteBase();
      const lastmod = new Date().toISOString().slice(0, 10);

      const chunks: string[] = [];

      const pushUrl = (loc: string, imageBlocks: string[] = []) => {
        let inner = `    <loc>${escapeXml(loc)}</loc>\n    <lastmod>${lastmod}</lastmod>`;
        if (imageBlocks.length > 0) {
          inner += `\n${imageBlocks.join("\n")}`;
        }
        chunks.push(`  <url>\n${inner}\n  </url>`);
      };

      pushUrl(`${base}/`);
      pushUrl(`${base}/projects`);
      pushUrl(`${base}/gallery`);

      for (const section of gallerySections) {
        const pageUrl = `${base}/gallery/${section.id}`;
        const imageBlocks = section.items.map((item) => {
          const imageLoc = `${base}${item.src}`;
          let b = `    <image:image>
      <image:loc>${escapeXml(imageLoc)}</image:loc>
      <image:title>${escapeXml(item.title)}</image:title>`;
          if (item.caption) {
            b += `\n      <image:caption>${escapeXml(item.caption)}</image:caption>`;
          }
          b += "\n    </image:image>";
          return b;
        });
        pushUrl(pageUrl, imageBlocks);
      }

      const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${chunks.join("\n")}
</urlset>
`;

      const robots = `User-agent: *
Allow: /

Sitemap: ${base}/sitemap.xml
`;

      const dir = resolve(process.cwd(), outDir);
      writeFileSync(resolve(dir, "sitemap.xml"), xml, "utf8");
      writeFileSync(resolve(dir, "robots.txt"), robots, "utf8");
    },
  };
}
