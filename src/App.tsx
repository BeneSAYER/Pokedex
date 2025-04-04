
import "./App.css";
import PokemonCard from "./components/PokemonCard";
import { useState } from "react";
import NavBar from "./components/NavBar";

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

            <NavBar setPokemonName={setPokemonName} pokemonList={pokemonList} />
            <PokemonCard pokemon={pokemon} />
        </div>
    );
}

export default App;

