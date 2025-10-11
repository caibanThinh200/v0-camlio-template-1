import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'awards',
  title: 'Awards',
  type: 'document',
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
})
