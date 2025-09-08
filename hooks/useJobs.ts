import { useQuery } from "@tanstack/react-query";
import { fetchAllJobs } from "@/lib/jobs";
import { Job } from "@/lib/types";

export function useJobs({ offset }: { offset: number }) {
    // console.log("Search Params:", Object.fromEntries(searchParams));
    return useQuery<Job[]>({
        queryKey: ["jobs"],
        queryFn: () => fetchAllJobs({ offset }),
    });
}