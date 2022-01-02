import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, Text } from "react-native";
import { useTranslation } from "react-i18next";

import { BaseView } from "../components/baseView";
import { Separator } from "../components/separator";

export const ModalScreen = () => {
  const { t } = useTranslation();

  const translate = (key: string) => t(`modalScreen.${key}`);

  // --- RENDER ---

  return (
    <BaseView>
      <Text style={styles.title}>{translate("title")}</Text>

      <Separator />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </BaseView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
