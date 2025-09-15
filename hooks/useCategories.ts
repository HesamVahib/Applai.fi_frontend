import { useQuery } from "@tanstack/react-query";
import { fetchAllJobs } from "@/lib/jobs";

export default function useCategory() {
    return useQuery({
        queryKey: ["categories"],
        queryFn: async () => {
            const response = await fetchAllJobs({ offset: 0 });
            const categories = Array.from(new Set(response.map((job) => job.category))).sort();
            return categories;
        },
        refetchOnWindowFocus: false,
        staleTime: 5 * 60 * 60 * 1000, // 5 hours
    });
}
