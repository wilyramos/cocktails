import { z } from 'zod';
import { categoriesAPIResponseSchema, SearchFiltersSchema, DrinkAPIResponse , DrinksAPIResponse, RecipeAPIResponseSchema } from '../utils/recipes-schema';

export type categories = z.infer<typeof categoriesAPIResponseSchema>
export type SearchFilters = z.infer<typeof SearchFiltersSchema>
export type Drinks = z.infer<typeof DrinksAPIResponse>
export type Drink = z.infer<typeof DrinkAPIResponse>
export type Recipe = z.infer<typeof RecipeAPIResponseSchema>