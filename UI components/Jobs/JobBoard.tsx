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
    // console.log("No jobs found");
    return (
      <div className="text-gray-500 text-center pt-4 text-lg">
        No jobs found
      </div>
    );
  }

  // console.log("Jobs data:", jobs);

  // const jobsFiltered = filteredJobs({ searchParams, jobs: jobs || [] });

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full">
        {
          <JobList jobs={jobs || []} />
          // jobsFiltered?.length === 0 ? (
          //   <div className="text-gray-500 text-center pt-4 text-lg">No jobs found</div>
          // ) : (
          //   <JobList jobs={jobsFiltered || []} />
          // )
        }
      </div>
    </div>
  );
}
