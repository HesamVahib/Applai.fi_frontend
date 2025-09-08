import type { Job } from "./types";
import { api } from "./api";

export async function fetchAllJobs({ offset }: { offset: number }): Promise<Job[]> {
    try {
        const response = await api.get(`/jobs?skip=${offset}&limit=20`);
        return response.data.jobs;
    } catch (error) {
        console.error("Error fetching jobs:", error);
        throw error;
    }
}


