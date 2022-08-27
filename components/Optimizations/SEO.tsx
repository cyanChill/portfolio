// For Search Engine Optimizations
import Head from "next/head";

const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN;

interface SEOProps {
  title?: string;
  description?: string;
  pageName?: string;
  canocical?: string;
  ogType?: string;
}

const SEO = ({
  title = "Anthony Liang",
  description = "Anthony is a full stack developer who enjoys creating apps and is eager to learn new technologies.",
  pageName = "Full Stack Developer",
  canocical = DOMAIN,
  ogType = "website",
}: SEOProps) => {
  return (
    <Head>
      <title>{`${pageName} | ${title}`}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href={canocical ?? DOMAIN} />
      {/* Make pages & media findable in search engines */}
      <meta name="robots" content="index,follow" />

      {/* Social media meta tags */}
      <meta property="og:type" content={ogType} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={pageName} />
      <meta property="og:url" content={canocical ?? DOMAIN} />

      {/* Twitter meta tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Head>
  );
};

export default SEO;
