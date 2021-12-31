import React, { useState } from "react";
import { StyleSheet, Switch } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useTranslation } from "react-i18next";

import { Text, View } from "../../components/Themed";
import { Languages } from "../../utils/types";
import i18n from "../../i18n.config";
import { BaseView } from "../../components/baseView";
import { Separator } from "../../components/separator";

export const SettingsScreen = () => {
  const { t } = useTranslation();

  const translate = (key: string) => t(`settings.${key}`);

  // --- STATE ---

  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState<Languages>(
    Languages.ENG
  );

  // --- CALLBACKS ---

  const toggleSwitch = () =>
    setIsDarkModeEnabled((previousState) => !previousState);

  // --- RENDER ---

  return (
    <BaseView>
      {/* DARK MODE */}
      <View style={styles.containerElement}>
        <Text style={styles.containerElementText}>
          {translate("darkModeCta")}
        </Text>

        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isDarkModeEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isDarkModeEnabled}
        />
      </View>

      <Separator />

      {/* Export als XLS */}

      <Separator />

      {/* LanguagePicker */}
      <View style={styles.containerElement}>
        <Text style={styles.containerElementText}>
          {translate("changeAppLanguage")}
        </Text>

        <Picker
          selectedValue={selectedLanguage}
          onValueChange={(itemValue: Languages) => {
            i18n.changeLanguage(itemValue);
            setSelectedLanguage(itemValue);
          }}
        >
          <Picker.Item label="English" value={Languages.ENG} />
          <Picker.Item label="Deutsch" value={Languages.GER} />
          <Picker.Item label="Italiano" value={Languages.ITA} />
        </Picker>
      </View>

      <Separator />
    </BaseView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  containerElement: {
    flexDirection: "row",
  },
  containerElementText: {
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 24,
  },
  dropDownPicker: {
    backgroundColor: "white",
  },
});
