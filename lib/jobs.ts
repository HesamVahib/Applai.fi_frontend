import type { GetQueryParams, Job } from "./types";
import { api } from "./api";

export async function fetchAllJobs({ offset, location, category, title }: GetQueryParams): Promise<Job[]> {
    try {
        const response = await api.get(`/jobs?limit=20`, {
            params: {
                skip: offset,
                location,
                category,
                title
            }
        });
        if (response.status === 404) {
            return [];
        }
        return response.data.jobs;
    } catch (error) {
        console.error("Error fetching jobs:", error);
        throw error;
    }
}


