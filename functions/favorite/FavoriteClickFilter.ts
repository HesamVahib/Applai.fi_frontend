'use client';

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";


export default function FavoriteClickFilter() {
    const [isFavoritedFiltered, setIsFavoritedFiltered] = useState(false);

    const router = useRouter();
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams.toString());
    const isFavoriteSet = searchParams.get("favorite") === "true";
    

    const toggleFavoriteFilter = () => {
        console.log("Toggling favorite filter:", isFavoritedFiltered);
        setIsFavoritedFiltered(!isFavoritedFiltered);
        if (isFavoriteSet && isFavoritedFiltered) {
            params.delete("favorite");
            router.push(`?${params.toString()}`);
            return;
        }
        params.set("favorite", (!isFavoritedFiltered).toString());
        router.push(`?${params.toString()}`);
    }

    return { toggleFavoriteFilter, isFavoritedFiltered };
}