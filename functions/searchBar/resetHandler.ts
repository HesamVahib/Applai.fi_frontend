
export default function resetHandler({ router, searchParams }: { router: any, searchParams: URLSearchParams }) {
  if (!searchParams) return;
  // console.log("Current Search Params:", searchParams.toString());

  const params = new URLSearchParams(searchParams.toString());
  params.delete("location");
  params.delete("category");
  params.delete("date");
  params.delete("title");
  params.delete("page");
  params.delete("favorite");
  router.push(`?${params.toString()}`);
}