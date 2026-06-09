# 🛒 Mercadinho do Silvio

> **Qualidade, variedade e preço baixo perto de você.**
> O melhor barateiro de Rio Largo!

Bem-vindo ao repositório oficial do site do **Mercadinho do Silvio**. Este projeto foi desenhado para ser uma vitrine digital de altíssima performance, garantindo que nossos clientes consigam consultar produtos, promoções e a nossa localização de forma ultrarrápida.

---

## 🚀 Tecnologias e Stack

Este projeto foi construído utilizando as melhores e mais modernas tecnologias do ecossistema front-end:

- **[Next.js 15 (App Router)](https://nextjs.org/)**: Framework React com renderização híbrida (SSR/SSG), o que proporciona velocidades incríveis e o **melhor SEO possível**.
- **[Tailwind CSS v4](https://tailwindcss.com/)**: Estilização altamente customizável e utilitária via PostCSS, garantindo um design limpo e responsivo.
- **[Fuse.js](https://fusejs.io/)**: Biblioteca para busca *fuzzy*, permitindo que o catálogo de produtos encontre resultados mesmo quando o usuário comete pequenos erros de digitação.
- **[@vercel/og](https://vercel.com/docs/functions/og-image-generation)**: Geração dinâmica de imagens **Open Graph**, criando banners perfeitamente dimensionados e atrativos para compartilhamento no WhatsApp, Facebook e Instagram.
- **Python (`rembg`)**: Utilizamos scripts de visão computacional em segundo plano para processar nosso acervo fotográfico, garantindo recortes perfeitos e fundos transparentes de forma automática.

## 🌟 Principais Funcionalidades

- **Busca Tolerante a Falhas:** Procurou por "feijão" mas digitou "feijaoo"? A gente encontra para você!
- **Compartilhamento Linkável:** Todas as buscas e categorias do catálogo geram URLs únicas (ex: `/produtos?q=arroz`). Se você enviar no WhatsApp, o seu amigo verá exatamente o que você filtrou.
- **SEO & Compartilhamento Social:** Metatags universais preparadas para exibição bonita de cards em aplicativos de mensagem, carregando nossa logo e slogan automaticamente.
- **Catálogo Dinâmico:** Dividido em setores e preparado para expansão!

---

## ⚙️ Como Rodar Localmente

Certifique-se de ter o **Node.js** (versão 18+) instalado na sua máquina.

1. **Instale as dependências:**
   ```bash
   npm install
   ```

2. **Rode o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

3. Abra o seu navegador e acesse [http://localhost:3000](http://localhost:3000).

---

## 📸 Processamento de Imagens

Se precisar rodar novamente o limpador de fundo (`rembg`) ou tentar baixar novas imagens de produtos adicionados no `products.js`:

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install rembg duckduckgo-search pillow
python scripts/process_images.py
```

---

<div align="center">
  <i>Desenvolvido com ❤️ por <a href="https://carlosandemberg.com.br" target="_blank">Carlos Andemberg</a></i>
</div>
