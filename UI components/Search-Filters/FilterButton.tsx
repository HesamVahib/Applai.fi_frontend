import { ChevronDownIcon } from "@heroicons/react/24/outline";
import FilterHandler from "@/functions/searchBar/filterHandler";
import { useRouter } from "next/navigation";
import useLocations from "@/hooks/useLocations";
import useCategory from "@/hooks/useCategories";
import { useState, useEffect } from "react";
import { FilterButtonProps } from "@/lib/types";

const classes = {
  select: "h-10 border border-gray-300 text-gray-900 text-xs font-medium rounded-full block w-full py-2.5 px-4 appearance-none relative focus:outline-none bg-white hover:cursor-pointer hover:shadow-md",
  icon: "hidden md:block md:absolute md:top-1/2 md:-translate-y-1/2 md:right-4 md:z-10 md:h-4 md:w-4 md:text-gray-400"
};

export default function FilterButton({id, resetSignal}: FilterButtonProps) {

  const router = useRouter();
  const { data: locations} = useLocations();
  const { data: categories } = useCategory();

  const postDate = [ "Last Hour", "Today", "This Week", "This Month" ];

  const options = id === "location" ? locations : id === "category" ? categories : id === "date" ? postDate : [];
  // console.log("Options for", id, ":", options);
  const [ value, setValue ] = useState("All");

  useEffect(() => {
    setValue("All");
  }, [resetSignal]);

  return (
    <div className="relative w-full">
      <select
        id={id}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          FilterHandler({ e, id, router });
        }}
        className={classes.select}>
        <option value="All">All</option>
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