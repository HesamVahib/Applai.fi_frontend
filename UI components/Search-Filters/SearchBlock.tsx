'use client'

import SearchBar from "./SearchBar";
import Filters from "./Filters";
import ScrollListener from "@/functions/scrollListener";

export default function SearchBlock() {
    const scrollDirection = ScrollListener();

  return (
    <div className={`w-full relative ${scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'} transition-transform duration-300`}>
      <SearchBar />
      <Filters />
    </div>
  );
}
