import { StyleSheet, Text, View } from "react-native";

import { Colors } from "../utils/colors";

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
    backgroundColor: Colors.BLACK,
    justifyContent: "center",
    height: "100%",
  },
  title: {
    fontSize: 96,
    fontWeight: "bold",
  },
});
