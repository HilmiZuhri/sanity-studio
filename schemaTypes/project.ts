import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project Portofolio',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Judul Proyek',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Deskripsi Proyek',
      type: 'text',
    }),
    defineField({
      name: 'mainImage',
      title: 'Foto / Screenshot Proyek',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'tags',
      title: 'Teknologi (Tags)',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'githubUrl',
      title: 'Link GitHub',
      type: 'url',
    }),
  ],
})