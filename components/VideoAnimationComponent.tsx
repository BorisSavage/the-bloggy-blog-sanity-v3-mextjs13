"use client";

import { videoAssetFor } from "@/lib/videoAssetFor";
import { useEffect } from "react";

const VideoAnimationComponent = ({ value }: { value: video }) => {
  useEffect(() => {
    const loadLozad = async () => {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const lozad = require("lozad");
      const observer = lozad();
      observer.observe();
    };

    loadLozad();
  });

  if (!value.webm || !value.fallback) {
    return;
  }
  const webmAsset = videoAssetFor(value.webm);
  const fallbackAsset = videoAssetFor(value.fallback);

  return (
    <video className="lozad" loop muted autoPlay playsInline>
      <source data-src={webmAsset.url} type={`video/${webmAsset.extension}`} />
      <source
        data-src={fallbackAsset.url}
        type={`video/${fallbackAsset.extension}`}
      />
    </video>
  );
};

export default VideoAnimationComponent;
