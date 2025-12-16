import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

export function Header() {
  return (
    <header className="bg-brand-blue shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="hover:opacity-90 transition-opacity">
          <img src={logo} alt="Mercadinho Silvio" className="h-12 md:h-14 w-auto" />
        </Link>
        
        {/* Navegação */}
        <nav className="flex items-center gap-4 md:gap-8">
          <Link to="/" className="text-white font-medium hover:text-brand-yellow transition-colors hidden md:block">
            Início
          </Link>
          <Link to="/produtos" className="text-white font-medium hover:text-brand-yellow transition-colors">
            Produtos
          </Link>
          <Link to="/localizacao" className="text-brand-yellow font-bold border-2 border-brand-yellow px-4 py-1.5 rounded-full hover:bg-brand-yellow hover:text-brand-blue transition-all text-sm md:text-base">
            Onde Fica
          </Link>
        </nav>
      </div>
    </header>
  );
}