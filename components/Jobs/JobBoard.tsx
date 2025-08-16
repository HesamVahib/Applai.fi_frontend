'use client'

import JobList from "./JobList";
import ScrollListener from "@/functions/scrollListener";

const jobs = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    link: "https://www.google.com",
    title: ["Software Engineer", "Product Manager", "UX Designer"][i % 3],
    category: ["Engineering", "Product", "Design"][i % 3],
    company: ["Tech Company", "Another Tech Company", "Design Studio"][i % 3],
    location: ["Helsinki", "On-Remote", "Turku"][i % 3],
    datePosted: `${(i % 7) + 1} days ago`,
}));

export default function JobBoard() {

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full">
        <JobList jobs={jobs} />
      </div>
    </div>
  );
}
