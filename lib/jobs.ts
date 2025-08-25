import type { Job } from "./types";
import { api } from "./api";

export async function fetchAllJobs(): Promise<Job[]> {
    try {
        const response = await api.get("/jobs");
        return response.data;
    } catch (error) {
        console.error("Error fetching jobs:", error);
        throw error;
    }
}
