import { type SchemaTypeDefinition } from 'sanity'
import { pageType } from './pageType' // On importe notre définition de page

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pageType], // On l'ajoute ici dans le tableau
}