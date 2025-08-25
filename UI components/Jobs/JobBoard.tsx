'use client'

import JobList from "./JobList";
import { useJobs } from "@/hooks/useJobs";
import { useSearchParams } from "next/navigation";
import filteredJobs from "@/functions/searchBar/filteredJobs";

export default function JobBoard() {

  const searchParams = useSearchParams();

  const { data: jobs, isLoading, error } = useJobs();
  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading jobs</div>;


  const jobsFiltered = filteredJobs({ searchParams, jobs: jobs || [] });


  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full">
        {
          jobsFiltered?.length === 0 ? (
            <div className="text-gray-500 text-center pt-4 text-lg">No jobs found</div>
          ) : (
            <JobList jobs={jobsFiltered || []} />
          )
        }
      </div>
    </div>
  );
}
