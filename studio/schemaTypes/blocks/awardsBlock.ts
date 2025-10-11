import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'awardsBlock',
  title: 'Awards Block',
  type: 'object',
  description: 'Awards section showcasing recognitions and achievements',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'array',
      description: 'Awards section title with rich text formatting',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'H2', value: 'h2'},
          ],
          marks: {
            decorators: [
              {title: 'Italic', value: 'em'},
              {title: 'Strong', value: 'strong'},
            ],
          },
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'awardsList',
      title: 'Awards List',
      type: 'array',
      description: 'List of awards and recognitions',
      of: [{type: 'award'}],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      awards: 'awardsList',
    },
    prepare({awards}) {
      return {
        title: 'Awards Block',
        subtitle: `${awards?.length || 0} awards`,
      }
    },
  },
})
