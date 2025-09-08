import { useSearchParams } from "next/navigation";

export default function resetHandler({ router, searchParams }: { router: any, searchParams: URLSearchParams }) {
  if (!searchParams) return;
  // console.log("Current Search Params:", searchParams.toString());

  const params = new URLSearchParams(searchParams.toString());
  params.delete("location");
  params.delete("category");
  params.delete("date");
  params.delete("keyword");
  params.delete("page");
  router.push(`?${params.toString()}`);
}