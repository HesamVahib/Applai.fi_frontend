import { Job } from "@/lib/types";

export default function filteredJobs({ searchParams, jobs = [] }: { searchParams: URLSearchParams, jobs: Job[] }) {
    const keyword = searchParams.get("keyword");
    const city = searchParams.get("city");
    const date = searchParams.get("date");
    const category = searchParams.get("category");

    return jobs.filter((job) => {
        const matchesKeyword = keyword ? job.title.toLowerCase().includes(keyword.toLowerCase()) : true;
        const matchesCity = city ? job.city.toLowerCase().includes(city.toLowerCase()) : true;
        const matchesDate = date ? job.date === date : true;
        const matchesCategory = category ? job.category.toLowerCase().includes(category.toLowerCase()) : true;

        return matchesKeyword && matchesCity && matchesDate && matchesCategory;
    });
}
