'use client'

import { MagnifyingGlassIcon, FunnelIcon } from "@heroicons/react/24/outline";
import SearchHandler from "@/functions/searchBar/searchHandler";

export default function SearchBar() {
  return (
    <form 
      className="relative w-full"
      onSubmit={(e) => {
        e.preventDefault();
        console.log(e.currentTarget.search.value);
      }}>
      <div className="w-full flex justify-center">
        <div className="relative w-full">
          <input
            type="text"
            name="search"
            placeholder="Search Keywords: C++"
            className="bg-gray-800 text-white rounded-full py-5 pl-5 pr-12 flex focus:outline-none focus:ring-2 focus:ring-blue-500 w-full placeholder:text-white-800"
            onChange={(e) => SearchHandler({ searched: e.target.value })}
            />
          <button
            type="submit"
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
            >
            <MagnifyingGlassIcon className="mr-2 h-8 w-8 text-gray-400" />
          </button>
        </div>
      </div>
  </form>

  );
}
