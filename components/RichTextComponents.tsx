import urlFor from "@/lib/urlFor";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { UrlObject } from "url";

export const RichTextComponents = {
  types: {
    image: ({ value }: { value: mainImage }) => {
      return (
        <div className="relative mx-auto mt-10 aspect-[16/9] w-full">
          <Image
            className="object-contain"
            src={urlFor(value).url()}
            alt="Blog Post Image"
            fill
          />
        </div>
      );
    },
  },
  list: {
    bullet: ({ children = [] }: { children?: ReactNode }) => (
      <ul className="ml-10 list-disc space-y-5 py-5">{children}</ul>
    ),
    number: ({ children = [] }: { children?: ReactNode }) => (
      <ol className="mt-lg list-decimal">{children}</ol>
    ),
  },
  block: {
    h1: ({ children = [] }: { children?: ReactNode }) => (
      <h1 className="py-5 text-3xl font-bold sm:py-10 sm:text-5xl">
        {children}
      </h1>
    ),
    h2: ({ children = [] }: { children?: ReactNode }) => (
      <h2 className="py-5 text-2xl font-bold sm:py-10 sm:text-4xl">
        {children}
      </h2>
    ),
    h3: ({ children = [] }: { children?: ReactNode }) => (
      <h3 className="py-5 text-xl font-bold sm:py-10 sm:text-3xl">
        {children}
      </h3>
    ),
    h4: ({ children = [] }: { children?: ReactNode }) => (
      <h4 className="py-5 text-lg font-bold sm:py-10 sm:text-2xl">
        {children}
      </h4>
    ),

    normal: ({ children = [] }: { children?: ReactNode }) => (
      <div className="text-justify text-sm sm:text-base">{children}</div>
    ),

    blockquote: ({ children = [] }: { children?: ReactNode }) => (
      <blockquote className="my-5 border border-l-4 border-teal-400/50 py-5 pl-5">
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
