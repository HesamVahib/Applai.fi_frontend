import type { GetQueryParams, Job } from "./types";
import { api } from "./api";

export async function fetchAllJobs({ offset, location, category, title }: GetQueryParams): Promise<Job[]> {
    try {
        // console.log("fetchAllJobs called with:", { offset, location, category, title });
        
        const response = await api.get(`/api/jobs?limit=20`, {
            params: {
                skip: offset,
                location,
                category,
                title
            },
        });

        // console.log("API response:", response.data);
        return response.data.jobs || [];
    } catch (error) {
        console.error("Error fetching jobs:", error);
        return [];
    }
}


