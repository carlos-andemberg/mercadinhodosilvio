import { Link } from 'react-router-dom';
import { FaShoppingBasket, FaMapMarkedAlt } from 'react-icons/fa';

export function Home() {
  return (
    <div className="flex flex-col items-center">
      
      {/* Banner de Boas Vindas */}
      <div className="w-full bg-brand-blue text-white py-16 px-4 text-center">
        <h6 className="text-4xl md:text-5xl font-bold mb-4">
          Qualidade, variedade e preço baixo perto de você.
        </h6>
        <p className="text-2xl md:text-3xl text-blue-100 max-w-2xl mx-auto">
          Venha e aproveita.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link 
            to="/produtos" 
            className="bg-brand-yellow text-brand-blue font-bold py-3 px-8 rounded-full hover:bg-yellow-300 transition-colors flex items-center gap-2"
          >
            <FaShoppingBasket /> Ver Produtos
          </Link>
          <Link 
            to="/localizacao" 
            className="bg-white/10 text-white border-2 border-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-brand-blue transition-colors flex items-center gap-2"
          >
            <FaMapMarkedAlt /> Onde Fica
          </Link>
        </div>
      </div>

      {/* Destaques Rápidos (Atualizados) */}
      <div className="max-w-6xl mx-auto py-12 px-4 grid md:grid-cols-3 gap-8">
        
        {/* Destaque 1: Cesta Básica (Substituindo Açougue) */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
          <div className="text-4xl mb-4">🛒</div>
          <h3 className="text-xl font-bold text-brand-blue mb-2">Cesta Básica</h3>
          <p className="text-gray-600">Arroz, feijão, macarrão e tudo que não pode faltar na sua despensa.</p>
        </div>

        {/* Destaque 2: Hortifruti */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
          <div className="text-4xl mb-4">🍎</div>
          <h3 className="text-xl font-bold text-brand-blue mb-2">Hortifruti</h3>
          <p className="text-gray-600">Frutas e verduras selecionadas e repostas com qualidade.</p>
        </div>

        {/* Destaque 3: Bebidas */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
          <div className="text-4xl mb-4">❄️</div>
          <h3 className="text-xl font-bold text-brand-blue mb-2">Bebidas Geladas</h3>
          <p className="text-gray-600">Cervejas, refrigerantes e sucos na temperatura ideal para levar.</p>
        </div>

      </div>

    </div>
  );
}