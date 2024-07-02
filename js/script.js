// by: marmotinha<dev/>
// date of update: 17/06/2024

/*----------------------[Váriaveis Globais]-------------------*/
// Define o número inicial do Pokémon a ser buscado
let searchPokemon = 1;

// Cache de Pokémon
const pokemonCache = {};

// Seleciona elementos de input
const form = document.querySelector('.form'); // Formulário de busca
const input = document.querySelector('.input__search'); // Campo de entrada de texto
const buttonPrev = document.querySelector('.btn-prev'); // Botão de Pokémon anterior
const buttonNext = document.querySelector('.btn-Next'); // Botão de próximo Pokémon

/*----------------------[Objeto Pokemon]----------------------*/
// Objeto que representa um Pokémon
const pokemon = {
    /*-------------[Caracteristicas]-------------*/
    // Seleciona os elementos, para exibir características do Pokémon
    name: document.querySelector('.pokemon__name'), // Nome do Pokémon
    number: document.querySelector('.pokemon__number'), // Número do Pokémon na Pokédex
    image: document.querySelector('.pokemon__image'), // Imagem do Pokémon

    /*-----------[Função de requisição]-----------*/
    // Função assíncrona para buscar dados do Pokémon na API
    async fetchPokemon(pokemon) {
        // Verifica se o Pokémon já está no cache
        if (pokemonCache[pokemon]) {
            return pokemonCache[pokemon];
        }

        // Faz uma requisição à API do Pokémon
        const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        // Verifica se a requisição foi bem-sucedida
        if (APIResponse.status == 200) {
            // Armazena os dados da resposta da API na variável data
            const data = await APIResponse.json();
            // Armazena os dados no cache
            pokemonCache[pokemon] = data;
            return data; // Retorna os dados do Pokémon
        }
    },

    /*-----------[Função de Renderização]-----------*/
    // Função assíncrona para renderizar os dados do Pokémon na tela
    async render(pokemon) {
        // Mostra mensagem de carregando enquanto busca os dados
        this.name.innerHTML = "Loading...";
        this.number.innerHTML = "0";

        // Busca os dados do Pokémon
        const data = await this.fetchPokemon(pokemon);
        // Verifica se os dados foram encontrados
        if (data != undefined) {
            // Exibe a imagem e informações do Pokémon
            this.image.style.display = ""; // Evita o bug da imagem
            this.name.innerHTML = data.name;
            this.number.innerHTML = data.id;
            this.image.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
            // Limpa o campo de entrada de texto
            input.value = '';
            // Atualiza o número do Pokémon atual
            searchPokemon = data.id;

            // Pré-carrega o Pokémon anterior e seguinte
            this.preloadPokemon(searchPokemon - 1);
            this.preloadPokemon(searchPokemon + 1);
        } else {
            // Caso não encontre, exibe mensagem de não encontrado
            this.image.style.display = 'none';
            this.name.innerHTML = "Not Found :c";
            this.number.innerHTML = "";
        }
    },

    // Função para pré-carregar os dados do Pokémon
    async preloadPokemon(pokemon) {
        // Verifica se o Pokémon está no cache, caso contrário, faz a requisição
        if (!pokemonCache[pokemon] && pokemon > 0) {
            await this.fetchPokemon(pokemon);
        }
    }
}

/*----------------------[next/prev/text Area]----------------------*/
// Adiciona evento de submissão ao formulário
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita o comportamento padrão do formulário
    // Renderiza o Pokémon baseado no texto inserido pelo usuário
    pokemon.render(input.value.toLowerCase());
});

// Adiciona evento ao botão de próximo Pokémon
buttonNext.addEventListener('click', () => {
    searchPokemon += 1; // Incrementa o número do Pokémon
    pokemon.render(searchPokemon); // Renderiza o próximo Pokémon
});

// Adiciona evento ao botão de Pokémon anterior
buttonPrev.addEventListener('click', () => {
    if (searchPokemon > 1) { // Verifica se o número do Pokémon é maior que 1
        searchPokemon -= 1; // Decrementa o número do Pokémon
        pokemon.render(searchPokemon); // Renderiza o Pokémon anterior
    }
});

// Renderiza o Pokémon inicial
pokemon.render(searchPokemon);