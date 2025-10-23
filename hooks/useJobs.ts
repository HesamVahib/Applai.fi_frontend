import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { fetchAllJobs } from "@/lib/jobs";
import { Job, GetQueryParams } from "@/lib/types";


export function useJobs({ offset, location, category, title }: GetQueryParams) {

    return useQuery<Job[]>({
        queryKey: ["jobs", { offset, location, category, title }],
        queryFn: () => fetchAllJobs({ offset, location, category, title }),
        placeholderData: keepPreviousData,
        refetchOnWindowFocus: false,
        staleTime: 12 * 60 * 60 * 1000,
    });
}