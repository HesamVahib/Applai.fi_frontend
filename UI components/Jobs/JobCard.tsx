import FavoriteIcon from "./FavoriteIcon";

export default function JobCard({ job } : { job: { id: number; title: string; company: string; location: string; datePosted: string; link: string; } }) {
  return (
    <div className="flex justify-between items-center border-b-2 pb-3 border-gray-300 py-4">
    <div key={job.id} className="">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={job.link}
        className="text-blue-500 underline">
        <h3 className="text-lg font-semibold">{job.title}</h3>
      </a>
      <p className="text-sm text-gray-500 mt-1">
        {job.company} - {job.location} - {job.datePosted}
      </p>
    </div>
    <FavoriteIcon jobId={job.id} />
    </div>

  );
}
