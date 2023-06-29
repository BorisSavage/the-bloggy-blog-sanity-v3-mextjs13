import urlFor from "@/lib/urlFor";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { UrlObject } from "url";
import VideoAnimationComponent from "./VideoAnimationComponent";

export const RichTextComponents = {
  types: {
    image: ({ value }: { value: mainImage }) => {
      return (
        <div className="relative mx-auto my-2 aspect-square w-full border sm:my-3.5 sm:aspect-[16/9]">
          <Image
            className="object-scale-down"
            src={value ? urlFor(value).url() : ""}
            alt="Blog Post Image"
            fill
          />
        </div>
      );
    },
    videoAnimation: ({ value }: { value: video }) => {
      return (
        <div className="mx-auto my-2 flex aspect-square w-full flex-col items-center justify-center border sm:my-3.5 sm:aspect-[16/9]">
          <VideoAnimationComponent value={value} />
        </div>
      );
    },
  },
  list: {
    bullet: ({ children = [] }: { children?: ReactNode }) => (
      <ul className="ml-10 list-disc space-y-5 py-2 sm:py-3.5">{children}</ul>
    ),
    number: ({ children = [] }: { children?: ReactNode }) => (
      <ol className="mt-lg list-decimal py-2 sm:py-3.5">{children}</ol>
    ),
  },
  block: {
    h1: ({ children = [] }: { children?: ReactNode }) => (
      <h1 className="py-2 text-3xl font-bold sm:py-3.5 sm:text-5xl">
        {children}
      </h1>
    ),
    h2: ({ children = [] }: { children?: ReactNode }) => (
      <h2 className="py-2 text-2xl font-bold sm:py-3.5 sm:text-4xl">
        {children}
      </h2>
    ),
    h3: ({ children = [] }: { children?: ReactNode }) => (
      <h3 className="py-2 text-xl font-bold sm:py-3.5 sm:text-3xl">
        {children}
      </h3>
    ),
    h4: ({ children = [] }: { children?: ReactNode }) => (
      <h4 className="py-2 text-lg font-bold sm:py-3.5 sm:text-2xl">
        {children}
      </h4>
    ),

    normal: ({ children = [] }: { children?: ReactNode }) => (
      <div className="py-2 text-justify text-lg sm:py-3.5 sm:text-xl">
        {children}
      </div>
    ),
    small: ({ children = [] }: { children?: ReactNode }) => (
      <div className="text-justify text-xs font-light sm:text-sm">
        {children}
      </div>
    ),

    blockquote: ({ children = [] }: { children?: ReactNode }) => (
      <blockquote className="my-2 border border-l-4 border-teal-400/50 py-5 pl-5 sm:my-3.5">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({
      children = [],
      value = { href: "" },
    }: {
      children?: ReactNode;
      value?: UrlObject;
    }) => {
      const rel = !value?.href?.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <Link
          href={value?.href || ""}
          rel={rel}
          className="hover: underline decoration-teal-400 hover:decoration-black"
        >
          {children}
        </Link>
      );
    },
  },
};
