"use client";

import { getFileAsset } from "@sanity/asset-utils";
import config from "@/sanity.config";

export function videoAssetFor(source: any) {
  return getFileAsset(source, config);
}
