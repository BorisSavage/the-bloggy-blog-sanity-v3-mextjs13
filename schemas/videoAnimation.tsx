import { PlayCircleIcon } from "@heroicons/react/24/outline";
import { defineField, defineType } from "sanity";
import { getFileAsset } from "@sanity/asset-utils";
import { Flex, Spinner } from "@sanity/ui";
import { SanityAsset } from "@sanity/image-url/lib/types/types";

export default defineType({
  name: "videoAnimation",
  title: "Video animation",
  type: "object",
  icon: PlayCircleIcon,
  fields: [
    defineField({
      name: "webm",
      title: "WebM format",
      type: "file",
      options: {
        accept: "video/webm",
      },
    }),
    defineField({
      name: "fallback",
      title: "Fallback format",
      type: "file",
      options: {
        accept: "video/mp4",
      },
    }),
  ],
});
