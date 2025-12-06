import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'serviceCard',
  title: 'Service Card',
  type: 'object',
  description: 'Individual service card with title, description, and skills',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Detailed description of the service',
      rows: 5,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'skills',
      title: 'Skills',
      type: 'array',
      description: 'List of skills or technologies related to this service (not in design but should appear)',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      description: 'description',
      title: 'title',
    },
    prepare({description, title}) {
      return {
        title: title,
        subtitle: description,
      }
    },
  },
})
