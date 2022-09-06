import "../styles/globals.css";
import "../styles/no_select.css";

// Swiper JS
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";

// Custom css for Swiper JS
import "../styles/slideshow.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
