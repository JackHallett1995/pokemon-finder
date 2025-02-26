import { getPokemonList } from "@/lib/pokemonAPI";
import { getPokemon } from "@/lib/pokemonAPI";
import Image from "next/image";
import { PokemonImage } from "@/components/pokemon-image";
import { Progress } from "@/components/ui/progress";

export default async function PokemonPage({ params} : {params: {pokemonName: string}}) {
    const {pokemonName} = params;

    const pokemonObject = await getPokemon(pokemonName);

    console.log(pokemonObject)

    return (
        <>
        <div className="flex flex-col mt-20 border-4 p-10 rounded-3xl transition-transform duration-500 hover:scale-105 hover:rotate-3d hover:shadow-lg hover:shadow-gray-500">
            <h1 className="text-4xl text-bold pt-4">{pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}</h1>
            <div className="m-4" style={{position: "relative", width: '300px', height: '300px'}}>
                <PokemonImage 
                image={pokemonObject.sprites.other['official-artwork'].front_default}
                name={pokemonName}
                />
            </div>
            <h3>Weight: {pokemonObject.weight}lbs</h3>
            <div className="flex-col">
            {pokemonObject.stats.map((statObject: any) => {
                const rawStatName = statObject.stat.name;
                const newStatName = rawStatName.replace("-", " ");
                const finalStatName = newStatName.charAt(0).toUpperCase() + newStatName.slice(1);
                const statValue = statObject.base_stat;
                return(
                    <div className="flex items-stretch" style={{width: '500px'}} key={finalStatName}>
                        <h3 className="p-3 w-2/4">{finalStatName}: {statValue}</h3>
                        <Progress className="w-2/4 m-auto" value={statValue}/>
                    </div>
                )
            })}
            </div>
        </div>
        </>
    )
}