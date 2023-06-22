import BlogList from "@/components/BlogList";
import PreviewBlogList from "@/components/PreviewBlogList";
import { getClient } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import { draftMode } from "next/headers";
import PreviewProvider from "@/components/PreviewProvider";

export const revalidate = 60; // default value, feel free to reduce this but watch out for your Sanity.io quota

export default async function Home() {
  const query = groq`
  *[_type=='post'] {
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
  `;

  const { isEnabled } = draftMode();
  const posts: Post[] = await getClient({ preview: isEnabled }).fetch(query);
  if (isEnabled) {
    return (
      <PreviewProvider preview={isEnabled}>
        <PreviewBlogList query={query} data={posts} />
      </PreviewProvider>
    );
  }

  return <BlogList posts={posts} />;
}
