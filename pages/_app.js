import { useRouter } from "next/router";
import { Toaster } from "react-hot-toast";

import NavigationContextProvider from "../context/navigationContext";
import LayoutAreaProvider from "../context/layoutAreaContext";

import "../styles/globals.css";
import { isPathBlogSection } from "../utils/routingHelper";
import SEO from "../components/Optimizations/SEO";
import CameraLayout from "../components/Layouts/CameraLayout";
import FileSystemLayout from "../components/Layouts/FileSystemLayout";

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();

  const SelectedLayout = isPathBlogSection(router.asPath)
    ? FileSystemLayout
    : CameraLayout;

  return (
    <NavigationContextProvider>
      <LayoutAreaProvider>
        <SEO />
        <Toaster
          position="bottom center"
          toastOptions={{ style: { width: "max-content", maxWidth: "45rem" } }}
        />

        <SelectedLayout>
          <Component {...pageProps} />
        </SelectedLayout>
      </LayoutAreaProvider>
    </NavigationContextProvider>
  );
};

export default MyApp;
