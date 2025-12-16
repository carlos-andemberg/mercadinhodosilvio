#!/bin/bash

# Define a base onde as imagens ficarão
BASE_DIR="./public/images"

echo "🚧 Iniciando a criação da estrutura do Mercadinho Silvio..."

# 1. Criar as pastas
echo "📂 Criando diretórios..."
mkdir -p "$BASE_DIR/hortifruti"
mkdir -p "$BASE_DIR/mercearia"
mkdir -p "$BASE_DIR/acougue"
mkdir -p "$BASE_DIR/bebidas"
mkdir -p "$BASE_DIR/higiene"
mkdir -p "$BASE_DIR/limpeza"
mkdir -p "$BASE_DIR/utilidades"
mkdir -p "$BASE_DIR/petshop"

# Função para baixar imagem placeholder
# Usa o serviço placehold.co para gerar uma imagem com o nome do arquivo
download_dummy() {
    CATEGORY=$1
    FILENAME=$2
    # Substitui hifens por espaços para o texto da imagem ficar bonito
    TEXTO_IMG=$(echo "$FILENAME" | sed 's/-/ /g')
    
    echo "⬇️  Baixando: $CATEGORY/$FILENAME.jpg"
    
    # Baixa a imagem (se tiver curl)
    if command -v curl &> /dev/null; then
        curl -s -L "https://placehold.co/400x400/e2e8f0/2b3b8c.jpg?text=$TEXTO_IMG" -o "$BASE_DIR/$CATEGORY/$FILENAME.jpg"
    else
        # Fallback se não tiver internet/curl: cria arquivo vazio para não dar erro 404 crítico
        touch "$BASE_DIR/$CATEGORY/$FILENAME.jpg"
    fi
}

# ==========================================
# 2. LISTA DE ARQUIVOS (Exatamente igual ao products.js)
# ==========================================

# Hortifruti
for item in melancia melao mamao manga banana-prata maracuja uva-verde coco-seco tomate cebola-branca cebola-roxa batatinha pimentao repolho pepino gengibre alho ovos-cartela; do
    download_dummy "hortifruti" "$item"
done

# Mercearia
for item in arroz-tio-vieira arroz-pop arroz-seu-coracao feijao-bom-sabor feijao-pedileto feijao-corda-vieira flocao-coringa flocao-marata flocao-vitamilho macarrao-vitarella macarrao-brandini macarrao-dona-benta lasanha-vitarella cafe-pilao cafe-santa-clara cafe-marata acucar-coruripe acucar-pindorama cracker-vitarella cracker-marilan cracker-pilar recheado-treloso biscoito-passatempo wafer-minueto oleo-liza oleo-soya molho-quero pipoca-yoki sal-purosal maionese; do
    download_dummy "mercearia" "$item"
done

# Açougue & Frios
for item in calabresa-perdigao margarina-qualy margarina-deline margarina-delicia cortes-frango pizza-sadia hamburguer; do
    download_dummy "acougue" "$item"
done

# Bebidas
for item in cerveja-spaten cerveja-heineken cerveja-stella cerveja-corona cerveja-skol cerveja-brahma cerveja-subzero coca-cola guarana-antarctica pepsi sukita refri-goob vodka-slova vodka-balalaika rum-montilla cachaca; do
    download_dummy "bebidas" "$item"
done

# Higiene
for item in fralda-pampers fralda-monica fralda-capricho shampoo-seda shampoo-elseve papel-personal papel-familiar tinta-maxton tinta-coreton; do
    download_dummy "higiene" "$item"
done

# Limpeza
for item in sabao-omo sabao-tixan sabao-ala sabao-brilhante aguasanitaria-brilux aguasanitaria-dragao amaciante-comfort amaciante-sonho amaciante-fofo inseticida-sbp detergente-minuano detergente-ype; do
    download_dummy "limpeza" "$item"
done

# Utilidades
for item in havaianas panelas garrafa-termica potes-marinex vassouras; do
    download_dummy "utilidades" "$item"
done

# Pet Shop
for item in racao-auau sache-whiskas sache-pedigree sache-kitekat; do
    download_dummy "petshop" "$item"
done

echo "✅ Tudo pronto! Agora seu site vai rodar com imagens provisórias."
echo "👉 Dica: Substitua as imagens em '$BASE_DIR' aos poucos."