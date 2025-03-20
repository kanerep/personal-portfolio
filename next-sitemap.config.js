/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://kanerep.com',
  generateRobotsTxt: false, // We'll keep our custom robots.txt
  sitemapSize: 7000,
  exclude: ['/api/*'],
  generateIndexSitemap: false, // For smaller sites, single sitemap is enough
  outDir: 'public',
  transform: async (config, path) => {
    // Custom transform function to customize each URL entry
    // Return null to exclude path
    return {
      loc: path, // URL path
      changefreq: path === '/' ? 'daily' : 'weekly',
      priority: path === '/' ? 1.0 : 0.8,
      lastmod: new Date().toISOString(),
    }
  },
}
