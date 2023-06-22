import { FireIcon } from "@heroicons/react/24/solid";
import { SanityAsset } from "@sanity/image-url/lib/types/types";

export default function Logo(props: SanityAsset) {
  return (
    <div className="flex items-center px-2">
      <FireIcon className="h-12 w-12 animate-pulse text-cyan-300 drop-shadow-sm" />
      {props.renderDefault(props)}
    </div>
  );
}
