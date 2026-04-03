import { defineType, defineField } from 'sanity'
import { StudioLogo } from '../Logo'

export const video = defineType({
  name: 'video',
  title: 'Video Gallery',
  type: 'document',
  icon: StudioLogo,
  fields: [
    defineField({
      name: 'title',
      title: 'Video Title',
      type: 'string',
    }),
    defineField({
      name: 'url',
      title: 'YouTube URL',
      type: 'url',
      description: 'Paste the YouTube link here (e.g., https://www.youtube.com/watch?v=...)',
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
    }),
  ],
})
