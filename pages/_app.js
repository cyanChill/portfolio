import { Toaster } from "react-hot-toast";

import NavigationContextProvider from "../context/navigationContext";
import LayoutAreaProvider from "../context/layoutAreaContext";

import "../styles/globals.css";
import SEO from "../components/Optimizations/SEO";
import CameraLayout from "../components/Layouts/CameraLayout";

const MyApp = ({ Component, pageProps }) => {
  return (
    <NavigationContextProvider>
      <LayoutAreaProvider>
        <SEO />
        <Toaster
          position="bottom center"
          toastOptions={{ style: { width: "max-content", maxWidth: "45rem" } }}
        />

        <CameraLayout>
          <Component {...pageProps} />
        </CameraLayout>
      </LayoutAreaProvider>
    </NavigationContextProvider>
  );
};

export default MyApp;
