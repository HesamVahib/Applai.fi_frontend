import SearchBar from "@/components/Searchbar/SearchBar";
import Filters from "@/components/Filters/Filters";
import JobBoard from "@/components/Jobs/JobBoard";

export default function Home() {
  return (
    <div className="p-5 relative max-w-3xl mx-auto">
      <SearchBar />
      <Filters />
      <JobBoard />
    </div>
  );
}
