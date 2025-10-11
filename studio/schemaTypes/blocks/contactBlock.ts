import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'contactBlock',
  title: 'Contact Block',
  type: 'object',
  description: 'Contact section with title, copyright, and additional information',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'H1 heading for the contact section (e.g., "Interested in working together?")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'copyright',
      title: 'Copyright',
      type: 'string',
      description: 'Copyright text displayed in the footer (e.g., "©2024 - All Rights Reserved")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'extraNote',
      title: 'Extra Note',
      type: 'string',
      description: 'Additional note or information (e.g., "Available for freelance work")',
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
          description: 'URL or email link for the button',
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
