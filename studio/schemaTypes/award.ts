import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'award',
  title: 'Award',
  type: 'object',
  description: 'Individual award entry with headline, description, and link',
  fields: [
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
      description: 'Award title or name (e.g., "2022 Designer of the year nomination")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
      description: 'Additional details about the award (e.g., "AWWWARDS")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'url',
      description: 'External link to view the award or recognition',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'headline',
      subtitle: 'description',
    },
  },
})
