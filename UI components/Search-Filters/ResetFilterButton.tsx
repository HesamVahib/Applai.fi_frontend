import resetHandler from "@/functions/searchBar/resetHandler";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowPathIcon } from '@heroicons/react/24/outline';


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
      className={`rounded-full ${searchParams.toString() ? "bg-[var(--color-primary)] " : "bg-[var(--color-background2)]"} p-3 cursor-pointer`}>
      <ArrowPathIcon className={`h-5 w-5 ${searchParams.toString() ? "text-[var(--color-background2)]" : "text-[var(--color-gray)]"}`} />
    </button>
  );
};