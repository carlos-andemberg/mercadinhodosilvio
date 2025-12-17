import { useState, useEffect, useMemo } from 'react';
import { products, categories } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { FaSearch, FaFilter, FaTimes } from 'react-icons/fa';
import Fuse from 'fuse.js';

// Função para remover acentos
const normalizeText = (text) => {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
};

export function Catalog() {
  const [activeCategory, setActiveCategory] = useState(() => {
    try { return localStorage.getItem('mercadinho_category') || 'Todos'; }
    catch (e) { return 'Todos'; }
  });

  const [searchTerm, setSearchTerm] = useState(() => {
    try { return localStorage.getItem('mercadinho_search') || ''; }
    catch (e) { return ''; }
  });

  useEffect(() => {
    localStorage.setItem('mercadinho_category', activeCategory);
  }, [activeCategory]);

  useEffect(() => {
    localStorage.setItem('mercadinho_search', searchTerm);
  }, [searchTerm]);

  const preparedProducts = useMemo(() => {
    const filtered = activeCategory === 'Todos'
      ? products
      : products.filter(p => p.category === activeCategory);

    return filtered.map(product => ({
      ...product,
      searchName: normalizeText(product.name)
    }));
  }, [activeCategory]);

  const fuse = useMemo(() => {
    return new Fuse(preparedProducts, {
      keys: [
        { name: 'name', weight: 0.6 },
        { name: 'searchName', weight: 0.4 },
        { name: 'category', weight: 0.2 }
      ],
      threshold: 0.3,
      ignoreLocation: true,
      minMatchCharLength: 2
    });
  }, [preparedProducts]);

  const finalProducts = useMemo(() => {
    if (!searchTerm.trim()) {
      return [...preparedProducts].sort((a, b) => a.name.localeCompare(b.name));
    }

    const cleanSearch = normalizeText(searchTerm);
    const results = fuse.search(searchTerm);
    return results.map(result => result.item);
  }, [searchTerm, preparedProducts, fuse]);


  const clearFilters = () => {
    setActiveCategory('Todos');
    setSearchTerm('');
    localStorage.removeItem('mercadinho_category');
    localStorage.removeItem('mercadinho_search');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 min-h-[600px]">

      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-brand-blue mb-2">Nossos Produtos</h2>
        <p className="text-gray-600">Confira o que temos disponível na loja hoje.</p>
      </div>

      <div className="max-w-xl mx-auto mb-8 relative group">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <FaSearch className="text-gray-400 group-focus-within:text-brand-blue transition-colors" />
        </div>

        {/* INPUT COM UX MELHORADA AQUI 👇 */}
        <input
          type="text"
          placeholder="Buscar... (ex: arroz, feijão)"
          className="w-full pl-12 pr-10 py-4 rounded-full border-2 border-gray-200 focus:outline-none focus:border-brand-blue focus:ring-4 focus:ring-blue-50 shadow-sm transition-all text-lg"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={(e) => e.target.select()} // <--- SELECIONA TUDO AO CLICAR
        />

        {searchTerm && (
          <button
            onClick={() => setSearchTerm('')}
            className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-red-500 transition-colors"
            title="Limpar busca"
          >
            <FaTimes />
          </button>
        )}
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm font-bold transition-all transform duration-200 ${activeCategory === cat
                ? 'bg-brand-blue text-white shadow-lg scale-105 ring-2 ring-blue-200'
                : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 hover:border-brand-blue hover:text-brand-blue'
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mb-6 text-gray-500 text-sm font-medium flex justify-between items-center px-2">
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
            <FaFilter className="text-4xl text-gray-300" />
          </div>
          <h3 className="text-xl font-bold text-gray-700 mb-2">Nenhum produto encontrado</h3>
          <p className="text-gray-500 text-center max-w-xs mb-6">
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