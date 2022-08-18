import { useContext } from "react";

import { LayoutAreaContext } from "../context/layoutAreaContext";

const useLayoutAreaContext = () => {
  const context = useContext(LayoutAreaContext);

  if (!context) {
    throw Error("useLayoutArea must be used inside LayoutAreaProvider.");
  }

  return context;
};

export default useLayoutAreaContext;
