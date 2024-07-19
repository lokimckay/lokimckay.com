import { getCollection, type CollectionEntry } from "astro:content";
import { pinnedPosts } from "@/lib/config";

export type Post = CollectionEntry<"posts">;
type PostLI = { title: string; date: string; slug?: string; url?: string };

export async function getPostsList(): Promise<PostLI[]> {
  const _posts = await getCollection("posts");
  const posts = _posts.map(({ slug, data }) => ({
    title: data.title,
    date: data.date,
    url: `/posts/${slug}`,
    slug,
  }));
  const _events = await getCollection("events");
  const events = _events.map(({ data }) => data.events).flat();
  const merged = [...posts, ...events];
  const sorted = merged.sort((a, b) => (a.date > b.date ? -1 : 1));
  return sorted;
}

export async function getPinnedList(): Promise<PostLI[]> {
  const posts = await getPostsList();
  const pinned = posts.filter(({ slug }) => slug && pinnedPosts.includes(slug));
  return pinned;
}
