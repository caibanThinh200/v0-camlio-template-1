import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  description: 'Page document with configurable content blocks',
  fields: [
    defineField({
      name: 'pageName',
      title: 'Page Name',
      type: 'string',
      description: 'Internal name for this page (e.g., "Home", "About")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'URL-friendly identifier for this page',
      options: {
        source: 'pageName',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'pageBuilder',
      title: 'Page Builder',
      type: 'array',
      description: 'Add and arrange content blocks for this page',
      of: [
        {type: 'heroBanner'},
        {type: 'servicesBlock'},
        {type: 'caseStudyBlock'},
        {type: 'awardsBlock'},
        {type: 'contactBlock'},
      ],
    }),
  ],
  preview: {
    select: {
      title: 'pageName',
      subtitle: 'slug.current',
    },
  },
})
