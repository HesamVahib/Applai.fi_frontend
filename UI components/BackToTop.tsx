'use client'

import BackToTop from "@/functions/BackToTop";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import ScrollListener from "@/functions/scrollListener";

export default function BackToTopButton() {

    const scrollDirection = ScrollListener();

  return (
    <button
      onClick={BackToTop}
      className={`fixed bottom-4 right-4 bg-blue-500 text-white p-3 md:p-4 rounded-full shadow-lg hover:bg-blue-600 transition-colors transition-opacity duration-300 ${scrollDirection === 'down' ? 'block' : 'hidden'}`}
    >
      <ChevronUpIcon className="h-5 w-5 md:h-6 md:w-6" />
    </button>
  );
}
