import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function SearchBar() {
  return (
    <div className="w-full flex justify-center">
      <div className="relative w-fit">
        <input
          type="text"
          placeholder="Search..."
          className="bg-gray-800 text-white rounded-full py-2 pl-5 pr-50 flex focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
        </div>
      </div>
    </div>
  );
}
