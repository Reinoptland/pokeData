const pokemons = require("./pokemons");

console.log(pokemons.length); // 151

// Challenges:

// 1. Transform pokemons into an array of pokemon names
// Input: pokemons [{}, {}, {}]
// Output: ["Bulbasaur", "Ivysaur", "Venusaur", "Charmander" ...]

// 2. Inside the pokemon array find the pokemon with name "Farfetch'd"
// Input: pokemons [{}, {}, {},]
// Output: {} (1 pokemon)

// 3. Sort the pokemon array by the names of the pokemon
// Input: pokemons [{}, {}, {},]
// Output: sorted pokemons [{name: Abra}, {}, ... {name: Zubat}]

// 4. Transform pokemons into an array of rare pokemon that have a spawn_chance of less than 0.01
// Input: pokemons [{}, {}, {}, {}, {}] (all)
// Output: pokemons that are rare [{}, {}, {}] (fewer)

// 5. Inside the pokemon array find the pokemon with id 25
// Input: pokemons [{}, {}, {}]
// Output: {} (1 pokemon)

// 6. Transform pokemons into an array of pokemon img urls
// Input: pokemons [{}, {}, {}]
// Output: ["http://www.serebii.net/pokemongo/pokemon/001.png", "http://www.serebii.net/pokemongo/pokemon/002.png", ...]

// 7. Transform pokemons into an array of pokemon that have at least one next_evolution
// Input: pokemons [{}, {}, {}, {}, {}] (all)
// Output: pokemons that have an evolution [{}, {}, {}] (fewer)

// 8. Transform pokemons into an array of pokemon types
// the output array should not contain any duplicates!
// Input: pokemons [{}, {}, {},]
// Output: ["Grass", "Poison", "Fire" ...] (no duplicates)
// Wrong output ["Grass", "Poison", "Grass", "Poison", "Fire" ...]

// 9. Find out which pokemon has the highest weight
// Input: pokemons [{}, {}, {}]
// Output: {} (1 pokemon)

// 10. Normalize the pokemon data by changing strings to numbers or null
// "height": "0.71 m", -> "height": 0.71
// "weight": "6.9 kg", -> "weight": 6.9
// "egg": "2 km", -> "egg": 2000,
// "egg": "Not in Eggs", -> "egg": null
// 
// Input: pokemons [
//      { "height": "0.71 m", "weight": "6.9 kg", "egg": "2 km" }, 
//      { "egg": "Not in Eggs" }, 
//      { } ... ]
// 
// Output: normalized pokemons [
//      { "height": 0.71, "weight": 6.9, "egg": 2000 }, 
//      { "egg": null }, 
//      {} ... ]

