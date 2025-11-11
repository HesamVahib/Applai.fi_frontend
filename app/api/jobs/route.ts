import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {

    try {
        const { searchParams } = new URL(request.url);
        const page = searchParams.get("page") || "1";
        const location = searchParams.get("location") || "";
        const category = searchParams.get("category") || "";
        const title = searchParams.get("title") || "";
        const date = searchParams.get("date") || "";
        const offset = (Number(page) - 1) * 20;

        let transformedDate = date;

        if (date?.toLocaleLowerCase() === "today") {
            transformedDate = "today";
        } else if (date?.toLocaleLowerCase() === "last week") {
            transformedDate = "last_week";
        } else if (date?.toLocaleLowerCase() === "last month") {
            transformedDate = "last_month";
        } else {
            transformedDate = date;
        }

        const params = new URLSearchParams({
            limit: "20",
            skip: offset.toString(),
        });
        if (location) params.append("location", location);
        if (category) params.append("category", category);
        if (title) params.append("title", title);
        if (transformedDate) params.append("date", transformedDate);

        console.log("Fetching jobs with params:", params.toString());


        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/jobs?${params.toString()}`, {
            headers: {
                "x-api-key": process.env.API_KEY || "",
            },
            next: { revalidate: 120 }
        });
        return NextResponse.json(await response.json());
    } catch (error) {
        console.error("Error in /api/jobs route:", error);
        return NextResponse.json({ jobs: [] }, { status: 500 });
    }
}