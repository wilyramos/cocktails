import DrinkCard from "../components/DrinkCard"
import { useAppStore } from "../stores/useAppStore"
import { useMemo } from "react"


export default function FavoritesPage() {

  const favorites = useAppStore((state) => state.favorites)
  const hasFavorites = useMemo(() => favorites.length , [favorites])
  
  return (
    <>
      <h1 className="text-4xl font-bold text-center my-8">Favorites</h1>

      {hasFavorites ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {favorites.map((drink) => (
            <DrinkCard 
              key={drink.idDrink} 
              drink={drink} />
          ))}
        </div>
      ) : (
        <p className="text-center text-lg">You don't have any favorites yet</p>
      )}

      

    </>
  )
}
