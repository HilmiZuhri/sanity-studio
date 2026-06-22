export default {
  name: 'about',
  title: 'About Section',
  type: 'document',
  fields: [
    {
      name: 'badge',
      title: 'Badge Text',
      type: 'string',
      initialValue: 'The Story Behind the Storyteller and Copywriter',
      description: 'Teks singkat yang muncul di atas judul (misal: The Story Behind the Storyteller and Copywriter)',
    },
    {
      name: 'headingStart',
      title: 'Heading (Plain Text)',
      type: 'string',
      initialValue: 'Six years of shaping',
      description: 'Bagian pertama judul (misal: Six years of shaping)',
    },
    {
      name: 'headingAccent',
      title: 'Heading (Accent/Muted Text)',
      type: 'string',
      initialValue: 'global narratives.',
      description: 'Bagian judul yang berwarna/ditekankan (misal: global narratives.)',
    },
    {
      name: 'paragraphs',
      title: 'Story Paragraphs',
      type: 'array',
      of: [{ type: 'text', rows: 4 }],
      description: 'Tulis satu atau beberapa paragraf mengenai profil Anda.',
    },
    {
      name: 'stats',
      title: 'Statistics',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'statItem',
          title: 'Stat Item',
          fields: [
            { name: 'value', type: 'string', title: 'Value (e.g., 6+)' },
            { name: 'label', type: 'string', title: 'Label (e.g., Years of Experience)' },
          ],
        },
      ],
    },
    {
      name: 'valueProps',
      title: 'Value Propositions',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'valuePropItem',
          title: 'Value Prop Item',
          fields: [
            {
              name: 'icon',
              type: 'string',
              title: 'Icon Name',
              options: {
                list: [
                  { title: 'Pen Tool', value: 'PenTool' },
                  { title: 'Target', value: 'Target' },
                  { title: 'Heart', value: 'Heart' },
                  { title: 'Zap', value: 'Zap' },
                ],
              },
            },
            { name: 'title', type: 'string', title: 'Title' },
            { name: 'description', type: 'text', title: 'Description', rows: 3 },
          ],
        },
      ],
    },
  ],
};