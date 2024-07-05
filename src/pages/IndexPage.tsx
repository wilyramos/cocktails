import { useAppStore } from "../stores/useAppStore"
import { useMemo } from "react"
import DrinkCard from "../components/DrinkCard"


export default function Indexpage() {
  const drinks = useAppStore((state) => state.drinks)
  
  const hasDrinks = useMemo(() => drinks.drinks.length > 0, [drinks])
  return (
    <>
      <h1 className="text-6xl font-extralight">Recetas</h1>

      {hasDrinks ? (
        <div className="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 my-2 gap-6">
          {drinks.drinks.map((drink) => (
            <DrinkCard key={drink.idDrink} drink={drink} />
          ))}
          
        </div>
      ) : (
        <>
          <p className="my-10 text-center text-2xl">
            No hay bebidas
          </p>
        </>
      )
        }
    </>
  )
}

