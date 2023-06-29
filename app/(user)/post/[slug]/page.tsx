import PostContents from "@/components/PostContents";
import { getClient } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import { draftMode } from "next/headers";
import PreviewProvider from "@/components/PreviewProvider";
import PreviewPostContents from "@/components/PreviewPostContents";

export const revalidate = 300; // default value, feel free to reduce this but watch out for your Sanity.io quota

export async function generateStaticParams() {
  const query = groq`
  *[_type=='post']
  {
    slug,
  }`;

  const posts: Post[] = await getClient().fetch(query);

  const slugRoutes = posts.map((post) => {
    return post.slug.current;
  });

  return slugRoutes.map((slug) => {
    return {
      slug,
    };
  });
}

export default async function Post({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const query = groq`*[_type=='post' && slug.current == $slug][0]
    {
      ...,
      author->,
      categories[]->
    }
  `;
  const client = getClient({});

  const preview = draftMode().isEnabled
    ? { token: process.env.SANITY_API_READ_TOKEN }
    : undefined;

  const post: Post = await client.fetch(query, { slug });

  if (preview?.token) {
    return (
      <PreviewProvider token={preview.token}>
        <PreviewPostContents query={query} slug={slug} data={post} />
      </PreviewProvider>
    );
  }

  if (post) return <PostContents post={post}></PostContents>;
}
