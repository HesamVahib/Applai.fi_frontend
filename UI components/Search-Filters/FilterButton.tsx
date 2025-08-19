import { ChevronDownIcon } from "@heroicons/react/24/outline";
import FilterHandler from "@/functions/searchBar/filterHandler";
import { useRouter } from "next/navigation";

type FilterButtonProps = {
    id: string;
    name: string;
};

export default function FilterButton({id, name}: FilterButtonProps) {

  const router = useRouter();

  return (
    <div className="relative w-full">
      <select
        id={id}
        defaultValue={name}
        onChange={(e) => {
          FilterHandler({ e, id, router });
        }}
        className="h-10 border border-gray-300 text-gray-900 text-xs font-medium rounded-full block w-full py-2.5 px-4 appearance-none relative focus:outline-none bg-white">
        <option value={`${name}1`}>{`${name}1`}</option>
        <option value={`${name}2`}>{`${name}2`}</option>
        <option value={`${name}3`}>{`${name}3`}</option>
        <option value={`${name}4`}>{`${name}4`}</option>
    </select>
    <ChevronDownIcon className="hidden md:block md:absolute md:top-1/2 md:-translate-y-1/2 md:right-4 md:z-10 md:h-4 md:w-4 md:text-gray-400 " />
    </div>
  );
}