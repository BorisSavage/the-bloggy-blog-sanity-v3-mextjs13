import { ArrowUturnUpIcon } from "@heroicons/react/24/solid";
import { SanityAsset } from "@sanity/image-url/lib/types/types";
import Link from "next/link";

export default function StudioNavbar(props: SanityAsset) {
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <Link href="/" className="flex items-center text-teal-300">
          <ArrowUturnUpIcon className="mr-2 h-6 w-6 text-teal-300" />
          Go To Website
        </Link>
      </div>
      {props.renderDefault(props)}
    </div>
  );
}
