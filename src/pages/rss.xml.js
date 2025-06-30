import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

// export async function GET(context) {
// 	const posts = await getCollection('blog');
// 	return rss({
// 		title: SITE_TITLE,
// 		description: SITE_DESCRIPTION,
// 		site: context.site,
// 		items: posts.map((post) => ({
// 			...post.data,
// 			link: `/blog/${post.id}/`,
// 		})),
// 	});
// }
//
export async function GET(context) {
	const blogPosts = await getCollection('blog');
	const oauthPosts = await getCollection('oauth'); // 너가 새로 추가한 컬렉션 이름
  const jwtPosts = await getCollection('jwt')
  const owaspApiTop10Posts = await getCollection('owasp-api-top-10')
  const burpSuitePosts = await getCollection('burp-suite')

	const allPosts = [...blogPosts, ...oauthPosts, ...jwtPosts, ...owaspApiTop10Posts, ...burpSuitePosts];

	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: allPosts.map((post) => ({
			...post.data,
			link: `/${post.collection}/${post.slug}/`, // collection별 경로 처리
		})),
	});
}
