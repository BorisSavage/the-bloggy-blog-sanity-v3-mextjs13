import urlFor from "@/lib/urlFor";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { RichTextComponents } from "./RichTextComponents";

export default function PostContents({ post }: { post: Post }) {
  return (
    <article className="px-10 pb-28">
      <section className="mb-2 space-y-2 border border-teal-700 text-white sm:mb-3.5">
        <div className="min-h-56 relative flex flex-col justify-between sm:flex-row">
          <div className="absolute top-0 h-full w-full p-10 opacity-20 blur-sm">
            {post?.mainImage && (
              <Image
                className="mx-auto object-cover"
                src={urlFor(post?.mainImage).url()}
                alt={post?.title || "Main image"}
                fill
                priority
              />
            )}
          </div>

          <section className="w-full bg-teal-700 p-5">
            <div className="flex flex-col justify-between gap-y-2 lg:flex-row lg:gap-x-5">
              <div className="space-y-1 sm:space-y-2">
                <h1 className="text-3xl font-extrabold drop-shadow sm:text-5xl">
                  {post?.title}
                </h1>
                <p className="text-right text-xs drop-shadow sm:text-left sm:text-sm">
                  {new Date(post?.publishedAt)?.toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
              <div className="flex w-fit items-center space-x-2">
                <div className="relative flex h-10 w-10 flex-shrink-0 items-center rounded-full border">
                  {post?.author?.image && (
                    <Image
                      className="rounded-full object-cover drop-shadow"
                      src={urlFor(post.author.image).url()}
                      alt={post?.author?.name}
                      fill
                      sizes="100%"
                    />
                  )}
                </div>

                <div className="w-40">
                  <p className="text-sm font-bold drop-shadow sm:text-base">
                    <span className="font-normal">By</span> {post?.author?.name}
                  </p>
                  <div className="text-sm drop-shadow sm:text-base">
                    <PortableText
                      value={post?.author?.bio}
                      components={RichTextComponents}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <h2 className="pt-10 text-justify text-sm italic drop-shadow sm:text-base">
                <span className="">{post?.description}</span>
              </h2>
              <div className="absolute right-0 top-2.5 flex w-fit items-center justify-end space-x-2">
                {post?.categories &&
                  post.categories.map((category) => (
                    <div
                      className="rounded-full bg-teal-900/80 px-2 py-0.5 text-center text-xs font-medium text-white outline outline-1 outline-white/20 sm:text-sm"
                      key={category._id}
                    >
                      <p className="drop-shadow">{category.title}</p>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        </div>
      </section>

      <PortableText value={post?.body} components={RichTextComponents} />
    </article>
  );
}
