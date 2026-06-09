export default function sitemap() {
  return [
    {
      url: 'https://mercadinhodosilvio.com.br',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://mercadinhodosilvio.com.br/produtos',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: 'https://mercadinhodosilvio.com.br/localizacao',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}
