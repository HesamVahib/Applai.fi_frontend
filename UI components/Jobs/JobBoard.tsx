'use client'

import JobList from "./JobList";
import { useJobs } from "@/hooks/useJobs";
import { useSearchParams } from "next/navigation";

export default function JobBoard() {

  const searchParams = useSearchParams();
  // console.log("Search Params in JobBoard:", searchParams?.toString());

  const { data: jobs, isLoading, error } = useJobs({ searchParams });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading jobs</div>;

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full">
        <JobList jobs={jobs || []} />
      </div>
    </div>
  );
}
