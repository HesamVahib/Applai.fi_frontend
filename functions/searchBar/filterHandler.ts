import { useRouter } from "next/navigation";

export default function FilterHandler({ e, id, router }
  : { e: React.ChangeEvent<HTMLSelectElement>, id: string, router: ReturnType<typeof useRouter> })
  {
    // console.log("Filter button clicked");
    
    if (e.target.value === "All") {
      // console.log("Filter reset for:", id);
      e.preventDefault();
      const params = new URLSearchParams(window.location.search);
      params.delete(id);
      router.push(`?${params.toString()}`);
      return;
    }
    
    e.preventDefault();
    const selectedValues = Array.from(e.target.selectedOptions, option => option.value);
    const params = new URLSearchParams(window.location.search);
    params.set(id, selectedValues.join(','));

    const order = ["city", "job", "page"];

    const entries = [...params.entries()];

    // console.log(entries);

    const sortedEntries = entries.sort(([a], [b]) => {
      const indexA = order.indexOf(a);
      const indexB = order.indexOf(b);

      if (indexA === -1 && indexB === -1) return a.localeCompare(b);
      if (indexA === -1) return 1;
      if (indexB === -1) return -1;
      return indexA - indexB;
    });

    const finalParams = new URLSearchParams(sortedEntries);

    router.push(`?${finalParams.toString()}`);
}
