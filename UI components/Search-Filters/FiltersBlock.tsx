import ResetFilterButton from "./ResetFilterButton";
import FilterButton from "./FilterButton";
import { useState } from "react";

export default function Filters() {
  const [resetSignal, setResetSignal] = useState(false);

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
        <div className="w-full border-b-2 border-gray-400 mt-3"></div>
      </div>
    </>
  );
}
