"use client";

import { useLiveQuery } from "next-sanity/preview";
import PostContents from "./PostContents";
import { CogIcon } from "@heroicons/react/24/outline";

type Props = {
  data: Post;
  query: string;
  slug: string;
};

export default function PreviewPostContents({
  data: initialData,
  query,
  slug,
}: Props) {
  const [data, loading] = useLiveQuery(initialData, query, {
    slug,
  });

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

  return <PostContents post={data} />;
}
