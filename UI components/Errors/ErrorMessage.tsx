// import React, { useContext, useEffect } from "react";
// import { ErrorContext } from "@/context/ErrorContext";

// export default function ErrorMessage() {
//     const context = useContext(ErrorContext);
//     if (!context) return null;

//     const { state, dispatch } = context;

//     useEffect(() => {
//         if (state.error) {
//             const timer = setTimeout(() => {
//                 dispatch({ type: "CLEAR_ERROR" });
//             }, 5000);
//             return () => clearTimeout(timer);
//         }
//     }, [state.error, dispatch]);

//     if (!state.error) return null;

//     return (
//         <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-2 rounded shadow z-50">
//             {state.error}
//         </div>
//     );
// }
