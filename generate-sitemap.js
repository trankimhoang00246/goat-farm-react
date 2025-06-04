const fs = require("fs");

const data = require("./public/data.json");
const baseUrl = "https://thitdengon.netlify.app";

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n`;
sitemap += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

sitemap += `
  <url>
    <loc>${baseUrl}</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>\n`;

data.forEach((item) => {
  sitemap += `
  <url>
    <loc>${baseUrl}/san-pham/${item.id}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>\n`;
});

sitemap += `</urlset>`;

fs.writeFileSync("./public/sitemap.xml", sitemap);
console.log("✅ sitemap.xml created");
