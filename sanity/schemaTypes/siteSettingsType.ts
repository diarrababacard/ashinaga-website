import { defineField, defineType } from 'sanity'

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Parametres du site',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Nom du site',
      type: 'string',
      initialValue: 'Ashinaga Senegal',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'heroVideoUrl',
      title: 'URL video hero',
      type: 'url',
      description: 'Lien MP4 public pour la video de fond de la page accueil.',
    }),
    defineField({
      name: 'donationUrl',
      title: 'Lien de don',
      type: 'url',
    }),
    defineField({
      name: 'partners',
      title: 'Logos partenaires de la banderole',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'partner' }] }],
    }),
  ],
})
