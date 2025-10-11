'use client'

import { Job } from "@/lib/types";
import { useState } from "react";

export default function FavoriteClick({ job }: { job: Job }) {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavoriteClick = () => {
    const favorites = JSON.parse(localStorage.getItem('favorite_jobs') || '[]');

    const exists = favorites.some((fav: Job) => fav.id === job.id);
    let updatedFavorites;

    if (exists) {
      updatedFavorites = favorites.filter((fav: Job) => fav.id !== job.id);
      setIsFavorited(false);
      console.log(`Job ${job.id} removed from favorites`);
    } else {
      updatedFavorites = [...favorites, job];
      setIsFavorited(true);
      console.log(`Job ${job.id} added to favorites`);
    }

    localStorage.setItem('favorite_jobs', JSON.stringify(updatedFavorites));
    // setIsFavorited(!isFavorited);
    //   if (isFavorited) {
    //     localStorage.setItem('favorite_job', JSON.stringify(job));
    //   }
    //   else {
    //     localStorage.removeItem('favorite_job');
    //   }
    // console.log(`Job ${job.id} ${isFavorited ? "removed from" : "added to"} favorites`);
    // console.log(job);
  };

  return { isFavorited, handleFavoriteClick };
}
