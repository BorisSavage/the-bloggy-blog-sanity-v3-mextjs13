import BlogList from "@/components/BlogList";
import PreviewBlogList from "@/components/PreviewBlogList";
import { getClient } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import { draftMode } from "next/headers";
import PreviewProvider from "@/components/PreviewProvider";

export const revalidate = 300; // default value, feel free to reduce this but watch out for your Sanity.io quota

export default async function Home() {
  const query = groq`
  *[_type=='post'] {
    ...,
    author->,
    categories[]->
  } | order(publishedAt desc)
  `;

  const preview = draftMode().isEnabled
    ? { token: process.env.SANITY_API_READ_TOKEN }
    : undefined;

  const client = getClient({});

  const posts: Post[] = await client.fetch(query);

  if (preview?.token) {
    return (
      <PreviewProvider token={preview.token}>
        <PreviewBlogList query={query} data={posts} />
      </PreviewProvider>
    );
  }

  return <BlogList posts={posts} />;
}
