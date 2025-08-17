import SearchBlock from "@/UI components/Search-Filters/SearchBlock";
import JobBoard from "@/UI components/Jobs/JobBoard";
import BackToTop from "@/UI components/BackToTop";

export default function Home() {
  return (
    <div className="p-5 relative max-w-3xl mx-auto">
      <SearchBlock />
      <JobBoard />
      <BackToTop />
    </div>
  );
}
