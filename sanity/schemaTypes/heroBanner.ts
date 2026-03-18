import { defineType, defineField } from 'sanity'

export const heroBanner = defineType({
  name: 'heroBanner',
  title: 'Hero Banner',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Banner Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'link',
      title: 'Redirection Link (Optional)',
      type: 'url',
    }),
    defineField({
      name: 'isExternal',
      title: 'Open link in new tab?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Priority Order',
      type: 'number',
    }),
    defineField({
      name: 'isActive',
      title: 'Active Banner?',
      type: 'boolean',
      initialValue: true,
    }),
  ],
})
