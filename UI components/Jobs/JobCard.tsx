import FavoriteIcon from "./FavoriteIcon";
import { Job } from "@/lib/types";
import { ClockIcon } from '@heroicons/react/24/outline';

const classes = {
  card: "pl-4 pr-3 pt-2 pb-2 bg-white rounded-xl border border-[var(--color-stroke)] shadow-md hover:shadow-lg transition-shadow duration-200 mb-3",
  location: "text-[13px] text-[var(--color-gray)]*1.1 bg-[var(--color-background2)] inline-block px-2 py-0.5 rounded-xl font-athiti mb-1 mt-1.5",
  title: "text-[27px] font-black font-athiti mb-0.5",
  date: "text-[13px] font-athiti text-[var(--color-gray)]/90",
  category: "border border-[var(--color-stroke)] rounded-full py-1 font-athiti text-[var(--color-gray)]*1.1 text-[13px]",
};

export default function JobCard({ job } : { job: Job }) {

  const createdTime = new Date(job.created_at);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - createdTime.getTime()));

  const timeConverted = Math.floor(diffInSeconds / 1000) < 86400 ? "Today" :
                        Math.floor(diffInSeconds / (1000 * 60 * 60 * 24)) < 3 ? " Days ago" :
                        Math.floor(diffInSeconds / (1000 * 60 * 60 * 24)) < 7 ? "Last Week" : "Last Month"
                        ;


  return (
    <article className={classes.card}>
      <div className="flex border-gray-300 py-2">
        <div className="flex items-start flex-col">
            <div className="-mt-3 mb-1.5">
                <p className={classes.location}>
                {job.location}
              </p>
            </div>
            <div key={job.id} className="">
              <a
                target="_blank"
              rel="noopener noreferrer"
              href={job.link}
              className="text-[var(--color-primary)]">
              <h3 className={classes.title}>
                {job.title.length > 30 ? job.title.substring(0, 30) + '...' : job.title}
              </h3>
            </a>
            </div>
            <div className=" mt-2 flex items-center">
              <ClockIcon className="inline-block w-3 h-3 mr-1 text-[var(--color-gray)]/70" />
              <span className={classes.date}>
                {timeConverted}
              </span>
            </div>
        </div>
      <div className="mr-2 ml-auto flex items-center justify-center gap-3">
        <div className={classes.category}>
        <span className="px-3">
            {job.category}
        </span>
        </div>
        <FavoriteIcon job={job} />
      </div>
      </div>
    </article>

  );
}
