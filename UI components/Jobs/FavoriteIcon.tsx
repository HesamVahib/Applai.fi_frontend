import { HeartIcon as HeartOutline } from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolid } from "@heroicons/react/24/solid";
import FavoriteClick from "@/functions/FavoriteClick";
import { Job } from "@/lib/types";

export default function FavoriteIcon({ job }: { job: Job }) {
  const { isFavorited, handleFavoriteClick } = FavoriteClick({ job: job });

  const savedFavorites = localStorage.getItem('favorite_jobs');
  const favorites = savedFavorites ? JSON.parse(savedFavorites) : [];
  const isJobFavorited = favorites.some((fav: Job) => fav.id === job.id);

  return (
    <button
      onClick={() => handleFavoriteClick()}
    >
      <div className="flex items-center">
        {(isJobFavorited && isFavorited) ? (
          <HeartSolid className="h-6 w-6 md:h-8 md:w-8 text-red-500" />
        ) : (
          <HeartOutline className="h-6 w-6 md:h-8 md:w-8 text-gray-400   hover:text-red-500" />
        )}
      </div>
    </button>
  );
}
