import React, { useEffect, useState } from "react";
import rootReducer from "../modules";
import { Provider } from "react-redux";
import { createStore } from "redux";

const store = createStore(rootReducer);

const AppWithRedux = ({ Component, pageProps }) => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    var filter = "win16|win32|win64|mac|macintel";
    if (navigator.platform) {
      if (filter.indexOf(navigator.platform.toLowerCase()) > -1) {
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    }
  }, []);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default AppWithRedux;
