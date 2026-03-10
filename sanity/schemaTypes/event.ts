import { defineType, defineField } from 'sanity'

export const event = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'eventDate',
      title: 'Event Date',
      type: 'datetime',
    }),
    defineField({
      name: 'eventImage',
      title: 'Event Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
