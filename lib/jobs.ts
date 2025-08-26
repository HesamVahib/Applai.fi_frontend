import type { Job } from "./types";
import { api } from "./api";

export async function fetchAllJobs(): Promise<Job[]> {
    try {
        const response = await api.get("/db.json");
        return response.data.jobs;
    } catch (error) {
        console.error("Error fetching jobs:", error);
        throw error;
    }
}


