import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'heroBanner',
  title: 'Hero Banner',
  type: 'object',
  description: 'Hero section with main title, description, and call to action',
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
      description: 'Main description text below the hero title',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'cta',
      title: 'Call to Action',
      type: 'object',
      description: 'CTA button (not in design but should appear)',
      fields: [
        {
          name: 'text',
          title: 'Button Text',
          type: 'string',
          description: 'Text displayed on the CTA button',
        },
        {
          name: 'link',
          title: 'Target Link',
          type: 'string',
          description: 'URL or anchor link for the button',
        },
      ],
    }),
    defineField({
      name: 'extraNote',
      title: 'Extra Note',
      type: 'text',
      description: 'Additional note or information displayed in the hero section',
      rows: 2,
    }),
  ],
  preview: {
    select: {
      description: 'description',
    },
    prepare({description}) {
      return {
        title: 'Hero Banner',
        subtitle: description,
      }
    },
  },
})
