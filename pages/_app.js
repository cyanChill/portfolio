import { useRouter } from "next/router";
import { Toaster } from "react-hot-toast";

import NavigationContextProvider from "../context/navigationContext";
import LayoutAreaProvider from "../context/layoutAreaContext";
import useLoadingTransition from "../hooks/useLoadingTransition";

import "../styles/globals.css";
import { isPathBlogSection } from "../utils/routingHelper";
import CameraLayout from "../components/Layouts/CameraLayout";
import FileSystemLayout from "../components/Layouts/FileSystemLayout";
import LoadingSpinner from "../components/LoadingSpinner";

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  const { loading, nextUrl } = useLoadingTransition();

  const SelectedLayout = isPathBlogSection(router.asPath)
    ? FileSystemLayout
    : CameraLayout;

  return (
    <NavigationContextProvider>
      <LayoutAreaProvider>
        <Toaster
          position="bottom center"
          toastOptions={{ style: { width: "max-content", maxWidth: "45rem" } }}
        />

        <div
          className={`loading ${
            loading && isPathBlogSection(nextUrl) && "active"
          }`}
        >
          <LoadingSpinner />
        </div>

        <SelectedLayout>
          <Component {...pageProps} />
        </SelectedLayout>
      </LayoutAreaProvider>
    </NavigationContextProvider>
  );
};

export default MyApp;
