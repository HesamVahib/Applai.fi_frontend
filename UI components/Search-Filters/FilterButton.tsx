import { ChevronDownIcon } from "@heroicons/react/24/outline";
import FilterHandler from "@/functions/searchBar/filterHandler";
import { useRouter } from "next/navigation";
import useLocations from "@/hooks/useLocations";
import useCategory from "@/hooks/useCategories";
import { useState, useEffect } from "react";
import { FilterButtonProps } from "@/lib/types";

const classes = {
  select: "h-7 border border-[var(--color-stroke)] text-[var(--color-gray)] text-[14px] font-medium rounded-full block w-full px-3 appearance-none relative focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]/50 bg-[var(--color-background2)] hover:cursor-pointer hover:shadow-md font-athiti",
  icon: "hidden md:block md:absolute md:top-4 md:-translate-y-2 md:right-4 md:z-10 md:h-4 md:w-4 md:text-gray-400 stroke-[var(--color-gray)] stroke-3 bg-[var(--color-background2)] pointer-events-none",
};

export default function FilterButton({id, resetSignal}: FilterButtonProps) {

  const router = useRouter();

  const [ value, setValue ] = useState("All");
  const { error, isLoading, data: locations} = useLocations();
  const { data: categories } = useCategory();

  useEffect(() => {
    setValue("All");
  }, [resetSignal]);

  const postDate = [ "Today", "Last Week", "Last Month" ];

  const options = id === "location" ? locations : id === "category" ? categories : id === "date" ? postDate : [];
  // console.log("Options for", id, ":", options);
  
  if (isLoading)
    return (
    <div className="w-full flex justify-center items-center relative">
      <select
        id={id}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          FilterHandler({ e, id, router });
        }}
        className={classes.select}>
        <option value="All">
          {id === "location" ? "Filter City" : id === "category" ? "Filter Category" : "Filter Date"}
          </option>
            {
            options?.map((item, index) => (
              <option key={index} value={item}>
                {item}
            </option>
              ))
            }
    </select>
    <ChevronDownIcon className={classes.icon} />
    </div>
  );

  if (error) return <div>Error loading {id}</div>;

  return (
    <div className="w-full flex justify-center items-center relative">
      <select
        id={id}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          FilterHandler({ e, id, router });
        }}
        className={classes.select}>
        <option value="All">
          {id === "location" ? "Filter City" : id === "category" ? "Filter Category" : "Filter Date"}
          </option>
            {
            options?.map((item, index) => (
              <option key={index} value={item}>
                {item}
            </option>
              ))
            }
    </select>
    <ChevronDownIcon className={classes.icon} />
    </div>
  );
}