import resetHandler from "@/functions/searchBar/resetHandler";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import { useEffect } from "react";

const classes = {
  buttonActive: "rounded-full bg-[var(--color-primary)] p-1.5 cursor-pointer",
  buttonInactive: "rounded-full bg-[var(--color-background2)] p-1.5 cursor-pointer",
  iconActive: "h-5 w-5 text-[var(--color-background2)]",
  iconInactive: "h-5 w-5 text-[var(--color-gray)]",
};

export default function ResetFilterButton({ resetSignal, setResetSignal } : { resetSignal: boolean; setResetSignal: (value: boolean) => void }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  // useEffect(() => {
  //     router.replace(pathname);
  //   }, [pathname, router]);

  return (
    <button
      onClick={() => {
        setResetSignal(!resetSignal);
        // console.log(resetSignal);
        resetHandler({ router, searchParams });
      }}
      className={searchParams.toString() ? classes.buttonActive : classes.buttonInactive}>
      <ArrowPathIcon className={searchParams.toString() ? classes.iconActive : classes.iconInactive} />
    </button>
  );
};