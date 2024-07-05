import type { Drink } from "../types"
import { useAppStore } from "../stores/useAppStore"

type DrinkCardProps = {
    drink: Drink
}


export default function DrinkCard({drink} : DrinkCardProps) {

    const selectRecipe = useAppStore((state) => state.selectRecipe)
    
  return (
    <div className="border shadow-lg">
        <div className="overflow-hidden">
            <img 
                src={drink.strDrinkThumb} 
                alt={drink.strDrink} 
                className="hover:scale-105 transition-transform duration-300 w-full h-60 object-cover hover:rotate-2"
            />
        </div>
        <div className="p-5">
            <h2 className="text-2xl truncate font-black">{drink.strDrink}</h2>
            <button
                type="button"
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
                onClick={() => selectRecipe(drink.idDrink)}
            >
                Ver Receta
            </button>
        </div>

    </div>
  )
}
