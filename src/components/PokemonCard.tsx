interface PokemonCardProps {
  name: string
  imgSrc?: string
}

function ImgPokemon({ imgSrc }: { imgSrc?: string }) {
  return imgSrc ? <img src={imgSrc} alt="img pokemon" /> : <p>???</p>;
}

function PokemonCard({ pokemon }) {
  return (
    <article>
      <ImgPokemon imgSrc={pokemon.imgSrc} />
      <h1>{pokemon.name}</h1>

    </article>
  );
}
// ...


export default PokemonCard;


