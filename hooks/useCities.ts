import { useQuery } from "@tanstack/react-query";
import { fetchAllJobs } from "@/lib/jobs";

export default function useCity() {
    return useQuery({
        queryKey: ["cities"],
        queryFn: async () => {
            const response = await fetchAllJobs();
            const cities = Array.from(new Set(response.map((job) => job.city))).sort();
            return cities;
        },
    });
}
