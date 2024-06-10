import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { ROOT_TITLE, ROOT_DESCRIPTION } from "../consts";

export async function GET(context) {
  const posts = await getCollection("blog");
  return rss({
    trailingSlash: false,
    title: ROOT_TITLE,
    description: ROOT_DESCRIPTION,
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/blog/${post.slug}`,
    })),
  });
}
