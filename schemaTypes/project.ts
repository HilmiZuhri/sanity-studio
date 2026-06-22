export default {
  name: 'project',
  type: 'document',
  title: 'Portfolio Project',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Project Title',
      description: 'Judul proyek (misal: "Brand Storytelling for XYZ")'
    },
    {
      name: 'category',
      type: 'string',
      title: 'Category',
      description: 'e.g., Brand Storytelling, Ad Copy, Web Copy, Scriptwriting'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Brief Description',
      description: 'Single sentence preview for the grid view'
    },
    {
      name: 'challenge',
      type: 'text',
      title: 'The Challenge',
      description: 'The complex problem the brand was facing'
    },
    {
      name: 'solution',
      type: 'text',
      title: 'The Solution',
      description: 'Your creative and copywriting approach to solve it'
    },
    {
      name: 'client',
      type: 'string',
      title: 'Client Name'
    },
    {
      name: 'year',
      type: 'string',
      title: 'Year'
    },
    {
      name: 'mainImage',
      type: 'image',
      title: 'Project Display Image',
      description: 'The main image that represents the project in the portfolio grid',
      options: {
        hotspot: true,
      }
    },
    {
      name: 'imageUrl',
      type: 'url',
      title: 'Alternative Image URL',
      description: 'Use if hosting image externally instead of uploading'
    },
    {
      name: 'results',
      type: 'array',
      title: 'Key Out-turns / Metrics',
      of: [{ type: 'string' }],
    },
    {
      name: 'deliverables',
      type: 'array',
      title: 'Deliverables & Scope',
      of: [{ type: 'string' }],
    },
    {
      name: 'testimonial',
      type: 'object',
      title: 'Client Testimonial (Optional)',
      fields: [
        { name: 'quote', type: 'text', title: 'Quote' },
        { name: 'author', type: 'string', title: 'Author Name' },
        { name: 'role', type: 'string', title: 'Author Role / Company' }
      ]
    }
  ]
};