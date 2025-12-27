"use client";

import { ArrowRightCircleIcon, ArrowLeftCircleIcon } from "@heroicons/react/24/solid";
import { useSearchParams } from "next/navigation";
import { previousPage, nextPage } from "@/functions/PageNavigator";

export default function PagesNavigator() {
  const params = useSearchParams();

  const pageNum = params.get("page") ? parseInt(params.get("page")!) : 1;

  return (
    <div className="flex items-center justify-center gap-4 mb-4">
      <button
        className="bg-gray-300 hover:cursor-pointer rounded-md px-3 py-1"
        onClick={() => {
          previousPage();
        }}
      >
        <ArrowLeftCircleIcon className="h-6 w-6 text-gray-700" />
      </button>
      <div className="bg-gray-700 px-3 py-1 rounded-md text-white">
        Page {pageNum} of 10
      </div>
      <button
        className="bg-gray-300 hover:cursor-pointer rounded-md px-3 py-1"
        onClick={() => {
          nextPage();
        }}
      >
        <ArrowRightCircleIcon className="h-6 w-6 text-gray-700" />
      </button>
    </div>
  );
}
