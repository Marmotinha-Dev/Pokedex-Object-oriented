// variaveis globais 
let searchPokemon = 1;
const form = document.querySelector('.form');
const input = document.querySelector('.input__search');

const buttonPrev = document.querySelector('.btn-prev');
const buttonNext = document.querySelector('.btn-Next');

const pokemon = {
    name: document.querySelector('.pokemon__name'),
    number: document.querySelector('.pokemon__number'),
    image: document.querySelector('.pokemon__image'),

    async fetchPokemon(pokemon) {

        const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

        if (APIResponse.status == 200) {
            const data = await APIResponse.json();
            return data;
        }


    },

    async render(pokemon) {
        this.name.innerHTML = "Loading...";
        this.number.innerHTML = "0";

        const data = await this.fetchPokemon(pokemon)

<<<<<<< HEAD
        if (data) {
            this.image.style.display = ""
            this.name.innerHTML = data.name;
            this.number.innerHTML = data.id;
            this.image.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
            input.value = '';
            searchPokemon = data.id;
        } else {
            this.image.style.display = 'none'
            this.mame.innerHTML = "Not Found :c";
            this.number.innerHTML = "";
        }
=======

}

const renderPokemon = async(pokemon) => {
    pokemonName.innerHTML = "Loading...";
    pokemonNumber.innerHTML = "";

    const data = await fetchPokemon(pokemon)

    if (data) {
        pokemonImage.style.display = ''
pokemonName.innerHTML = data.name;
        pokemonNumber.innerHTML = data.id;
        pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
        input.value = '';
        searchPokemon = data.id;
    } else {
        pokemonImage.style.display = 'none'
        pokemonName.innerHTML = "Not Found :c";
        pokemonNumber.innerHTML = "";
        buttonNext.addEventListener('click', () => {
            searchPokemon += 1;
            renderPokemon(searchPokemon);
            pokemonImage.style.display = "";
        });
>>>>>>> ad10193d79205da70f21964d5b13f6fadcd4c1d0
    }
}

pokemon.render(searchPokemon)

form.addEventListener('submit', (event) => {
    event.preventDefault();

    pokemon.render(input.value.toLowerCase());
});

buttonNext.addEventListener('click', () => {
    searchPokemon += 1;
    pokemon.render(searchPokemon);
});

buttonPrev.addEventListener('click', () => {
    if (searchPokemon > 1) {
        searchPokemon -= 1;
        pokemon.render(searchPokemon);
    }
});