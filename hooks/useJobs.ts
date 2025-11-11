import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { fetchAllJobs } from "@/lib/jobs";
import { Job, GetQueryParams } from "@/lib/types";


export function useJobs({ offset, location, category, title, date }: GetQueryParams) {

    console.log("useJobs called with:", { offset, location, category, title, date });

    return useQuery<Job[]>({
        queryKey: ["jobs", { offset, location, category, title, date }],
        queryFn: () => fetchAllJobs({ offset, location, category, title, date}),
        placeholderData: keepPreviousData,
        refetchOnWindowFocus: false,
        staleTime: 12 * 60 * 60 * 1000,
    });
}