import { useRouter } from "next/navigation";

export default function FilterHandler({ e, id, router }
  : { e: React.ChangeEvent<HTMLSelectElement>, id: string, router: ReturnType<typeof useRouter> })
  {
    // console.log("Filter button clicked");

    e.preventDefault();
    const selectedValues = Array.from(e.target.selectedOptions, option => option.value);
    const params = new URLSearchParams(window.location.search);
    params.set(id, selectedValues.join(','));

    const order = ["city", "job", "page"];

    const entries = [...params.entries()];

    console.log(entries);

    const sortedEntries = entries.sort(([a], [b]) => {
      const indexA = order.indexOf(a);
      console.log(indexA);
      const indexB = order.indexOf(b);
      console.log(indexB);

      if (indexA === -1 && indexB === -1) return a.localeCompare(b); // both unknown → alphabetical
      if (indexA === -1) return 1; // a is unknown → push after known
      if (indexB === -1) return -1; // b is unknown → push after known
      return indexA - indexB; // both known → follow order array
    });

    const finalParams = new URLSearchParams(sortedEntries);

    router.push(`?${finalParams.toString()}`);
}
