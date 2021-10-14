import "@styles/globals.css";
import { ThemeProvider } from "next-themes";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config, library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faCircle, faSquare } from "@fortawesome/free-solid-svg-icons";
config.autoAddCss = false;
library.add(
  faInstagram,
  faTwitter,
  faLinkedin,
  faGithub,
  faFacebook,
  faSquare,
  faCircle
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
