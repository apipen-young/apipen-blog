// import { glob } from 'astro/loaders';
// import { defineCollection, z } from 'astro:content';
//
// const blog = defineCollection({
// 	// Load Markdown and MDX files in the `src/content/blog/` directory.
// 	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
// 	// Type-check frontmatter using a schema
// 	schema: ({ image }) => z.object({
// 		title: z.string(),
// 		description: z.string(),
// 		// Transform string to Date object
// 		pubDate: z.coerce.date(),
// 		updatedDate: z.coerce.date().optional(),
// 		heroImage: image().optional(),
// 	}),
// });


import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: image().optional(),
    }),
});

const oauth= defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
      heroImage: image().optional(),
    }),
});

const jwt= defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
      heroImage: image().optional(),
    }),
});

const owasp_api_top_10 = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
      heroImage: image().optional(),
    }),
});


const burp_suite = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
      heroImage: image().optional(),
    }),
});


export const collections = {
  blog,
  oauth,
  jwt,
  "owasp-api-top-10": owasp_api_top_10,
  "burp-suite": burp_suite

};

