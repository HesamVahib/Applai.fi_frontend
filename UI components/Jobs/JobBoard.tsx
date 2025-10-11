"use client";

import JobList from "./JobList";
import { useJobs } from "@/hooks/useJobs";
import { useSearchParams } from "next/navigation";
// import filteredJobs from "@/functions/searchBar/filteredJobs";

export default function JobBoard() {
  const searchParams = useSearchParams();

  const page = searchParams.get("page") || 1;
  const location = searchParams.get("location") || "";
  const category = searchParams.get("category") || "";

  const title = searchParams.get("title") || "";
  const offset = (Number(page) - 1) * 20;

  

  // console.log("Current page:", offset);

  const {
      data: jobs,
      isLoading,
      error,
        } = useJobs({ offset: offset, location, category, title });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading jobs</div>;

  if (!jobs || jobs.length === 0) {
    return (
      <div className="text-gray-500 text-center pt-4 text-lg">
        No jobs found
      </div>
    );
  }

  const favorite_jobs = localStorage.getItem('favorite_jobs');
  const parsedFavorites = favorite_jobs ? JSON.parse(favorite_jobs) : [];

  console.log("Favorite jobs from localStorage:", parsedFavorites);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full">
        {
          parsedFavorites.length > 0 ? <JobList jobs={parsedFavorites} /> : <JobList jobs={jobs || []} />
        }
      </div>
    </div>
  );
}
