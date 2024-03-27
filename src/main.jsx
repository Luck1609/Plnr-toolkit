import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { SWRConfig } from "swr";
import App from "./App";
import "./index.css";
import ThemeProvider from "./providers/ThemeProvider.jsx";
import Helper from "./helper/index";
import { Provider } from "react-redux";
import { store } from "./lib/toolkit/index";
import { NoticeModal } from "./components/NoticeModal";
import FormModal from "./components/FormComponents/FormModal";
import { Toaster } from "sonner";

const { api, http } = Helper,
  fetcher = async (url) => await http.get(`${api}${url}`);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <SWRConfig value={{ fetcher }}>
          <Toaster />
          <FormModal />
          <NoticeModal />
          <App />
        </SWRConfig>
      </Provider>
    </ThemeProvider>
  </StrictMode>
);
