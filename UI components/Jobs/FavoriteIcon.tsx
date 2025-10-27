import { HeartIcon as HeartOutline } from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolid } from "@heroicons/react/24/solid";
import FavoriteClick from "@/functions/FavoriteClick";
import { Job } from "@/lib/types";

export default function FavoriteIcon({ job }: { job: Job }) {
  const { isFavorited, handleFavoriteClick } = FavoriteClick({ job: job });

  const savedFavorites = localStorage.getItem('favorite_jobs');
  const favorites = savedFavorites ? JSON.parse(savedFavorites) : [];
  const isJobFavorited = favorites.some((fav: Job) => fav.id === job.id);

  // console.log(`Rendering FavoriteIcon: Job ID ${job.id}, isFavorited: ${isFavorited}, isJobFavorited: ${isJobFavorited}`);

  return (
    <button
      onClick={() => handleFavoriteClick()}
      className="cursor-pointer"
    >{(isJobFavorited) ? (
      <div className="flex items-center justify-center w-7.5 h-7.5 rounded-full bg-[var(--color-secondary)] transition-colors duration-200"> 
        <HeartSolid className="h-4 w-4 md:h-4 md:w-4 text-white " />
      </div>) : (
      <div className="flex items-center justify-center w-7 h-7 rounded-full bg-[var(--color-background2)] hover:bg-[var(--color-secondary)]/30 transition-colors duration-200">
        <HeartSolid className="h-4 w-4 md:h-4 md:w-4 text-white" />
      </div>
    )}
    </button>
  );
}
