import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { AgentMCP } from '../components/AgentMCP';
import '../index.css';

export const metadata = {
  title: 'Mercadinho do Silvio - Rio Largo | Tabuleiro do Pinto',
  description: 'O melhor preço de Rio Largo! Cesta Básica, Hortifruti e Bebidas no Mercadinho do Silvio.',
  metadataBase: new URL('https://mercadinhodosilvio.com.br'),
  icons: {
    icon: '/images/favicon.svg',
    apple: '/images/logo.png',
  },
  openGraph: {
    title: 'Mercadinho do Silvio - O Barateiro de Rio Largo',
    description: 'Venha conferir nossas ofertas! Hortifruti, Cesta Básica e Bebidas no Tabuleiro do Pinto.',
    url: 'https://mercadinhodosilvio.com.br',
    siteName: 'Mercadinho do Silvio',
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "GroceryStore",
    "name": "Mercadinho do Silvio",
    "image": "https://mercadinhodosilvio.com.br/images/logo.png",
    "description": "O melhor preço de Rio Largo! Cesta Básica, Hortifruti e Bebidas com excelente atendimento.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "R. Dr. Antônio Gomez de Barros, 498-544",
      "addressLocality": "Rio Largo",
      "addressRegion": "AL",
      "postalCode": "57100-000",
      "addressCountry": "BR"
    },
    "priceRange": "$",
    "telephone": "+5582999999999", // Placeholder, o usuário pode alterar
    "url": "https://mercadinhodosilvio.com.br"
  };

  return (
    <html lang="pt-BR">
      <body className="flex flex-col min-h-screen bg-gray-50">
        <AgentMCP />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1 w-full max-w-full overflow-x-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
