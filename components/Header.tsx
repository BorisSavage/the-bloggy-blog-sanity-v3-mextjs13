import { FireIcon } from "@heroicons/react/24/solid";
import { draftMode } from "next/headers";
import Link from "next/link";
import DraftModeToggle from "./DraftModeToggle";

export default function Header() {
  const { isEnabled } = draftMode();
  return (
    <header className="flex items-center justify-between space-x-2 px-10 py-5 font-bold">
      <div>
        <Link href="/" className="flex items-center space-x-2">
          <FireIcon className="h-12 w-12 text-cyan-700" />
          <h1>Bloggy Blog</h1>
        </Link>
      </div>
      <DraftModeToggle isDraftEnabled={isEnabled} />
    </header>
  );
}
