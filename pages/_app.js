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
        <CameraLayout>
          <Component {...pageProps} />
        </CameraLayout>
      </LayoutAreaProvider>
    </NavigationContextProvider>
  );
};

export default MyApp;
