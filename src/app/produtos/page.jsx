"use client"
import { useState, useEffect, useMemo, Suspense } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { products, categories } from '../../data/products';
import { ProductCard } from '../../components/ProductCard';
import { FaSearch, FaFilter, FaTimes } from 'react-icons/fa';

const normalizeText = (text) => {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
};

function CatalogContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const urlSearch = searchParams.get('q') || '';
  const urlCategory = searchParams.get('categoria') || 'Todos';

  const [searchTerm, setSearchTerm] = useState(urlSearch);
  const [activeCategory, setActiveCategory] = useState(urlCategory);

  // Sync state with URL when user navigates back/forward
  useEffect(() => {
    setSearchTerm(urlSearch);
    setActiveCategory(urlCategory);
  }, [urlSearch, urlCategory]);

  const updateURL = (search, category) => {
    const params = new URLSearchParams(searchParams);
    if (search) {
      params.set('q', search);
    } else {
      params.delete('q');
    }
    if (category && category !== 'Todos') {
      params.set('categoria', category);
    } else {
      params.delete('categoria');
    }
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const handleSearchChange = (val) => {
    setSearchTerm(val);
    updateURL(val, activeCategory);
  };

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    updateURL(searchTerm, cat);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setActiveCategory('Todos');
    updateURL('', 'Todos');
  };

  const preparedProducts = useMemo(() => {
    const filtered = activeCategory === 'Todos'
      ? products
      : products.filter(p => p.category === activeCategory);

    return filtered.map(product => ({
      ...product,
      searchName: normalizeText(product.name)
    }));
  }, [activeCategory]);

  const finalProducts = useMemo(() => {
    if (!searchTerm.trim()) {
      return [...preparedProducts].sort((a, b) => a.name.localeCompare(b.name));
    }

    const normalizedSearch = normalizeText(searchTerm.trim());
    
    // Busca nativa mais robusta sem os falsos positivos do Fuse.js
    const results = preparedProducts.filter(p => {
      // Divide os termos pesquisados (ex: 'arroz branco' vira ['arroz', 'branco'])
      const searchTerms = normalizedSearch.split(' ');
      // Garante que TODOS os termos pesquisados estejam no nome do produto
      return searchTerms.every(term => p.searchName.includes(term));
    });

    // Ordena priorizando palavras que começam com o termo pesquisado
    return results.sort((a, b) => {
      const aStarts = a.searchName.startsWith(normalizedSearch) ? -1 : 1;
      const bStarts = b.searchName.startsWith(normalizedSearch) ? -1 : 1;
      if (aStarts !== bStarts) return aStarts - bStarts;
      return a.name.localeCompare(b.name);
    });
  }, [searchTerm, preparedProducts]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 min-h-[600px]">

      <header className="mb-8 text-center" aria-labelledby="catalog-heading">
        <h1 id="catalog-heading" className="text-3xl font-bold text-brand-blue mb-2">Nossos Produtos em Destaque</h1>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Estes são <strong>apenas alguns</strong> dos produtos disponíveis. Nosso mercadinho conta com <strong>centenas de itens de grandes marcas</strong> e novidades diárias. Venha nos visitar para conhecer toda a nossa variedade com o melhor preço da região!
        </p>
      </header>

      <div className="max-w-xl mx-auto mb-8 relative group">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <FaSearch className="text-gray-500 group-focus-within:text-brand-blue transition-colors" />
        </div>

        <input
          type="search"
          id="search-input"
          placeholder="Buscar... (ex: arroz, feijão)"
          className="w-full pl-12 pr-10 py-4 rounded-full border-2 border-gray-200 focus:outline-none focus:border-brand-blue focus:ring-4 focus:ring-blue-50 shadow-sm transition-all text-lg"
          value={searchTerm}
          onChange={(e) => handleSearchChange(e.target.value)}
          onFocus={(e) => e.target.select()}
          aria-label="Pesquisar produtos"
        />

        {searchTerm && (
          <button
            onClick={() => handleSearchChange('')}
            className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-500 hover:text-red-600 transition-colors"
            title="Limpar busca"
          >
            <FaTimes />
          </button>
        )}
      </div>

      {/* Wrapper com fade na borda direita como dica de scroll */}
      <div className="relative mb-10">
        {/* Gradiente fade — dica visual de que há mais opções */}
        <div
          className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none z-10 sm:hidden"
          aria-hidden="true"
        />
        <nav aria-label="Filtro de Categorias" className="w-full overflow-x-auto overflow-y-visible pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">
          <div className="flex sm:flex-wrap sm:justify-center gap-2 min-w-max sm:min-w-0 py-2 pr-8 sm:pr-0">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all transform duration-200 outline-none focus-visible:ring-4 focus-visible:ring-brand-yellow ${activeCategory === cat
                  ? 'bg-brand-blue text-white shadow-lg scale-105 ring-2 ring-blue-200'
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:border-brand-blue hover:text-brand-blue'
                }`}
              aria-pressed={activeCategory === cat}
            >
              {cat}
            </button>
          ))}
        </div>
      </nav>
      </div>

      <div className="mb-6 text-gray-600 text-sm font-medium flex justify-between items-center px-2">
        <p>
          {searchTerm ? (
            <>Resultados para <span className="text-brand-blue font-bold">"{searchTerm}"</span></>
          ) : (
            <>Exibindo todos os produtos</>
          )}
          : {finalProducts.length} itens
        </p>
      </div>

      {finalProducts.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 pb-20">
          {finalProducts.map(product => (
            <ProductCard key={product.id} data={product} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 bg-white rounded-2xl border-2 border-dashed border-gray-200">
          <div className="bg-gray-50 p-4 rounded-full mb-4">
            <FaFilter className="text-4xl text-gray-400" />
          </div>
          <h3 className="text-xl font-bold text-gray-700 mb-2">Nenhum produto encontrado</h3>
          <p className="text-gray-600 text-center max-w-xs mb-6">
            Não encontramos nada parecido com <strong>"{searchTerm}"</strong> na categoria <strong>"{activeCategory}"</strong>.
          </p>
          <button
            onClick={clearFilters}
            className="px-8 py-3 bg-brand-blue text-white rounded-full font-bold hover:bg-blue-800 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Limpar todos os filtros
          </button>
        </div>
      )}
    </div>
  );
}

export default function Catalog() {
  return (
    <Suspense fallback={<div className="flex justify-center p-10"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-blue"></div></div>}>
      <CatalogContent />
    </Suspense>
  );
}
