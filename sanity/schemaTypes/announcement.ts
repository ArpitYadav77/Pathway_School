import { defineType, defineField } from 'sanity'

export const announcement = defineType({
  name: 'announcement',
  title: 'Announcement',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'text',
    }),
    defineField({
      name: 'file',
      title: 'Upload Resource (e.g. PDF, Document)',
      type: 'file',
      options: {
        accept: '.pdf,.doc,.docx',
      },
    }),
    defineField({
      name: 'link',
      title: 'External Link (Optional)',
      type: 'url',
    }),
    defineField({
      name: 'isExternal',
      title: 'Is External (Opens in new tab)',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
      initialValue: (new Date()).toISOString(),
    }),
  ],
})
