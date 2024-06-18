# Pokédex

## 🌐 Demonstração
Acesse a aplicação [aqui](https://marmotinha-dev.github.io/Pokedex/)

## 📚 Pokedex
Este projeto é uma aplicação web simples para buscar informações sobre Pokémons usando a API PokéAPI. O usuário pode pesquisar um Pokémon pelo seu nome ou número na Pokédex, bem como navegar entre os Pokémons usando botões de próximo e anterior.

## ✨ Funcionalidades

- 🔍 Pesquisar Pokémons pelo nome ou número na Pokédex.
- ⏭️ Navegar entre os Pokémons usando botões de próximo e anterior.
- 📊 Exibir o nome, número e imagem animada do Pokémon.

## 🛠️ Estrutura do Código

### 🔄 Variáveis Globais

- `searchPokemon`: Armazena o número do Pokémon a ser buscado inicialmente.

### 🔎 Seleção de Elementos

- `form`: Formulário de busca.
- `input`: Campo de entrada de texto para busca.
- `buttonPrev`: Botão para buscar o Pokémon anterior.
- `buttonNext`: Botão para buscar o próximo Pokémon.

### 🐾 Objeto `pokemon`

Este objeto representa um Pokémon e contém métodos para buscar e renderizar seus dados.

#### 📌 Características

- `name`: Elemento HTML que exibe o nome do Pokémon.
- `number`: Elemento HTML que exibe o número do Pokémon na Pokédex.
- `image`: Elemento HTML que exibe a imagem do Pokémon.

#### 🔧 Métodos

1. **`fetchPokemon(pokemon)`**:
    - Método assíncrono que busca dados do Pokémon na API.
    - Faz uma requisição à API do Pokémon e retorna os dados do Pokémon se a requisição for bem-sucedida.

2. **`render(pokemon)`**:
    - Método assíncrono que renderiza os dados do Pokémon na tela.
    - Exibe uma mensagem de "Loading..." enquanto os dados estão sendo buscados.
    - Exibe os dados do Pokémon se encontrados, caso contrário, exibe uma mensagem de "Not Found :c".

## 📑 Referências

- **API PokeAPI**: [https://pokeapi.co/](https://pokeapi.co/)
- **Código Base**: Este projeto foi aprimorado e adaptado com base no código disponível em [https://github.com/manualdodev/pokedex](https://github.com/manualdodev/pokedex), adicionando orientação a objetos para melhor modularização e reutilização do código.

## 📋 Como Usar

1. **Buscar Pokémon**:
    - Digite o nome ou número do Pokémon no campo de busca e pressione Enter.
    
2. **Navegar entre Pokémons**:
    - Use os botões "Next" e "Prev" para navegar entre os Pokémons.
