/* 
  Description:
    For controlling site navigation
*/
import React, { createContext, Reducer, useReducer } from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { ReactChildren } from "../utils/types";

import { pagesData } from "../data";

interface ReducerState {
  idx: number | undefined;
  numPages: number;
}
interface ReducerAction {
  type: string;
  payload: { path?: string; idx?: number };
}

const NavigationReducer = (state: ReducerState, action: ReducerAction) => {
  switch (action.type) {
    case "NEXT":
      const nextIdx = state.idx + 1;
      if (nextIdx > state.numPages - 1) return state;
      return { ...state, idx: nextIdx };

    case "PREV":
      const prevIdx = state.idx - 1;
      if (prevIdx < 0) return state;
      return { ...state, idx: prevIdx };

    case "SET_LOCATION":
      const pgIdx = pagesData.findIndex(
        (pgEntry) => pgEntry.path === action.payload.path
      );
      if (pgIdx === -1) return state;
      return { ...state, idx: pgIdx };

    case "SET_INDEX":
      if (action.payload.idx < 0 || action.payload.idx > state.numPages - 1) {
        return state;
      }
      return { ...state, idx: action.payload.idx };

    case "TO_BLOG_POST":

    default:
      return state;
  }
};

interface NavigationContextInterface {
  state?: ReducerState;
  idx?: number | undefined;
  numPages?: number;
  dispatch: React.Dispatch<ReducerAction>;
}

export const NavigationContext = createContext<
  NavigationContextInterface | undefined
>(undefined);

const NavigationContextProvider = ({ children }: ReactChildren) => {
  const router = useRouter();
  const [state, dispatch] = useReducer(NavigationReducer, {
    idx: undefined,
    numPages: pagesData.length,
  });
  const [initLoad, setInitLoad] = useState(true);

  useEffect(() => {
    dispatch({ type: "SET_LOCATION", payload: { path: router.asPath } });
    setInitLoad(false);
  }, [router.asPath]);

  useEffect(() => {
    if (!initLoad) {
      const pageentry = pagesData[state.idx];
      if (pageentry) router.push(pageentry.path);
    }
  }, [state]); // eslint-disable-line

  return (
    <NavigationContext.Provider value={{ ...state, dispatch }}>
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationContextProvider;
