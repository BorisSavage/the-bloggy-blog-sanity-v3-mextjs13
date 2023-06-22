import imageUrlBuilder from "@sanity/image-url";
import { getClient } from "./sanity.client";

const bulider = imageUrlBuilder(getClient());

export default function urlFor(source: mainImage) {
  return bulider.image(source);
}
