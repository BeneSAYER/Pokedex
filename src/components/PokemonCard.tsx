

function PokemonCard(pokemon) {

  return (
    <article>
      <h1>{pokemon.name}</h1>
      {pokemon.imgSrc ? <img src={pokemon.imgSrc} alt={pokemon.name} /> : <p>???</p>}
    </article>
  );
}
// ...


export default PokemonCard;


