import { ChangeEvent, useEffect, useMemo, useState, FormEvent } from "react"
import { NavLink } from "react-router-dom"
import { useLocation } from "react-router-dom" // partrname
import { useAppStore } from "../stores/useAppStore"

export default function Header() {

  const [searchFilters, setSearchFilters] = useState({
    ingredient: '',
    category: ''
  })

  const { pathname } = useLocation() // pathname
  const isHome = useMemo(() => pathname === '/', [pathname]) //

  const fetchCategories = useAppStore(state => state.fetchCategories)
  const categories = useAppStore(state => state.categories)
  const searchRecipes = useAppStore(state => state.searchRecipes)
  const showNotification = useAppStore(state => state.showNotification)


  useEffect(() => {
    fetchCategories()
  }, [])

  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
    setSearchFilters({
      ...searchFilters,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // validar

    if (Object.values(searchFilters).includes('')) {
      showNotification({
        text: 'Todos los campos son obligatorios',
        error: true
      })
      return
    }

    // Consultar las recetas

    searchRecipes(searchFilters)
  }

  return (
    <header className={isHome ? 'bg-header bg-center bg-cover' : 'bg-slate-800'}>
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center">
          <div>
            <img className="w-24" src="/logo.svg" alt="Logo" />
          </div>
          <nav>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'text-orange-700 uppercase font-bold mr-4' : 'text-white uppercase font-bold mr-4'
              }
            >Inicio</NavLink>

            <NavLink to="/favorites"
              className={({ isActive }) =>
                isActive ? 'text-orange-700 uppercase font-bold mr-4' : 'text-white uppercase font-bold mr-4'
              }
            >Favoritos</NavLink>
          </nav>
        </div>

        {isHome && (
          <form
            className="shadow-md bg-slate-900 p-4 mt-4 rounded-2xl max-w-lg mx-auto"
            onSubmit={handleSubmit}
          >
            <div className="">
              <label
                htmlFor="search"
                className="block text-white uppercase font-bold text-lg text-center mb-4"
              >Nombre Ingredientes</label>
              <input
                type="text"
                id="search"
                name="ingredient"
                className="p-3 w-full rounded-2xl focus:outline-none"
                placeholder="Nombre o Ingrediente. Ej. Vodka, Ron, Tequila..."
                onChange={handleChange}
                value={searchFilters.ingredient}
              />

              
            </div>

            <div className="">
              <label
                htmlFor="category"
                className="block text-white uppercase font-bold text-lg text-center mb-4 p-4"
              >Categoría</label>
              <select
                id="category"
                name="category"
                className="p-3 w-full rounded-2xl focus:outline-none"
                onChange={handleChange}
                value={searchFilters.category}
              >
                <option value="">-- Seleccione una categoría --</option>
                {categories.drinks.map(category => (
                  <option
                    key={category.strCategory}
                    value={category.strCategory}
                  >{category.strCategory}</option>
                ))}
              </select>
              {}
            </div>
            <input
              type="submit"
              value="Buscar"
              className="bg-orange-700 text-white uppercase font-bold w-full p-3 rounded-2xl cursor-pointer mt-4 hover:bg-orange-600 transition-all duration-300 ease-in-out"
                
            />
          </form>

        )}
      </div>
    </header>
  )
}
