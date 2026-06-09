'use client';

import { useEffect } from 'react';

export function AgentMCP() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.navigator && window.navigator.modelContext) {
      try {
        window.navigator.modelContext.provideContext({
          name: "mercadinho_silvio_context",
          description: "Informações sobre o Mercadinho do Silvio para IA",
          tools: [
            {
              name: "get_categories",
              description: "Retorna a lista de categorias de produtos disponíveis no mercadinho",
              inputSchema: {
                type: "object",
                properties: {}
              },
              execute: async () => {
                return {
                  categories: [
                    "Mercearia & Alimentos",
                    "Limpeza",
                    "Higiene Pessoal",
                    "Bebidas",
                    "Frios & Laticínios",
                    "Hortifruti",
                    "Padaria",
                    "Congelados & Frios",
                    "Utilidades Domésticas",
                    "Pet Shop"
                  ]
                };
              }
            }
          ]
        });
      } catch (err) {
        console.warn("WebMCP registration failed:", err);
      }
    }
  }, []);

  return null;
}
