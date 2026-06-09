import { NextResponse } from 'next/server';

export function middleware(request) {
  const acceptHeader = request.headers.get('accept') || '';
  
  // If the requester explicitly asks for markdown (like an AI agent)
  if (acceptHeader.includes('text/markdown')) {
    const markdownContent = `
# Mercadinho do Silvio

Bem-vindo ao Mercadinho do Silvio! O melhor mercadinho de Rio Largo - AL.
Temos um catálogo completo de produtos com preços acessíveis e excelente atendimento.

## Localização
Trv. José Monteiro de Melo, 156
Tabuleiro do Pinto, Rio Largo - AL

## Categorias de Produtos
- Mercearia & Alimentos
- Limpeza
- Higiene Pessoal
- Bebidas
- Frios & Laticínios
- Hortifruti
- Padaria
- Congelados & Frios
- Utilidades Domésticas
- Pet Shop

Visite nosso site pelo navegador para ver o catálogo completo com imagens, ou venha nos visitar pessoalmente!
`;

    return new NextResponse(markdownContent.trim(), {
      status: 200,
      headers: {
        'Content-Type': 'text/markdown; charset=utf-8',
        'x-markdown-tokens': '100'
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/',
};
