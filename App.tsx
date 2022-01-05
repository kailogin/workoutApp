import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import "./i18n.config";

import useCachedResources from "./hooks/useCachedResources";
import { Navigation } from "./navigation";
import { SplashScreen } from "./screens/splashScreen";
import { AuthProvider } from "./components/authProvider/authProvider";
import { PersistGate } from "redux-persist/integration/react";
import { createStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { RootState } from "./stores/rootStore/rootTypes";
import { rootReducer } from "./stores/rootStore/rootReducer";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export default function App() {
  // --- STATE ---

  const isLoadingComplete = useCachedResources();

  // --- RENDER ---

  if (!isLoadingComplete) {
    return <SplashScreen />;
  }

  return (
    <SafeAreaProvider>
      {/* <AuthProvider> */}
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navigation />
        </PersistGate>
      </Provider>
      {/* </AuthProvider> */}
    </SafeAreaProvider>
  );
}
