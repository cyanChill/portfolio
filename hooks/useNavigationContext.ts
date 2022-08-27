import { useContext } from "react";

import { NavigationContext } from "../context/navigationContext";

const useNavigationContext = () => {
  const context = useContext(NavigationContext);

  if (!context) {
    throw Error(
      "useNavigationContext must be used inside NavigationContextProvider."
    );
  }

  return context;
};

export default useNavigationContext;
