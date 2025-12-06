import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'header',
  title: 'Header',
  type: 'document',
  description: 'Global header configuration for the site',
  fields: [
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'object',
      description: 'Upload logo image and set the homepage link',
      fields: [
        {
          name: 'image',
          title: 'Logo Image',
          type: 'image',
          description: 'Upload your logo image',
          options: {
            hotspot: true,
          },
        },
        {
          name: 'link',
          title: 'Target Link',
          type: 'url',
          description: 'Link to homepage (usually "/")',
          // validation: (Rule) => Rule.required(),
        },
      ],
    }),
    defineField({
      name: 'menuItems',
      title: 'Menu Items',
      type: 'array',
      description: 'Navigation menu links that open in the same tab',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'text',
              title: 'Link Text',
              type: 'string',
              description: 'Display text for the menu item',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'link',
              title: 'Target Link',
              type: 'string',
              description: 'URL or anchor link (e.g., "#services")',
              // validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'cta',
      title: 'Call to Action',
      type: 'object',
      description: 'Header CTA button that scrolls to contact form',
      fields: [
        {
          name: 'text',
          title: 'Button Text',
          type: 'string',
          description: 'Text displayed on the CTA button',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'link',
          title: 'Target Link',
          type: 'string',
          description: 'Scroll target (e.g., "#contact")',
          validation: (Rule) => Rule.required(),
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'cta.text',
    },
    prepare() {
      return {
        title: 'Site Header',
      }
    },
  },
})
