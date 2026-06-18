export default {
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  fields: [
    {
      name: 'badge',
      title: 'Badge Text',
      type: 'string',
      initialValue: '6+ Years of Experience',
    },
    {
      name: 'headingStart',
      title: 'Heading (Plain Text)',
      type: 'string',
      description: 'Bagian pertama judul (misal: Stories)',
    },
    {
      name: 'headingAccent',
      title: 'Heading (Accent Text)',
      type: 'string',
      description: 'Bagian judul yang berwarna/ditekankan (misal: That Stick.)',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    },
    {
      name: 'primaryCtaText',
      title: 'Primary CTA Text',
      type: 'string',
      initialValue: 'View Portfolio',
    },
    {
      name: 'primaryCtaLink',
      title: 'Primary CTA Link',
      type: 'string',
      initialValue: '#portfolio',
    },
    {
      name: 'secondaryCtaText',
      title: 'Secondary CTA Text',
      type: 'string',
      initialValue: "Let's Talk",
    },
    {
      name: 'secondaryCtaLink',
      title: 'Secondary CTA Link',
      type: 'string',
      initialValue: '#contact',
    },
    {
      name: 'image',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true, // mengaktifkan fitur crop/focus gambar di Sanity
      },
    },
    {
      name: 'imageAlt',
      title: 'Image Alt Text',
      type: 'string',
      description: 'Deskripsi alternatif untuk aksesibilitas/SEO gambar',
    },
    {
      name: 'quote',
      title: 'Image Overlay Quote',
      type: 'text',
      rows: 2,
    },
  ],
};