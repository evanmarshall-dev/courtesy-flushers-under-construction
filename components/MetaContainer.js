import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

/**
 * MetaContainer: This contains all of the meta data for site-wide
 * @return {JSX.Element} The JSX Code for the Meta Page
 */

export default function MetaContainer({ children, customMeta }) {
  const router = useRouter();

  const meta = {
    title: "Courtesy Flushers | Our Business is Literally your Business",
    description: `A Nova Scotia plumbing and septic pumping service company`,
    image: "../public/images/courtesy-flushers.png",
    type: "website",
    date: new Date().toDateString(),
    ...customMeta,
  };

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://www.courtesyflushers.ca${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Courtesy Flushers" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <div>{children}</div>
    </div>
  );
}
