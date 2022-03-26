import Layout from "../components/layout";
import { DarkModeProvider } from "../hooks/useDarkMode";
import { MenuProvider } from "../hooks/useMenu";
import { SearchingProvider } from "../hooks/useSearching";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <DarkModeProvider>
      <MenuProvider>
        <SearchingProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SearchingProvider>
      </MenuProvider>
    </DarkModeProvider>
  );
}

export default MyApp;
