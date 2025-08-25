import JobCard from "./JobCard";
import { Job } from "@/lib/types";
import { useSearchParams } from "next/navigation";

export default function JobList({ jobs }: { jobs: Job[] }) {

  return (
    <div className="w-full">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}
