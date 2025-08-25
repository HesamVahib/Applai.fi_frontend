import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import SearchHandler from "@/functions/searchBar/searchHandler";
import { useRouter, useSearchParams } from "next/navigation";

const classes = {
  input: "bg-gray-800 text-white rounded-full py-5 pl-5 pr-12 flex focus:outline-none focus:ring-2 focus:ring-blue-500 w-full placeholder:text-white-800",
  button: "absolute right-3 top-1/2 transform -translate-y-1/2",
  icon: "mr-2 h-8 w-8 text-gray-400"
};

export default function SearchBar() {
  const router = useRouter();
  const params = useSearchParams();

  return (
    <form 
      className="relative w-full"
      onSubmit={(e) => {
        e.preventDefault();
        if (!e.currentTarget.search.value) return;
        const searchedKeyword = e.currentTarget.search.value;
        e.currentTarget.reset();
        // console.log("searched word is:", searchedKeyword);
        SearchHandler({ searchedKeyword: searchedKeyword, router: router, params: params });
      }}>
      <div className="w-full flex justify-center">
        <div className="relative w-full">
          <input
            type="text"
            name="search"
            placeholder="Search Keywords: C++"
            className={classes.input}
            />
          <button
            type="submit"
            className={classes.button}
            >
            <MagnifyingGlassIcon className={classes.icon} />
          </button>
        </div>
      </div>
  </form>
  );
}
