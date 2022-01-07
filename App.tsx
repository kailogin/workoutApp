import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import "./i18n.config";
import { PersistGate } from "redux-persist/integration/react";
import { createStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import Toast from "react-native-toast-message";
import "react-native-gesture-handler";

import useCachedResources from "./hooks/useCachedResources";
import { Navigation } from "./navigation";
import { SplashScreen } from "./screens/splashScreen";

import { RootState } from "./stores/rootStore/rootTypes";
import { rootReducer } from "./stores/rootStore/rootReducer";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  debug: true,
};

const persistedReducer = persistReducer<RootState, any>(
  persistConfig,
  rootReducer
);

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
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ActionSheetProvider>
            <Navigation />
          </ActionSheetProvider>
          <Toast />
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
}
