import { User } from "./types";
import { api } from "./api";

export async function fetchUser(userId: number): Promise<User> {
    try {
        const response = await api.get(`/users/${userId}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching user:", error);
        throw error;
    }
}
