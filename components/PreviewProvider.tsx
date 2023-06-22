"use client";

import { useMemo } from "react";
import { LiveQueryProvider } from "next-sanity/preview";
import { getClient } from "@/lib/sanity.client";

export default function PreviewProvider({
  children,
  preview,
}: {
  children: React.ReactNode;
  preview: boolean;
}) {
  const client = useMemo(() => getClient({ preview }), []);
  return <LiveQueryProvider client={client}>{children}</LiveQueryProvider>;
}
