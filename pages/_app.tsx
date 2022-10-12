import "../styles.css";
import TinaProvider from "../.tina/components/TinaDynamicProvider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = ({ Component, pageProps }) => {
  return (
    <TinaProvider>
      <Component {...pageProps} />
    </TinaProvider>
  );
};

export default App;
