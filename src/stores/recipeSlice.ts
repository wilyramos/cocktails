import { StateCreator } from "zustand"
import { getCategories, getRecipes, getRecipeById } from "../services/RecipeService"
import type { categories, Drink, Drinks, Recipe, SearchFilters } from "../types"


export type RecipesSliceType = {
    categories: categories
    drinks: Drinks
    selectedRecipe: Recipe
    modal: boolean
    fetchCategories: () => Promise<void>
    searchRecipes: (SearchFilters: SearchFilters) => Promise<void>
    selectRecipe: (id: Drink['idDrink']) => Promise<void>
    closeModal: () => void
}

export const createRecipesSlice : StateCreator<RecipesSliceType>= (set) => ({
    categories : {
        drinks: []
    },
    drinks: {
        drinks: []
    },
    selectedRecipe: {} as Recipe,
    modal: false,

    fetchCategories: async () => {
        const categories = await getCategories()
        set({categories})
    },

    searchRecipes: async (filters) => {
        const drinks = await getRecipes(filters)
        set({drinks})
    },
    selectRecipe: async (id) => {
        const selectedRecipe = await getRecipeById(id)
        set({
            selectedRecipe,
            modal: true
        })
    },
    closeModal: () => {
        set({
            modal: false,
            selectedRecipe: {} as Recipe
        })
    }
    
})