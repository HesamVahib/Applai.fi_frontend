"use client";

import ResetFilterButton from "./ResetFilterButton";
import FilterButton from "./FilterButton";

export default function Filters() {
  return (
    <>
      <div className="w-full flex justify-center mt-3">
        <div className="w-full flex gap-2">
          <FilterButton id="city" name="City" />
          <FilterButton id="date" name="Date" />
          <FilterButton id="category" name="Category" />
          <ResetFilterButton />
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-full border-b-2 border-gray-400 mt-3"></div>
      </div>
    </>
  );
}
