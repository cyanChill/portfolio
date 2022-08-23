/* 
  Description:
    For controlling the content-area of the CameraLayout compoennt
*/
import { createContext, useState, useEffect, useRef } from "react";

import useNavigationContext from "../hooks/useNavigationContext";
import useLoadingTransition from "../hooks/useLoadingTransition";

import styles from "../styles/CameraLayout.module.css";

export const LayoutAreaContext = createContext();

const LayoutAreaProvider = ({ children }) => {
  const { dispatch } = useNavigationContext();
  const { loading: transitioning } = useLoadingTransition();

  const contentAreaRef = useRef(null);
  const animRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const changeView = (location, idx, bypass) => {
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
