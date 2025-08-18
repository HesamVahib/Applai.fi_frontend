import ResetHandler from "@/functions/searchBar/resetHandler"

export default function ResetFilterButton() {
  return (
    <button
      onClick={ResetHandler}
      className="h-10 flex items-center justify-center border border-gray-300 text-white dark:text-green-300 font-light md:font-normal rounded-full w-auto py-2.5 px-4 appearance-none relative focus:outline-none bg-blue-500 hover:bg-blue-600">
      Reset
    </button>
  );
};