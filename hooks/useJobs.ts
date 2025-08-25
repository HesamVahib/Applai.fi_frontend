import { useQuery } from "@tanstack/react-query";
import { fetchFilteredJobs } from "@/lib/jobs";
import { Job } from "@/lib/types";

export function useJobs({ searchParams }: { searchParams: URLSearchParams }) {
    // console.log("Search Params:", Object.fromEntries(searchParams));
    return useQuery<Job[]>({
        queryKey: ["jobs", searchParams.toString()],
        queryFn: async () => {
            const jobs = await fetchFilteredJobs({ searchParams });
            return jobs;
        }
    });
}