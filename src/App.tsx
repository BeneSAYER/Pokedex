
import "./App.css";
import PokemonCard from "./components/PokemonCard";
import { useState } from "react";

const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
        name: "charmander",
        imgSrc:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
        name: "squirtle",
        imgSrc:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
        name: "pikachu",
        imgSrc:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
        name: "mew",
        imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png",
    },
];

function App() {

    const [pokemonName, setPokemonName] = useState("bulbasaur");


    const pokemon = pokemonList.find((p) => p.name === pokemonName);


    if (!pokemon) {
        throw new Error("Invalid Pokémon name");
    }

    return (
        <div>
            <nav>
                {pokemonList.map((pokemon, index) => (

                    <button key={index} type="button" onClick={() => setPokemonName(pokemon.name)}>
                        {pokemon.name}
                    </button>
                ))}

            </nav>
            <PokemonCard pokemon={pokemon} />

        </div >
    );
}

export default App;



