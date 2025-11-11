import { Job } from "@/lib/types";

export default function filteredJobs({ searchParams, jobs = [] }: { searchParams: URLSearchParams, jobs: Job[] }) {
    const keyword = searchParams.get("keyword");
    const location = searchParams.get("location");
    const date = searchParams.get("date");
    const category = searchParams.get("category");

    console.log("Filtering jobs with:", { keyword, location, date, category });

    return jobs.filter((job) => {
        const matchesKeyword = keyword ? job.title.toLowerCase().includes(keyword.toLowerCase()) : true;
        const matchesLocation = location ? job.location?.toLowerCase().includes(location.toLowerCase()) : true;
        const matchesDate = date ? job.date === date : true;
        const matchesCategory = category ? job.category.toLowerCase().includes(category.toLowerCase()) : true;

        return matchesKeyword && matchesLocation && matchesDate && matchesCategory;
    });
}
