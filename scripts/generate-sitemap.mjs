import { writeFileSync, readFileSync } from 'fs';
import { globSync } from 'glob';
import matter from 'gray-matter';
import { createPostFromModule } from '../src/utils/postUtils.ts';

const BASE_URL = 'https://frederiksahlholdt.com';

function getPostsFromFiles() {
  const files = globSync('src/posts/*.md');
  return files.map(file => {
    const fileContent = readFileSync(file, 'utf-8');
    const { data } = matter(fileContent);
    return createPostFromModule(file, data);
  });
}

function generateSitemap() {
  const posts = getPostsFromFiles();
  const postUrls = posts.map(post => `
    <url>
      <loc>${BASE_URL}${post.path}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
    </url>`);

  const staticUrls = [
    '/',
    '/about',
    '/blog'
  ].map(url => `
    <url>
      <loc>${BASE_URL}${url}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.5</priority>
    </url>`);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticUrls.join('')}
  ${postUrls.join('')}
</urlset>`;

  writeFileSync('public/sitemap.xml', sitemap);
  console.log('Sitemap generated successfully!');
}

generateSitemap();
