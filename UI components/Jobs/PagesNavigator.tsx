import { ArrowRightCircleIcon, ArrowLeftCircleIcon } from "@heroicons/react/24/solid";

export default function PagesNavigator() {
    return (
        <div className="flex items-center justify-center gap-4 mb-4">
        <button className="bg-gray-300 hover:cursor-pointer rounded-md px-3 py-1"
         onClick={() => {
          console.log("previous page")  
          }}><ArrowLeftCircleIcon className="h-6 w-6 text-gray-700" /></button>
          <div className="bg-gray-700 px-3 py-1 rounded-md text-white">
            Page 1 of 10
          </div>
        <button className="bg-gray-300 hover:cursor-pointer rounded-md px-3 py-1"
         onClick={() => {
          console.log("next page")  
          }}><ArrowRightCircleIcon className="h-6 w-6 text-gray-700" /></button>
      </div>
    );
}