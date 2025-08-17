import { useQuery } from "@tanstack/react-query";
import { fetchJobs } from "@/lib/jobs";
import { Job } from "@/lib/types";

export function useJobs() {
    return useQuery<Job[]>({
        queryKey: ["jobs"],
        queryFn: fetchJobs,
    });
}