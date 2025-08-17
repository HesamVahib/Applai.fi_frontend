'use client'

import JobList from "./JobList";
import { useJobs } from "@/hooks/useJobs";

export default function JobBoard() {
  
  const { data: jobs, isLoading, error } = useJobs();

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
