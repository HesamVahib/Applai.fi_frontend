import { HeartIcon as HeartOutline } from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolid } from "@heroicons/react/24/solid";
import FavoriteClick from "@/functions/FavoriteClick";
import { Job } from "@/lib/types";

export default function FavoriteIcon({ job }: { job: Job }) {
  const { isFavorited, handleFavoriteClick } = FavoriteClick({ job: job });

  return (
    <button
      onClick={() => handleFavoriteClick()}
    >
      <div className="flex items-center">
        {isFavorited ? (
          <HeartSolid className="h-6 w-6 md:h-8 md:w-8 text-red-500" />
        ) : (
          <HeartOutline className="h-6 w-6 md:h-8 md:w-8 text-gray-400   hover:text-red-500" />
        )}
      </div>
    </button>
  );
}
