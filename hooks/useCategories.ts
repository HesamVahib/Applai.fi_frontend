import { useQuery } from "@tanstack/react-query";
import { fetchAllJobs } from "@/lib/jobs";

export default function useCategory() {
    return useQuery({
        queryKey: ["categories"],
        queryFn: async () => {
            const response = await fetchAllJobs();
            const categories = Array.from(new Set(response.map((job) => job.category))).sort();
            return categories;
        },
    });
}
