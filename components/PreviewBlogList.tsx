"use client";

import { useLiveQuery } from "next-sanity/preview";
import BlogList from "./BlogList";
import { CogIcon } from "@heroicons/react/24/outline";

export default function PreviewBlogList({
  data: initialData,
  query,
}: {
  data: Post[];
  query: string;
}) {
  const [data, loading] = useLiveQuery(initialData, query);

  if (loading) {
    return (
      <div
        role="status"
        className="mx-auto flex items-center justify-center space-x-2 text-teal-700"
      >
        <div className="flex h-10 items-center">
          <p className="text-center text-lg font-bold">
            Loading Preview Data...
          </p>
        </div>
        <CogIcon className="relative h-10 w-10 animate-spin" />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mx-10 mt-10 w-fit space-y-2.5 border border-teal-700 px-2.5 py-2.5 text-justify sm:space-y-5 sm:px-10 sm:py-5">
        <h2 className="relative text-center text-base font-bold sm:text-lg">
          <span>Welcome to the</span>{" "}
          <span className="relative">
            <span
              style={{ textShadow: "0 0 2px rgba(0,0,0,0.05)" }}
              className="absolute left-0 top-0 ml-[0.1em] font-extrabold tracking-widest text-transparent"
            >
              preview mode!
            </span>
            <span className="relative ml-[0.1em] bg-gradient-to-br from-lime-700 via-teal-700 to-violet-700 bg-clip-text font-extrabold tracking-widest text-transparent">
              preview mode!
            </span>
          </span>
        </h2>
        <div className="text-center text-sm font-medium sm:text-base">
          <p>All the unpublished content is visible. </p>
          <span className="bg-gradient-to-r from-lime-700 via-teal-700 to-violet-700 bg-[length:100%_2px] bg-bottom bg-no-repeat font-bold">
            Everything is now streamed live from the backend!
          </span>{" "}
          <p>
            Look around for unpublished posts to see some of the stunning
            backend features of this blog!
          </p>
        </div>
      </div>
      <BlogList posts={data} />
    </div>
  );
}
