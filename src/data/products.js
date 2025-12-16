// src/data/products.js

export const categories = [
    "Todos",
    "Hortifruti",
    "Mercearia & Alimentos",
    "Congelados & Frios",
    "Bebidas",
    "Higiene & Bebê",
    "Limpeza",
    "Utilidades & Bazar",
    "Pet Shop"
];

export const products = [
    // =========================================
    // 1. HORTIFRUTI
    // =========================================
    { id: 101, name: "Melancia Inteira", category: "Hortifruti", image: "/images/hortifruti/melancia.jpg" },
    { id: 102, name: "Melão Amarelo", category: "Hortifruti", image: "/images/hortifruti/melao.jpg" },
    { id: 103, name: "Mamão", category: "Hortifruti", image: "/images/hortifruti/mamao.jpg" },
    { id: 104, name: "Manga Tommy", category: "Hortifruti", image: "/images/hortifruti/manga-tommy.jpg" },
    { id: 105, name: "Banana Prata (Dúzia)", category: "Hortifruti", image: "/images/hortifruti/banana-prata.jpg" },
    { id: 106, name: "Maracujá", category: "Hortifruti", image: "/images/hortifruti/maracuja.jpg" },
    { id: 107, name: "Uva Verde", category: "Hortifruti", image: "/images/hortifruti/uva-verde.jpg" },
    { id: 108, name: "Coco Seco", category: "Hortifruti", image: "/images/hortifruti/coco-seco.jpg" },
    { id: 109, name: "Tomate", category: "Hortifruti", image: "/images/hortifruti/tomate.jpg" },
    { id: 110, name: "Cebola Branca", category: "Hortifruti", image: "/images/hortifruti/cebola-branca.jpg" },
    { id: 111, name: "Cebola Roxa", category: "Hortifruti", image: "/images/hortifruti/cebola-roxa.jpg" },
    { id: 112, name: "Batatinha", category: "Hortifruti", image: "/images/hortifruti/batatinha.jpg" },
    { id: 113, name: "Pimentão Verde", category: "Hortifruti", image: "/images/hortifruti/pimentao.jpg" },
    { id: 114, name: "Repolho Verde", category: "Hortifruti", image: "/images/hortifruti/repolho.jpg" },
    { id: 115, name: "Pepino", category: "Hortifruti", image: "/images/hortifruti/pepino.jpg" },
    { id: 116, name: "Gengibre", category: "Hortifruti", image: "/images/hortifruti/gengibre.jpg" },
    { id: 117, name: "Alho (Cabeça)", category: "Hortifruti", image: "/images/hortifruti/alho.jpg" },
    { id: 118, name: "Banana Comprida (Dúzia)", category: "Hortifruti", image: "/images/hortifruti/banana-comprida.jpg" },
    { id: 119, name: "Manga Espada", category: "Hortifruti", image: "/images/hortifruti/manga-espada.jpg" },
    
    // =========================================
    // 2. MERCEARIA (Arroz, Feijão, Macarrão...)
    // =========================================
    // ARROZ
    { id: 201, name: "Arroz Tio Vieira", category: "Mercearia & Alimentos", image: "/images/mercearia/arroz-tio-vieira.jpg" },
    { id: 202, name: "Arroz Pop", category: "Mercearia & Alimentos", image: "/images/mercearia/arroz-pop.jpg" },
    { id: 203, name: "Arroz Seu Coração", category: "Mercearia & Alimentos", image: "/images/mercearia/arroz-seu-coracao.jpg" },
    // FEIJÃO
    { id: 210, name: "Feijão Carioca Bom Sabor", category: "Mercearia & Alimentos", image: "/images/mercearia/feijao-bom-sabor.jpg" },
    { id: 211, name: "Feijão Preto Pedileto", category: "Mercearia & Alimentos", image: "/images/mercearia/feijao-pedileto.jpg" },
    { id: 212, name: "Feijão Corda Tio Vieira", category: "Mercearia & Alimentos", image: "/images/mercearia/feijao-corda-vieira.jpg" },
    // FLOCÃO/CUSCUZ
    { id: 220, name: "Flocão Coringa", category: "Mercearia & Alimentos", image: "/images/mercearia/flocao-coringa.jpg" },
    { id: 221, name: "Flocão Maratá", category: "Mercearia & Alimentos", image: "/images/mercearia/flocao-marata.jpg" },
    { id: 222, name: "Flocão Vitamilho", category: "Mercearia & Alimentos", image: "/images/mercearia/flocao-vitamilho.jpg" },
    // MACARRÃO
    { id: 230, name: "Macarrão Vitarella Speciale", category: "Mercearia & Alimentos", image: "/images/mercearia/macarrao-vitarella.jpg" },
    { id: 231, name: "Macarrão Brandini", category: "Mercearia & Alimentos", image: "/images/mercearia/macarrao-brandini.jpg" },
    { id: 232, name: "Macarrão Dona Benta", category: "Mercearia & Alimentos", image: "/images/mercearia/macarrao-dona-benta.jpg" },
    { id: 233, name: "Massa Lasanha Vitarella", category: "Mercearia & Alimentos", image: "/images/mercearia/lasanha-vitarella.jpg" },
    // CAFÉ
    { id: 240, name: "Café Pilão", category: "Mercearia & Alimentos", image: "/images/mercearia/cafe-pilao.jpg" },
    { id: 241, name: "Café Santa Clara", category: "Mercearia & Alimentos", image: "/images/mercearia/cafe-santa-clara.jpg" },
    { id: 242, name: "Café Maratá", category: "Mercearia & Alimentos", image: "/images/mercearia/cafe-marata.jpg" },
    // AÇÚCAR
    { id: 250, name: "Açúcar Coruripe", category: "Mercearia & Alimentos", image: "/images/mercearia/acucar-coruripe.jpg" },
    { id: 251, name: "Açúcar Pindorama", category: "Mercearia & Alimentos", image: "/images/mercearia/acucar-pindorama.jpg" },
    // BISCOITOS
    { id: 260, name: "Cracker Vitarella", category: "Mercearia & Alimentos", image: "/images/mercearia/cracker-vitarella.jpg" },
    { id: 261, name: "Cracker Marilan", category: "Mercearia & Alimentos", image: "/images/mercearia/cracker-marilan.jpg" },
    { id: 262, name: "Cracker Pilar", category: "Mercearia & Alimentos", image: "/images/mercearia/cracker-pilar.jpg" },
    { id: 263, name: "Recheado Treloso", category: "Mercearia & Alimentos", image: "/images/mercearia/recheado-treloso.jpg" },
    { id: 264, name: "Biscoito Passatempo", category: "Mercearia & Alimentos", image: "/images/mercearia/biscoito-passatempo.jpg" },
    { id: 265, name: "Wafer Minueto", category: "Mercearia & Alimentos", image: "/images/mercearia/wafer-minueto.jpg" },
    // OUTROS
    { id: 270, name: "Óleo de Soja Liza", category: "Mercearia & Alimentos", image: "/images/mercearia/oleo-liza.jpg" },
    { id: 271, name: "Óleo de Soja Soya", category: "Mercearia & Alimentos", image: "/images/mercearia/oleo-soya.jpg" },
    { id: 272, name: "Molho de Tomate Quero", category: "Mercearia & Alimentos", image: "/images/mercearia/molho-quero.jpg" },
    { id: 273, name: "Milho de Pipoca Yoki", category: "Mercearia & Alimentos", image: "/images/mercearia/pipoca-yoki.jpg" },
    { id: 274, name: "Sal Puro Sal", category: "Mercearia & Alimentos", image: "/images/mercearia/sal-purosal.jpg" },
    { id: 275, name: "Ovos (Cartela)", category: "Mercearia & Alimentos", image: "/images/mercearia/ovos-cartela.jpg" },

    // =========================================
    // 3. Congelados & FRIOS
    // =========================================
    { id: 301, name: "Linguiça Calabresa Perdigão", category: "Congelados & Frios", image: "/images/congelados/calabresa-perdigao.jpg" },
    { id: 302, name: "Margarina Qualy", category: "Congelados & Frios", image: "/images/congelados/margarina-qualy.jpg" },
    { id: 303, name: "Margarina Deline", category: "Congelados & Frios", image: "/images/congelados/margarina-deline.jpg" },
    { id: 304, name: "Margarina Delícia", category: "Congelados & Frios", image: "/images/congelados/margarina-delicia.jpg" },
    { id: 305, name: "Frango Congelado (Cortes)", category: "Congelados & Frios", image: "/images/congelados/cortes-frango.jpg" },
    { id: 306, name: "Pizza Sadia", category: "Congelados & Frios", image: "/images/congelados/pizza-sadia.jpg" },
    { id: 307, name: "Hambúrguer (Caixa)", category: "Congelados & Frios", image: "/images/congelados/hamburguer.jpg" },

    // =========================================
    // 4. BEBIDAS
    // =========================================
    // CERVEJAS
    { id: 401, name: "Cerveja Spaten", category: "Bebidas", image: "/images/bebidas/cerveja-spaten.jpg" },
    { id: 402, name: "Cerveja Heineken", category: "Bebidas", image: "/images/bebidas/cerveja-heineken.jpg" },
    { id: 403, name: "Cerveja Stella Artois", category: "Bebidas", image: "/images/bebidas/cerveja-stella.jpg" },
    { id: 404, name: "Cerveja Corona", category: "Bebidas", image: "/images/bebidas/cerveja-corona.jpg" },
    { id: 405, name: "Cerveja Skol", category: "Bebidas", image: "/images/bebidas/cerveja-skol.jpg" },
    { id: 406, name: "Cerveja Brahma", category: "Bebidas", image: "/images/bebidas/cerveja-brahma.jpg" },
    { id: 407, name: "Cerveja Antarctica Subzero", category: "Bebidas", image: "/images/bebidas/cerveja-subzero.jpg" },
    // REFRIGERANTES
    { id: 410, name: "Coca-Cola 2L", category: "Bebidas", image: "/images/bebidas/coca-cola.jpg" },
    { id: 411, name: "Guaraná Antarctica", category: "Bebidas", image: "/images/bebidas/guarana-antarctica.jpg" },
    { id: 412, name: "Pepsi", category: "Bebidas", image: "/images/bebidas/pepsi.jpg" },
    { id: 413, name: "Sukita Laranja", category: "Bebidas", image: "/images/bebidas/sukita.jpg" },
    { id: 414, name: "Refrigerante Goob", category: "Bebidas", image: "/images/bebidas/refri-goob.jpg" },
    // DESTILADOS
    { id: 420, name: "Vodka Slova", category: "Bebidas", image: "/images/bebidas/vodka-slova.jpg" },
    { id: 421, name: "Vodka Balalaika", category: "Bebidas", image: "/images/bebidas/vodka-balalaika.jpg" },
    { id: 422, name: "Rum Montilla", category: "Bebidas", image: "/images/bebidas/rum-montilla.jpg" },
    { id: 423, name: "Cachaça (51)", category: "Bebidas", image: "/images/bebidas/cachaca51.jpg" },
    { id: 424, name: "Cachaça (Pitú)", category: "Bebidas", image: "/images/bebidas/cachacapitu.jpg" },

    // =========================================
    // 5. HIGIENE & BEBÊ
    // =========================================
    { id: 501, name: "Fralda Pampers", category: "Higiene & Bebê", image: "/images/higiene/fralda-pampers.jpg" },
    { id: 502, name: "Fralda Turma da Mônica", category: "Higiene & Bebê", image: "/images/higiene/fralda-monica.jpg" },
    { id: 503, name: "Fralda Capricho", category: "Higiene & Bebê", image: "/images/higiene/fralda-capricho.jpg" },
    { id: 504, name: "Shampoo Seda", category: "Higiene & Bebê", image: "/images/higiene/shampoo-seda.jpg" },
    { id: 505, name: "Shampoo Elseve", category: "Higiene & Bebê", image: "/images/higiene/shampoo-elseve.jpg" },
    { id: 506, name: "Papel Higiênico Personal", category: "Higiene & Bebê", image: "/images/higiene/papel-personal.jpg" },
    { id: 507, name: "Papel Higiênico Familiar", category: "Higiene & Bebê", image: "/images/higiene/papel-familiar.jpg" },
    { id: 508, name: "Tintura Maxton", category: "Higiene & Bebê", image: "/images/higiene/tinta-maxton.jpg" },
    { id: 509, name: "Tintura Cor&Ton", category: "Higiene & Bebê", image: "/images/higiene/tinta-coreton.jpg" },

    // =========================================
    // 6. LIMPEZA
    // =========================================
    { id: 601, name: "Sabão em Pó Omo", category: "Limpeza", image: "/images/limpeza/sabao-omo.jpg" },
    { id: 602, name: "Sabão em Pó Tixan Ypê", category: "Limpeza", image: "/images/limpeza/sabao-tixan.jpg" },
    { id: 603, name: "Sabão em Pó Ala", category: "Limpeza", image: "/images/limpeza/sabao-ala.jpg" },
    { id: 604, name: "Sabão em Pó Brilhante", category: "Limpeza", image: "/images/limpeza/sabao-brilhante.jpg" },
    { id: 605, name: "Água Sanitária Brilux", category: "Limpeza", image: "/images/limpeza/aguasanitaria-brilux.jpg" },
    { id: 606, name: "Água Sanitária Dragão", category: "Limpeza", image: "/images/limpeza/aguasanitaria-dragao.jpg" },
    { id: 607, name: "Amaciante Comfort", category: "Limpeza", image: "/images/limpeza/amaciante-comfort.jpg" },
    { id: 608, name: "Amaciante Sonho", category: "Limpeza", image: "/images/limpeza/amaciante-sonho.jpg" },
    { id: 609, name: "Amaciante Fofo", category: "Limpeza", image: "/images/limpeza/amaciante-fofo.jpg" },
    { id: 610, name: "Inseticida SBP", category: "Limpeza", image: "/images/limpeza/inseticida-sbp.jpg" },
    { id: 611, name: "Detergente Minuano", category: "Limpeza", image: "/images/limpeza/detergente-minuano.jpg" },
    { id: 612, name: "Detergente Ypê", category: "Limpeza", image: "/images/limpeza/detergente-ype.jpg" },

    // =========================================
    // 7. UTILIDADES & BAZAR
    // =========================================
    { id: 701, name: "Chinelos Havaianas", category: "Utilidades & Bazar", image: "/images/utilidades/havaianas.jpg" },
    { id: 702, name: "Jogos de Panela", category: "Utilidades & Bazar", image: "/images/utilidades/panelas.jpg" },
    { id: 703, name: "Garrafas Térmicas", category: "Utilidades & Bazar", image: "/images/utilidades/garrafa-termica.jpg" },
    { id: 704, name: "Potes Marinex/Vidro", category: "Utilidades & Bazar", image: "/images/utilidades/potes-marinex.jpg" },
    { id: 705, name: "Vassouras", category: "Utilidades & Bazar", image: "/images/utilidades/vassouras.jpg" },

    // =========================================
    // 8. PET SHOP
    // =========================================
    { id: 801, name: "Ração Au!Au! (Pacotão)", category: "Pet Shop", image: "/images/petshop/racao-auau.jpg" },
    { id: 802, name: "Sachê Whiskas (Gato)", category: "Pet Shop", image: "/images/petshop/sache-whiskas.jpg" },
    { id: 803, name: "Sachê Pedigree (Cão)", category: "Pet Shop", image: "/images/petshop/sache-pedigree.jpg" },
    { id: 804, name: "Sachê Kitekat", category: "Pet Shop", image: "/images/petshop/sache-kitekat.jpg" }
];