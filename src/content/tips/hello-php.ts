import {z, defineCollection} from 'astro:content';

const tipCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        pubDate: z.string().datetime(),
        image: z.string().optional(),
        tags: z.array(z.string()),
    }),
});

export const collections = {
    'tips': tipCollection,
};

