import JobCard from "./JobCard";

export default function JobList({ jobs }: { jobs: Array<{ id: number; title: string; company: string; location: string; datePosted: string; link: string; }> }) {
  return (
    <div className="w-full">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}
