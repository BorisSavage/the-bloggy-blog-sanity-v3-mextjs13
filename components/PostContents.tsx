import urlFor from "@/lib/urlFor";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { RichTextComponents } from "./RichTextComponents";

export default function PostContents({ post }: { post: Post }) {
  //console.log("POST: ", post);
  return (
    <article className="px-10 pb-28">
      <section className="space-y-2 border border-cyan-700 text-white">
        <div className="min-h-56 relative flex flex-col justify-between md:flex-row">
          <div className="absolute top-0 h-full w-full p-10 opacity-10 blur-sm">
            <Image
              className="mx-auto object-cover object-center"
              src={urlFor(post.mainImage).url()}
              alt={post.title || "Main image"}
              fill
              priority
            />
          </div>

          <section className="w-full bg-teal-700 p-5">
            <div className="flex flex-col justify-between gap-y-2 sm:gap-y-5 md:flex-row">
              <div>
                <h1 className="text-2xl font-extrabold sm:text-4xl">
                  {post.title}
                </h1>
                <p className="text-sm sm:text-base">
                  {new Date(post?._createdAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="relative flex h-10 w-10 flex-shrink-0 items-center rounded-full border">
                  <Image
                    className="rounded-full object-cover"
                    src={urlFor(post.author?.image).url()}
                    alt={post.author?.name}
                    fill
                    sizes="100%"
                  />
                </div>

                <div className="w-64">
                  <h3 className="text-base font-bold sm:text-lg">
                    {post.author?.name}
                  </h3>
                  <div className="text-sm sm:text-base">
                    <PortableText
                      value={post.author?.bio}
                      components={RichTextComponents}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="pt-2 text-justify text-sm italic sm:pt-10 sm:text-base">
                {post.description}
              </h2>
              <div className="mt-auto flex items-center justify-end space-x-2">
                {post.categories &&
                  post.categories.map((category) => (
                    <div
                      className="mt-4 rounded-full bg-teal-900 px-2 py-0.5 text-center text-sm font-medium text-white shadow shadow-teal-900"
                      key={category._id}
                    >
                      <p className="">{category.title}</p>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        </div>
      </section>

      <PortableText value={post.body} components={RichTextComponents} />
    </article>
  );
}
