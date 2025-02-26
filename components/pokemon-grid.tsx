"use client"
import { useState } from "react"
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { PokemonCard } from "./pokemon-card";

interface PokemonGridProps {
    pokemonList: any
}

export function PokemonGrid({ pokemonList } : PokemonGridProps) {
    const [searchText, setSearchText] = useState("");

    console.log(pokemonList)

    const searchFilter = (pokemonList: any) => {
        return pokemonList.filter(
            (pokemon: any) => pokemon.name.toLowerCase().includes(searchText.toLowerCase())
        )
    }

    const filteredPokemonList = searchFilter(pokemonList)

        return (
            <>
            <div className="">
                <h3 className="text-2xl py-6 text-center">Search for your Pokemon!</h3>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="pokemonName">Pokemon Name</Label>
                    <Input
                        type="text"
                        value={searchText}
                        id="pokemonName"
                        autoComplete="off"
                        placeholder="Charizard, Pikachu, etc"
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                </div>
                <h3 className="text-3xl pt-12 pd-6 text-center">Pokemon Collection</h3>
            </div>
            <div className="grid lg-mb-0 justify-start lg:grid-cols-3 lg:text-left">
                {filteredPokemonList.map((pokemon: any) => {
                    return(
                        <PokemonCard name={pokemon.name} />
                    )
                })}
            </div>
            </>
        )
}