"use client";

import { CogIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function DraftModeToggle({
  isDraftEnabled,
}: {
  isDraftEnabled: boolean;
}) {
  const [draftEnabled] = useState(isDraftEnabled);
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="group relative flex items-center text-center text-sm text-teal-700 sm:text-base">
      <div
        className={`absolute -inset-0 animate-slight_tilt
        rounded-full bg-gradient-to-r from-lime-700 via-teal-700 to-violet-700 opacity-20 blur-sm transition duration-500 ease-savage_sig ${
          isActive ? "opacity-100" : "group-hover:opacity-50"
        } `}
      />
      <div className="absolute inset-0 flex items-center rounded-full bg-white" />
      <Link
        replace
        prefetch={false}
        className="relative flex items-center space-x-2.5 rounded-full px-5 py-3 transition-all duration-1000"
        href={!draftEnabled ? "/api/preview" : "/api/exit-preview"}
        onClick={() => setIsActive(!isActive)}
      >
        <div className="flex h-6 items-center">
          <div>
            {!draftEnabled
              ? `Enabl${!isActive ? "e" : "ing"} Live Preview`
              : `Disabl${!isActive ? "e" : "ing"} Live Preview`}
            {isActive && "..."}
          </div>
        </div>
        <CogIcon
          className={`relative h-6 w-6 animate-spin ${
            isActive ? "visible" : "hidden"
          }`}
        />
      </Link>
    </div>
  );
}
