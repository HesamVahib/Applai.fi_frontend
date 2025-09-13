import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { fetchAllJobs } from "@/lib/jobs";
import { Job, GetQueryParams } from "@/lib/types";


export function useJobs({ offset, location, category, title }: GetQueryParams) {
    return useQuery<Job[]>({
        queryKey: ["jobs", { offset, location, category, title }],
        queryFn: () => fetchAllJobs(),
        placeholderData: keepPreviousData,
        staleTime: 5 * 60 * 1000,
    });
}