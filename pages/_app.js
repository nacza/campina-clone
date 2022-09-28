import "../styles/globals.css";

// Swiper JS
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";

// Custom css for Swiper JS
import "../styles/slideshow.css";

// No Selector
import "../styles/no_select.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
