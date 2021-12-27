import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";

export const ModalScreen = () => (
  <View style={modalScreenStyles.container}>
    <Text style={modalScreenStyles.title}>Modal</Text>

    <View
      style={modalScreenStyles.separator}
      lightColor="#eee"
      darkColor="rgba(255,255,255,0.1)"
    />

    {/* Use a light status bar on iOS to account for the black space above the modal */}
    <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
  </View>
);

const modalScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
