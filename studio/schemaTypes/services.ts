import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'services',
  title: 'Services',
  type: 'document',
  fields: [
    defineField({
      name: 'serviceCards',
      title: 'Service Cards',
      type: 'array',
      description: 'List of service cards to display on the portfolio',
      of: [{type: 'serviceCard'}],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
})
