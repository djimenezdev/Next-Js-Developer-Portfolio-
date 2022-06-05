import '@styles/globals.css';
import { ThemeProvider } from 'next-themes';
import '@fortawesome/fontawesome-svg-core/styles.css'; // import Font Awesome CSS
import { config, library } from '@fortawesome/fontawesome-svg-core';
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faTwitter,
  faSquareFontAwesome,
  faElementor,
  faMailchimp,
  faGoogle,
} from '@fortawesome/free-brands-svg-icons';
import {
  faChevronLeft,
  faChevronRight,
  faCircle as faCircleSolid,
  faGlobe,
} from '@fortawesome/free-solid-svg-icons';
import { faCircle as faCircleOutline } from '@fortawesome/free-regular-svg-icons';
import { Provider } from 'react-redux';
import { store } from '@utils/store';
config.autoAddCss = false;
library.add(
  faChevronLeft,
  faChevronRight,
  faCircleSolid,
  faCircleOutline,
  faGlobe,
  faTwitter,
  faLinkedin,
  faGithub,
  faFacebook,
  faSquareFontAwesome,
  faElementor,
  faMailchimp,
  faGoogle
);

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider
      defaultTheme='dark'
      attribute='class'
      disableTransitionOnChange={false}
    >
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
}

export default MyApp;
