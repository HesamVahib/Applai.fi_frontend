import resetHandler from "@/functions/searchBar/resetHandler";
import { useRouter, useSearchParams } from "next/navigation";

export default function ResetFilterButton({ resetSignal, setResetSignal } : { resetSignal: boolean; setResetSignal: (value: boolean) => void }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  return (
    <button
      onClick={() => {
        setResetSignal(!resetSignal);
        // console.log(resetSignal);
        resetHandler({ router, searchParams });
      }}
      className="h-10 flex items-center justify-center border border-gray-300 text-white font-light md:font-normal rounded-full w-auto py-2.5 px-4 appearance-none relative focus:outline-none bg-blue-500 hover:bg-blue-600">
      Reset
    </button>
  );
};