# Pokemon api

We are going to build a REST api around this pokemon dataset. You can find the specifications below.

## Learning goals

### Using Express

- Setting up an express app
  - express()
  - app.use(express.json())
  - app.listen()
- Creating endpoints too respond to GET, POST, PUT/PATCH & DELETE
- Sending responses in JSON
- Setting appropriate status codes
- Working with the req & res objects of express

  - req.params
  - req.body
  - req.query
  - res.status()
  - res.json()

### Performing data transformations on Arrays of objects

- Array.map()
- Array.filter()
- Array.find()
- Array.sort()
- Array.concat() / Array.push()
- Array.includes()

## Api specification

The pokemon api should have the following routes (we are assuming that we're using port 4000)

### GET /pokemons

Example requests:

#### All pokemons

```bash
GET http://localhost:4000/pokemons
```

count: total amount in the dataset
pokemons: all 151 pokemons

```json
{
  "count": 151,
  "pokemons": [{}, {}, {}]
}
```

#### Pagination

We want our api users to specify an amount of pokemon by adding a query string to their request. You find the data from the query string in the `req.query` object in express.

req.query.limit -> how many pokemon are you requesting
req.query.offset -> where do you want to start counting

Adding limit and offset as a querystring is optional. If you leave them out, assume the api user wants all the data (like implemented above)

```bash
GET http://localhost:4000/pokemons?limit=20&offset=0
```

count: total amount in the dataset
pokemons: first 20 pokemons

```json
{
  "count": 151,
  "pokemons": [{"id": 1}, {"id": 2} ... {"id": 20}]
}
```

```bash
GET http://localhost:4000/pokemons?limit=20&offset=50
```

count: total amount in the dataset
pokemons: the next 20 pokemons, starting from counting index 50 (offset 50)

```json
{
  "count": 151,
  "pokemons": [{"id": 51}, {"id": 52} ... {"id": 70}]
}
```

#### Query by type

We want to make it possible for api users to request pokemon that have a specific type by adding a query string to their request. You find the data from the query string in the `req.query` object in express.

req.query.type -> which type of pokemon are we requesting

```bash
GET http://localhost:4000/pokemons?type=Grass
```

count: total amount of pokemon matching this query
pokemons: all pokemon matching this query

```json
{
  "count": 14, //
  "pokemons": [{"id": 1}, {"id": 2} ... {"id": 114}]
}
```

#### Specifying sorting

We want to make it possible for api users to specify how the data should be sorted by adding a query string to their request. You find the data from the query string in the `req.query` object in express.

```bash
GET http://localhost:4000/pokemons?sortBy=id
```

count: total amount in the dataset
pokemons: all 151 pokemons

```json
{
  "count": 151,
  "pokemons": [{ "id": 1 }, ...{ "id": 151 }]
}
```

```bash
GET http://localhost:4000/pokemons?sortBy=name
```

count: total amount in the dataset
pokemons: all 151 pokemons

```json
{
  "count": 151,
  "pokemons": [{ "name": "Abra" }, ...{ "name": "Zubat" }]
}
```

### GET /pokemons/:id

We want to let the api users find a pokemon with a particular id

```bash
GET http://localhost:4000/pokemons/25
```

```json
{
  "id": 25,
  "num": "025",
  "name": "Pikachu",
  "img": "http://www.serebii.net/pokemongo/pokemon/025.png",
  "type": ["Electric"],
  "height": "0.41 m",
  "weight": "6.0 kg",
  "candy": "Pikachu Candy",
  "candy_count": 50,
  "egg": "2 km",
  "spawn_chance": 0.21,
  "avg_spawns": 21,
  "spawn_time": "04:00",
  "multipliers": [2.34],
  "weaknesses": ["Ground"],
  "next_evolution": [
    {
      "num": "026",
      "name": "Raichu"
    }
  ]
}
```

### POST /pokemons

We want people to be able to post new pokemons. A new pokemon should at least have:

- a name
- a type array with at least one type

You should assign the pokemon a new id

Example requests

Valid:

```bash
POST http://localhost:4000/pokemons
```

body

```json
{
  "name": "Digimon",
  "img": "http://www.serebii.net/pokemongo/pokemon/222.png",
  "type": ["Electric"],
  "height": "0.99 m",
  "weight": "10 kg",
  "candy": "Digimon Candy",
  "candy_count": 99,
  "egg": "5 km",
  "spawn_chance": 0.89,
  "avg_spawns": 89,
  "spawn_time": "21:21",
  "multipliers": [1.99],
  "weaknesses": ["Rock", "Ground"]
}
```

Assuming this is the first pokemon posted, its id will be `152`

Invalid

```bash
POST http://localhost:4000/pokemons
```

body

```json
{
  "name": "Digimon",
  "img": "http://www.serebii.net/pokemongo/pokemon/222.png",
  "egg": "5 km",
  "spawn_chance": 0.89,
  "avg_spawns": 89,
  "spawn_time": "21:21",
  "multipliers": [1.99],
  "weaknesses": ["Rock", "Ground"]
}
```

Reason: It is missing a type array with at least one type.

### PATCH /pokemons/:id

We want people to be able to update pokemons. Only the field of img, spawn_chance and avg_spawns may be updated.

Valid:

```bash
PATCH http://localhost:4000/pokemons/25
```

body

```json
{
  "img": "http://www.serebii.net/pokemongo/pokemon/pikapika.png",
  "spawn_chance": 0.76,
  "avg_spawns": 76
}
```

Invalid

```bash
PATCH http://localhost:4000/pokemons/25
```

body

```json
{
  "name": "Ketchupmon"
}
```

Reason: You are not allowed to update a name of a pokemon, only its img, spawn_chance and avg_spawns.

### DELETE /pokemons/:id

We want our api users to be able to delete pokemon. But the pokemon has to exist in order to be deleted.

Valid:

```bash
DELETE http://localhost:4000/pokemons/25
```

Invalid:

```bash
DELETE http://localhost:4000/pokemons/9001
```

Reason: there is no pokemon with id 9001 in the current dataset (but if people post 9000 pokemon, at some point there might be!)
