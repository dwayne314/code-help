import Head from "next/head";
import useDarkMode from "../hooks/useDarkMode";

export default function Meta({ title, description }) {
  const { isDarkMode } = useDarkMode();

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="theme-color"
        content={`${isDarkMode ? "#1e1f27" : "white"}`}
      />

      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
