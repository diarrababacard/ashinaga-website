import { defineField, defineType } from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Actualites et blog',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre (francais)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'titleEn',
      title: 'Titre (anglais)',
      type: 'string',
    }),
    defineField({
      name: 'titlePt',
      title: 'Titre (portugais)',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Lien URL',
      type: 'slug',
      options: { source: 'title' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Categorie',
      type: 'string',
      options: {
        list: ['Actualite', 'Blog', 'Evenement', 'Portrait', 'Partenaires'],
      },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Date de publication',
      type: 'datetime',
    }),
    defineField({
      name: 'excerpt',
      title: 'Extrait (francais)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'excerptEn',
      title: 'Extrait (anglais)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'excerptPt',
      title: 'Extrait (portugais)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'coverImage',
      title: 'Image de couverture',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'body',
      title: 'Contenu (francais)',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }],
    }),
    defineField({
      name: 'bodyEn',
      title: 'Contenu (anglais)',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }],
    }),
    defineField({
      name: 'bodyPt',
      title: 'Contenu (portugais)',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }],
    }),
  ],
})
