
const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
]

function PokemonCard() {
  const pokemon = pokemonList[1]
  return (
    <article>
      <h1>{pokemon.name}</h1>
      {pokemon.imgSrc ? <img src={pokemon.imgSrc} alt={pokemon.name} /> : <p>???</p>}
    </article>
  );
}
// ...


export default PokemonCard;


