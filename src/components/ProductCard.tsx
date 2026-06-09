import Image from 'next/image';

interface Product {
  name: string;
  image?: string;
  category: string;
  description?: string;
}

export function ProductCard({ data }: { data: Product }) {
  return (
    <article className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col overflow-hidden group">
      
      {/* Área da Imagem com Zoom suave */}
      {/* Adicionei 'bg-white' para garantir fundo limpo */}
      <div className="h-48 bg-white p-4 flex items-center justify-center overflow-hidden relative">
        {data.image ? (
            <Image 
              src={data.image} 
              alt={data.name} 
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="mix-blend-multiply object-contain p-4 group-hover:scale-110 transition-transform duration-500"
            />
        ) : (
            <span className="text-gray-500 text-sm font-medium">Sem imagem</span>
        )}
      </div>
      
      {/* Detalhes do Produto */}
      <div className="p-4 flex flex-col flex-1">
        {/* Tag de Categoria */}
        <span className="self-start text-[10px] uppercase font-bold tracking-wider text-brand-blue bg-blue-50 px-2 py-1 rounded mb-2">
            {data.category}
        </span>
        
        <h3 className="font-bold text-gray-800 text-lg leading-tight mb-2">
            {data.name}
        </h3>
        
        {data.description && (
            <p className="text-gray-600 text-sm line-clamp-2">
                {data.description}
            </p>
        )}
      </div>
    </article>
  );
}