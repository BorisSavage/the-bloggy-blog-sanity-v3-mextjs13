//"use client";

import urlFor from "@/lib/urlFor";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

export default function PostThumbnailElement({
  post,
  route,
  isFirst = false,
}: {
  post: Post;
  route: string;
  isFirst?: boolean;
}) {
  return (
    <Link href={route}>
      <div className="group relative flex cursor-pointer flex-col">
        <div className="relative h-80 w-full overflow-hidden drop-shadow-xl transition-transform duration-[500ms] ease-savage_sig group-hover:-translate-y-2">
          <Image
            priority={isFirst}
            className="object-cover object-center"
            src={post?.mainImage ? urlFor(post?.mainImage).url() : ""}
            alt={post?.author?.name}
            fill
            sizes="(max-width: 768px) 88vw, (max-width: 1280px) 46vw, 580px"
          />

          <div className="absolute bottom-0 left-0 right-0 flex h-fit min-h-[122px] flex-col justify-end rounded-t bg-black/20 backdrop-blur gradient-mask-t-40">
            <div className="flex w-full justify-between rounded px-5 pb-2 text-white drop-shadow-lg">
              <div className="drop-shadow">
                <p className="line-clamp-1 font-bold">{post?.title}</p>
                <p>
                  {new Date(post?.publishedAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mt-2 flex flex-row items-center justify-center gap-x-2 gap-y-2 px-2 sm:justify-end">
          {post?.categories?.map((category) => (
            <div
              key={category?._id}
              className="rounded-full bg-teal-700 px-2 py-0.5 text-center text-xs font-medium text-white outline outline-1 outline-teal-900/20 sm:text-sm"
            >
              <p className="drop-shadow">{category?.title}</p>
            </div>
          ))}
        </div>

        <div className="mt-3 line-clamp-3 flex-1">
          <p className="text-lg font-bold underline">{post?.title}</p>
          <p className="text-gray-500">{post?.description}</p>
        </div>
        <p className="mt-2 flex items-center font-bold underline decoration-black/0 decoration-2 transition-all duration-500 ease-savage_sig group-hover:decoration-teal-500/100">
          Read Post
          <ArrowUpRightIcon className="ml-2 h-4 w-4" />
        </p>
      </div>
    </Link>
  );
}
