import { configureStore } from "@reduxjs/toolkit";
import { reducers } from "./reducers";
// import storage from "redux-persist/lib/storage";
// import { persistReducer, persistStore } from "redux-persist";
// import autoMergeLevel1 from "redux-persist/lib/stateReconciler/autoMergeLevel1";

// const persistConfig = {
//   key: "root",
//   storage,
//   stateReconciler: autoMergeLevel1,
//   whitelist: ["cart", "checkout"],
// };

// const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: reducers,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware({ ignoreActions: ["toggleModal"] }),
});

// const persistor = persistStore(store);
