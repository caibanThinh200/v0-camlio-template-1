import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'servicesBlock',
  title: 'Services Block',
  type: 'object',
  description: 'Services section containing multiple service cards',
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
  preview: {
    select: {
      cards: 'serviceCards',
    },
    prepare({cards}) {
      return {
        title: 'Services Block',
        subtitle: `${cards?.length || 0} service cards`,
      }
    },
  },
})
