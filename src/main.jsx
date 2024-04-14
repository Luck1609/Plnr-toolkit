// import { StrictMode } from "react";
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
import { LogoutModal } from "./layouts/Auth/LogoutModal";
import StepFormModal from "./components/FormComponents/StepFormModal";
import SuspenseLoader from "./components/Suspense";
import Modal from "./components/Modal";

const { api, http } = Helper,
  fetcher = async (url) => await http.get(`${api}${url}`);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <Provider store={store}>
      <SWRConfig value={{ fetcher }}>
        <SuspenseLoader>
          <Toaster />
          <FormModal />
          <StepFormModal />
          <Modal />
          <NoticeModal />
          <LogoutModal />
          <App />
        </SuspenseLoader>
      </SWRConfig>
    </Provider>
  </ThemeProvider>
);
