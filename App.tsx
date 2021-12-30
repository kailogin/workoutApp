import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import "./i18n.config";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import { Navigation } from "./navigation";
import { SplashScreen } from "./screens/splashScreen";
import { RootStore } from "./stores/store";

export default function App() {
  // --- STATE ---

  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  // --- RENDER ---

  if (!isLoadingComplete) {
    return <SplashScreen />;
  }

  return (
    <SafeAreaProvider>
      <Provider store={RootStore}>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </Provider>
    </SafeAreaProvider>
  );
}
