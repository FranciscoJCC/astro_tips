import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context){
    const tips = await getCollection('tips');
    return rss ({
        title: 'AstroBuild.tips',
        description: 'My First Page',
        site: context.site,
        items: tips.map((post) => ({
            ...post.data,
            link: `/tips/${post.slug}/`,
        })),
    });
}