import "@styles/globals.css";
import { ThemeProvider } from "next-themes";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config, library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebook,
  faGithub,
  // faInstagram,
  // faInstagram,
  // faInstagramSquare,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCircle,
  // faSquareFull,
  // faStop,
} from "@fortawesome/free-solid-svg-icons";
config.autoAddCss = false;
library.add(
  // faInstagramSquare,
  // faInstagram,
  faTwitter,
  faLinkedin,
  faGithub,
  faFacebook,
  faCircle,
  // faSquareFull,
  // faStop
);

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider
      defaultTheme="light"
      attribute="class"
      disableTransitionOnChange={false}
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
