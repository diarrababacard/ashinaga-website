import { defineField, defineType } from 'sanity'

export const programType = defineType({
  name: 'program',
  title: 'Programmes',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'theme',
      title: 'Theme court',
      type: 'string',
      description: 'Ex: Selection, Preparation, Mentorat, Alumni',
    }),
    defineField({
      name: 'excerpt',
      title: 'Description courte',
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
