'use client'

import JobList from "./JobList";
import { useJobs } from "@/hooks/useJobs";
import { useSearchParams } from "next/navigation";

export default function JobBoard() {

  const searchParams = useSearchParams();
  // console.log("Search Params in JobBoard:", searchParams?.toString());

  const { data: jobs, isLoading, error } = useJobs({ searchParams });

  const keyword = searchParams.get("keyword");
  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading jobs</div>;

  const searchedJobs = jobs?.filter((job) => {
    if (!keyword) return true;
    const matches = job.title?.toLowerCase().includes(keyword.toLowerCase());
    // console.log(job.title, matches); // optional debug
    return matches;
  });


  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full">
        {
          searchedJobs?.length === 0 ? (
            <div className="text-gray-500 text-center pt-4 text-lg">No jobs found</div>
          ) : (
            <JobList jobs={searchedJobs || []} />
          )
        }
      </div>
    </div>
  );
}
