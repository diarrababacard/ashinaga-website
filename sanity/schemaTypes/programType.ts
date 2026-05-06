import { defineField, defineType } from 'sanity'

export const programType = defineType({
  name: 'program',
  title: 'Programmes',
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
      name: 'theme',
      title: 'Theme court (francais)',
      type: 'string',
      description: 'Ex: Selection, Preparation, Mentorat, Alumni',
    }),
    defineField({
      name: 'themeEn',
      title: 'Theme court (anglais)',
      type: 'string',
    }),
    defineField({
      name: 'themePt',
      title: 'Theme court (portugais)',
      type: 'string',
    }),
    defineField({
      name: 'excerpt',
      title: 'Description courte (francais)',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'excerptEn',
      title: 'Description courte (anglais)',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'excerptPt',
      title: 'Description courte (portugais)',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'orderRank',
      title: 'Ordre d affichage',
      type: 'number',
      initialValue: 1,
    }),
  ],
})
