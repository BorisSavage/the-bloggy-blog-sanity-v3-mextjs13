"use client";

import { getFileAsset } from "@sanity/asset-utils";
import config from "@/sanity.config";
import { FileAsset } from "sanity";

export function videoAssetFor(source: FileAsset) {
  return getFileAsset(source, config);
}
