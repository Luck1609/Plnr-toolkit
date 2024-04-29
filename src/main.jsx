// import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { SWRConfig } from "swr";
import App from "./App";
import "./index.css";
import ThemeProvider from "./providers/ThemeProvider.jsx";
import Helper from "./helper/index";
import { Provider } from "react-redux";
import { store } from "./lib/toolkit/index";
// import { Toaster } from "sonner";
import SuspenseLoader from "./components/Suspense";
import { Toaster } from "./components/ui/toaster";

const { api, http } = Helper,
  fetcher = async (url) => await http.get(`${api}${url}`);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <Provider store={store}>
      <SWRConfig value={{ fetcher }}>
        <SuspenseLoader>
          <Toaster />
          <App />
        </SuspenseLoader>
      </SWRConfig>
    </Provider>
  </ThemeProvider>
);
