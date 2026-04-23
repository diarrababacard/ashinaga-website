import { DocumentIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const pageType = defineType({
  name: 'page',
  title: 'Pages du site',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Titre de la page',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Lien URL',
      options: { source: 'title' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroImage',
      type: 'image',
      title: 'Image de couverture (Épurée)',
      options: { hotspot: true },
    }),
    defineField({
      name: 'body',
      type: 'array',
      title: 'Contenu',
      of: [{ type: 'block' }, { type: 'image' }],
    }),
  ],
})