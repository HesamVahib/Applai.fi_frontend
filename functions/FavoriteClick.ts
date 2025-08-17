'use client'

import { useState } from "react";

export default function FavoriteClick({ jobId }: { jobId: number }) {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorited(!isFavorited);
    console.log(`Job ${jobId} ${isFavorited ? "removed from" : "added to"} favorites`);
  };

  return { isFavorited, handleFavoriteClick };
}
