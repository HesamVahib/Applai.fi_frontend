'use client'

import SearchBar from "./SearchBar";
import Filters from "./FiltersBlock";
import ScrollListener from "@/functions/scrollListener";

export default function SearchBlock() {

  return (
    <div className={`w-full relative`}>
      <SearchBar />
      <Filters />
    </div>
  );
}
