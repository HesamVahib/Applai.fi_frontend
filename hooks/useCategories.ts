// import { useQuery } from "@tanstack/react-query";
// import { fetchAllJobs } from "@/lib/jobs";

export default function useCategory() {
    // return useQuery({
    //     queryKey: ["categories"],
    //     queryFn: async () => {
    //         const response = await fetchAllJobs({ offset: 0 });
    //         const categories = Array.from(new Set(response.map((job) => job.category))).sort();
    //         return categories;
    //     },
    //     refetchOnWindowFocus: false,
    //     staleTime: 5 * 60 * 60 * 1000, // 5 hours
    // });

    const categories = [
        "Internship/ Summer Jobs/ Trainee",
        "Sales",
        "Building and Construction",
        "Manufacturing",
        "Healthcare",
        "Community and Social Services",
        "Administration",
        "Engineering",
        "IT",
        "Logistics",
        "Other",
        "Industrial Work",
        "Finance",
        "Management",
        "Hotel and Restaurant Work",
        "Customer Service",
        "Installation and Maintenance",
        "Property Maintenance",
        "Technology",
        "Education"
        ]
    
    return { data: categories };

}
