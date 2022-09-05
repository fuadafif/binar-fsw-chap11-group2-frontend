import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from '../app/store';
import { PersistGate } from 'redux-persist/integration/react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
      delay: 50,
    });
  });
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  )
}

export default MyApp
