import "../styles/globals.css";
import SEO from "../components/Optimizations/SEO";
import CameraLayout from "../components/Layouts/CameraLayout";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <SEO />
      <CameraLayout>
        <Component {...pageProps} />
      </CameraLayout>
    </>
  );
};

export default MyApp;
