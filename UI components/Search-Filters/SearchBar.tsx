import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import SearchHandler from "@/functions/searchBar/searchHandler";
import { useRouter, useSearchParams } from "next/navigation";

const classes = {
  input: "bg-white text-[var(--color-gray)] border border-[var(--color-stroke)] rounded-xl pb-3 pt-4 pl-5 pr-12 flex focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]/50 w-full placeholder:text-[var(--color-gray)]/40 placeholder:font-athiti placeholder:text-[23px]",
  button: "bg-[var(--color-gray)] rounded-lg absolute right-3 top-1/2 transform -translate-y-1/2",
  icon: "h-5 w-5 text-white m-0.5",
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
            placeholder="Search Keyword"
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
