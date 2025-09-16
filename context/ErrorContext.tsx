'use client';

import React, { createContext, useReducer } from "react";
import { ErrorState, ErrorAction } from "@/lib/types";

type ErrorContextValue = {
  state: ErrorState;
  dispatch: React.Dispatch<ErrorAction>;
};

export const ErrorContext = createContext<ErrorContextValue  | undefined>(undefined);

const initialState = { error: null };

export function ErrorProvider({ children } : { children: React.ReactNode }) {
    

    const [state, dispatch] = useReducer((state: ErrorState, action: ErrorAction): ErrorState => {
        switch (action.type) {
            case "SET_ERROR":
                return { ...state, error: action.payload || null };
            case "CLEAR_ERROR":
                return { ...state, error: null };
            default:
                return state;
        }
        }, initialState);

    return (
        <ErrorContext.Provider value={{ state, dispatch }}>
            {children}
        </ErrorContext.Provider>
    );
}
