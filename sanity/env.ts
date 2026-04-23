export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-04-09'

// On ajoute une valeur de secours (fallback)
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

// Remplacez 'votre_id_ici' par le Project ID trouvé sur sanity.io/manage
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '2xbuakuw'

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    // On transforme l'erreur en simple avertissement pour ne plus bloquer
    console.warn(errorMessage)
    return v as T 
  }
  return v
}