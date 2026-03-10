import { defineType, defineField } from 'sanity'

export const notice = defineType({
  name: 'notice',
  title: 'Notice',
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
      name: 'date',
      title: 'Date',
      type: 'datetime',
    }),
  ],
})
