/* 
  Description:
    Layout used for the blog pages (excluding the /blog/preview route)
    once this feature is implemented
*/
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { BsHouse, BsHouseFill } from "react-icons/bs";

import { ReactChildren } from "../../utils/types";

import styles from "../../styles/FileSystemLayout.module.css";

const FileSystemLayout = ({ children }: ReactChildren) => {
  const router = useRouter();

  const [crumbs, setCrumbs] = useState([]);

  const goHome = () => router.push("/");

  useEffect(() => {
    if (router.asPath) {
      const pathSegments = router.asPath.split("/");
      if (pathSegments.length === 2 && !pathSegments[1]) setCrumbs([""]);
      else setCrumbs(pathSegments);
    }
  }, [router]);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {/* Breadcrumb nav */}
        <nav className={styles.fsNav}>
          <div className={styles.homeBtn}>
            <BsHouse onClick={goHome} />
            <BsHouseFill onClick={goHome} />
          </div>

          <div className={styles.breadCrumbs}>
            {crumbs.map((pathSeg, idx) => {
              return idx === crumbs.length - 1 ? (
                <span key={idx} className={styles.currPath}>
                  {pathSeg === "" ? "Home" : pathSeg}
                </span>
              ) : (
                <span key={idx}>
                  <Link
                    href={idx === 0 ? "/" : crumbs.slice(0, idx + 1).join("/")}
                  >
                    {pathSeg === "" ? "Home" : pathSeg}
                  </Link>{" "}
                  /{" "}
                </span>
              );
            })}
          </div>
        </nav>

        <div className={styles.contentArea}>{children}</div>
      </div>
    </div>
  );
};

export default FileSystemLayout;
