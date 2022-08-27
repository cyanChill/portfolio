import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const useLoadingTransition = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [nextUrl, setNextUrl] = useState("");

  useEffect(() => {
    const handleStart = (url: string) => {
      setNextUrl(url);
      return url !== router.asPath && setLoading(true);
    };
    const handleComplete = (url: string) => {
      setNextUrl("");
      return url === router.asPath && setLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]); // eslint-disable-line

  return { loading, nextUrl };
};

export default useLoadingTransition;
