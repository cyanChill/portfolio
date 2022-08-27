/* 
  Description:
    For controlling the content-area of the CameraLayout compoennt
*/
import React, { createContext, useState, useEffect, useRef } from "react";

import { ReactChildren } from "../utils/types";
import useNavigationContext from "../hooks/useNavigationContext";
import useLoadingTransition from "../hooks/useLoadingTransition";

import styles from "../styles/CameraLayout.module.css";

interface LayoutAreaContextInterface {
  contentAreaRef: React.MutableRefObject<any> | null;
  changeView: (
    location: string | undefined,
    idx?: number,
    bypass?: boolean
  ) => void;
  loading: boolean;
}

export const LayoutAreaContext = createContext<
  LayoutAreaContextInterface | undefined
>(undefined);

const LayoutAreaProvider = ({ children }: ReactChildren) => {
  const { dispatch } = useNavigationContext();
  const { loading: transitioning } = useLoadingTransition();

  const contentAreaRef = useRef(null);
  const animRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const changeView = (
    location: string | undefined,
    idx?: number,
    bypass?: boolean
  ) => {
    if (!contentAreaRef) return;
    if (loading && !bypass) return;
    if (bypass) clearTimeout(animRef.current);

    setLoading(true);
    contentAreaRef.current.classList.add(styles.close);

    animRef.current = setTimeout(() => {
      if (location) {
        dispatch({ type: "SET_LOCATION", payload: { path: location } });
      } else if (idx != null) {
        dispatch({ type: "SET_INDEX", payload: { idx: idx } });
      }
      setLoading(false);
    }, 1500);
  };

  useEffect(() => {
    if (!transitioning && contentAreaRef.current) {
      contentAreaRef.current.classList.remove(styles.close);
    }
  }, [transitioning]);

  return (
    <LayoutAreaContext.Provider value={{ contentAreaRef, changeView, loading }}>
      {children}
    </LayoutAreaContext.Provider>
  );
};

export default LayoutAreaProvider;
