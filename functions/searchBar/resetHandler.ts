import { useSearchParams } from "next/navigation";

export default function resetHandler({ router, searchParams }: { router: any, searchParams: URLSearchParams }) {
  if (!searchParams) return;
  // console.log("Current Search Params:", searchParams.toString());

  const params = new URLSearchParams(searchParams.toString());
  params.delete("city");
  params.delete("category");
  params.delete("date");
  router.push(`?${params.toString()}`);
}