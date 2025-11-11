import type { GetQueryParams, Job } from "./types";
import { api } from "./api";

export async function fetchAllJobs({ offset, location, category, title, date }: GetQueryParams): Promise<Job[]> {
    console.log("fetchAllJobs called with:", { offset, location, category, title, date });
    try {
        // console.log("fetchAllJobs called with:", { offset, location, category, title });
        // category = category ? decodeURIComponent(category) : category;
        const response = await api.get(`/api/jobs?limit=20`, {
            params: {
                skip: offset,
                location,
                category,
                title,
                date,
            },
        });

        // console.log("API response:", response.data);
        return response.data.jobs || [];
    } catch (error) {
        console.error("Error fetching jobs:", error);
        return [];
    }
}


