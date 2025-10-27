import ResetFilterButton from "./ResetFilterButton";
import FilterButton from "./FilterButton";
import { useState, useEffect } from "react";
import { useSearchParams, usePathname } from "next/navigation";

export default function Filters() {
  const [resetSignal, setResetSignal] = useState(false);

  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const hasNoParams = !searchParams.get("location") &&
                        !searchParams.get("category") &&
                        !searchParams.get("date") &&
                        !searchParams.get("title");
                        
    if (pathname === "/" && hasNoParams) {
      setResetSignal(prev => !prev);
    }
  }, [pathname, searchParams]);

  return (
    <>
      <div className="w-full flex justify-center mt-3">
        <div className="w-full flex gap-2">
          <FilterButton id="location" resetSignal={resetSignal} />
          <FilterButton id="date" resetSignal={resetSignal} />
          <FilterButton id="category" resetSignal={resetSignal} />
          <ResetFilterButton resetSignal={resetSignal} setResetSignal={setResetSignal} />
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-full mb-5 border-gray-400 mt-3"></div>
      </div>
    </>
  );
}
