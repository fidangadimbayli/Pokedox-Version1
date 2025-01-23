fetchButton = document.querySelector(".fetch-button");

fetchButton.addEventListener("click", async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
    const data = await response.json();

    // Fetch details for each Pokemon
    const pokemonPromises = data.results.map(async pokemon => {
        const pokemonResponse = await fetch(pokemon.url);
        return pokemonResponse.json();
    });

    const pokemonDetails = await Promise.all(pokemonPromises);

    // Create and add Pokemon cards to the body
    pokemonDetails.forEach(pokemon => {
        const pokemonCard = document.createElement('div');
        pokemonCard.classList.add('pokemon-card');

        // Get Pokemon abilities
        const abilities = pokemon.abilities
            .map(ability => ability.ability.name)
            .join(', ');

        pokemonCard.innerHTML = `
            <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
            <h3>${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h3>
            <p>Abilities: ${abilities}</p>
        `;

        document.body.appendChild(pokemonCard);
    });
});