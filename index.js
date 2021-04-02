const pokemons = require("./pokemons");

console.log(pokemons.length); // 151

// Challenges:

// 1. Transform pokemons into an array of pokemon names
// Input: pokemons [{}, {}, {}]
// Output: ["Bulbasaur", "Ivysaur", "Venusaur", "Charmander" ...]

// 2. Transform pokemons into an array of pokemon img urls
// Input: pokemons [{}, {}, {}]
// Output: ["http://www.serebii.net/pokemongo/pokemon/001.png", "http://www.serebii.net/pokemongo/pokemon/002.png", ...]

// 3. Transform pokemons into an array of rara pokemon that have a spawn_chance of less than 0.01
// Input: pokemons [{}, {}, {}, {}, {}] (all)
// Output: pokemons that have an evolution [{}, {}, {}] (fewer)

// 4. Transform pokemons into an array of pokemon that have at least one next_evolution
// Input: pokemons [{}, {}, {}, {}, {}] (all)
// Output: pokemons that have an evolution [{}, {}, {}] (fewer)

// 5. Inside the pokemon array find the pokemon with id 25
// Input: pokemons [{}, {}, {},]
// Output: {} (1 pokemon)

// 6. Inside the pokemon array find the pokemon with name "Farfetch'd"
// Input: pokemons [{}, {}, {},]
// Output: {} (1 pokemon)

// 7. Transform pokemons into an array of pokemon types
// Input: pokemons [{}, {}, {},]
// Output: ["Grass", "Poison", "Fire" ...]

// 8. Normalize the pokemon data by changing:
// "height": "0.71 m", -> "height": 0.71
// "weight": "6.9 kg", -> "weight": 6.9
// "egg": "2 km", -> "egg": 2000,
// "egg": "Not in Eggs", -> "egg": null
