import SearchBlock from "@/UI components/Search-Filters/SearchBlock";
import JobBoard from "@/UI components/Jobs/JobBoard";
import BackToTop from "@/UI components/BackToTop";
import LoadingSpinner from "@/UI components/LoadingSpinner";
import { Suspense } from "react";
import HomeSloganText from "@/UI components/HomeSlogan";

export default function Home() {
  return (
    <div className="p-5 relative max-w-3xl mx-auto">
      <Suspense fallback={<LoadingSpinner message="Loading search..." />}>
        <HomeSloganText />
      </Suspense>
      <Suspense fallback={<LoadingSpinner message="Loading search..." />}>
        <SearchBlock />
      </Suspense>
      <Suspense fallback={<LoadingSpinner message="Loading jobs..." />}>
        <JobBoard />
      </Suspense>
      <BackToTop />
    </div>
  );
}
