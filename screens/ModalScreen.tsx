import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet } from "react-native";
import { useTranslation } from "react-i18next";

import { Text, View } from "../components/Themed";
import { Colors } from "../utils/colors";

export const ModalScreen = () => {
  const { t } = useTranslation();

  const translate = (key: string) => t(`modalScreen.${key}`);

  // --- RENDER ---

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{translate("title")}</Text>

      <View
        style={styles.separator}
        lightColor={Colors.WHITE}
        darkColor={Colors.BLACK}
      />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
};

const styles = StyleSheet.create({
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
