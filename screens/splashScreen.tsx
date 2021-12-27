import { StyleSheet } from "react-native";

import { View, Text } from "../components/Themed";

export const SplashScreen = () => {
  // --- RENDER ---

  return (
    <View style={splashScreenStyles.container}>
      <Text style={splashScreenStyles.title}>KRAFT</Text>
    </View>
  );
};

const splashScreenStyles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  title: {
    fontSize: 96,
    fontWeight: "bold",
  },
});
