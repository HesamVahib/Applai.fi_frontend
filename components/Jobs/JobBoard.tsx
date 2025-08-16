
const jobs = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
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
        {/* Job listings will go here */}
        {jobs.map((job) => (
          <div key={job.id} className="border-b border-gray-300 py-4">
            <h3 className="text-lg font-semibold">{job.title}</h3>
            <p className="text-sm text-gray-500">
              {job.company} - {job.location} - {job.datePosted}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
