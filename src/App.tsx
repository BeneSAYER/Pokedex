
import "./App.css";
import PokemonCard from "./components/PokemonCard";
import { useState } from "react";

const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
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
            <PokemonCard pokemon={pokemon} />

        </div>
    );
}

export default App;



