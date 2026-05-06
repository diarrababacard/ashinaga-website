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
      title: 'Titre de la page (francais)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'titleEn',
      type: 'string',
      title: 'Titre de la page (anglais)',
    }),
    defineField({
      name: 'titlePt',
      type: 'string',
      title: 'Titre de la page (portugais)',
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
      title: 'Image de couverture',
      options: { hotspot: true },
    }),
    defineField({
      name: 'excerpt',
      type: 'text',
      title: 'Resume court (francais)',
      rows: 3,
    }),
    defineField({
      name: 'excerptEn',
      type: 'text',
      title: 'Resume court (anglais)',
      rows: 3,
    }),
    defineField({
      name: 'excerptPt',
      type: 'text',
      title: 'Resume court (portugais)',
      rows: 3,
    }),
    defineField({
      name: 'body',
      type: 'array',
      title: 'Contenu (francais)',
      of: [{ type: 'block' }, { type: 'image' }],
    }),
    defineField({
      name: 'bodyEn',
      type: 'array',
      title: 'Contenu (anglais)',
      of: [{ type: 'block' }, { type: 'image' }],
    }),
    defineField({
      name: 'bodyPt',
      type: 'array',
      title: 'Contenu (portugais)',
      of: [{ type: 'block' }, { type: 'image' }],
    }),
  ],
})
