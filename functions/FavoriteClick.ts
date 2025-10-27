'use client'

import { Job } from "@/lib/types";
import { useState, useEffect } from "react";

export default function FavoriteClick({ job }: { job: Job }) {

  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
    const savedFavorites = localStorage.getItem('favorite_jobs');
    const favorites = savedFavorites ? JSON.parse(savedFavorites) : [];
    const exists = favorites.some((fav: Job) => fav.id === job.id);
    setIsFavorited(exists);
  }, [job.id]);

  const handleFavoriteClick = () => {
    const favorites = JSON.parse(localStorage.getItem('favorite_jobs') || '[]');

    const exists = favorites.some((fav: Job) => fav.id === job.id);
    let updatedFavorites;

    if (exists) {
      updatedFavorites = favorites.filter((fav: Job) => fav.id !== job.id);
      setIsFavorited(false);
      console.log(`Job ${job.id} removed from favorites`);
      // if (updatedFavorites.length === 0 && window.location.pathname === '/') {
      //   // console.log("No favorite jobs left.");
      //   window.location.href = '/';
      // }
    } else {
      updatedFavorites = [...favorites, job];
      setIsFavorited(true);
      console.log(`Job ${job.id} added to favorites`);
    }

    localStorage.setItem('favorite_jobs', JSON.stringify(updatedFavorites));
  };

  return { isFavorited, handleFavoriteClick };
}
