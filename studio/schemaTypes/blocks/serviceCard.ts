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
      type: 'array',
      description: 'H1 heading with rich text formatting. Use decorators for highlight colors and italic styling',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'H1', value: 'h1'},
          ],
          marks: {
            decorators: [
              {title: 'Italic', value: 'em'},
              {title: 'Strong', value: 'strong'},
            ],
            annotations: [
              {
                name: 'color',
                title: 'Color',
                type: 'object',
                fields: [
                  {
                    name: 'value',
                    title: 'Color Value',
                    type: 'string',
                    description: 'Hex color code for highlighted text',
                  },
                ],
              },
            ],
          },
        },
      ],
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
    },
    prepare({description}) {
      return {
        title: 'Service Card',
        subtitle: description,
      }
    },
  },
})
