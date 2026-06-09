import Link from 'next/link';

export function Header() {
  return (
    <header className="bg-brand-blue shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="hover:opacity-90 transition-opacity outline-none focus-visible:ring-4 focus-visible:ring-brand-yellow rounded" aria-label="Ir para a página inicial">
          <img src="/images/logo.svg" alt="Logotipo do Mercadinho Silvio" className="h-12 md:h-14 w-auto" />
        </Link>
        
        {/* Navegação */}
        <nav aria-label="Navegação principal" className="flex items-center gap-4 md:gap-8">
          <Link href="/" className="text-white font-medium hover:text-brand-yellow transition-colors hidden md:block outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow rounded px-1">
            Início
          </Link>
          <Link href="/produtos" className="text-white font-medium hover:text-brand-yellow transition-colors hidden md:block outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow rounded px-1">
            Produtos
          </Link>
          <Link href="/localizacao" className="text-brand-yellow font-bold border-2 border-brand-yellow px-4 py-1.5 rounded-full hover:bg-brand-yellow hover:text-brand-blue transition-all text-sm md:text-base outline-none focus-visible:ring-4 focus-visible:ring-white whitespace-nowrap">
            Onde Fica
          </Link>
        </nav>
      </div>
    </header>
  );
}