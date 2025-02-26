import Link from "next/link"

interface PokemonCardProps {
    name: string
}

export function PokemonCard({name} : PokemonCardProps) {
    return(
        <Link
  href={name}
  className="group relative block rounded-lg border border-transparent px-5 py-4 transition-transform duration-300 m-3 hover:scale-105 hover:-translate-y-1 hover:shadow-lg hover:border-gray-300 hover:bg-gray-900 dark:border-gray-500 dark:hover:border-gray-400"
  key={name + 'Card'}
>
  <h2 className="text-2xl font-semibold transition-transform duration-300 group-hover:translate-y-1">
    {name.charAt(0).toUpperCase() + name.slice(1)}
  </h2>
</Link>
    )
}