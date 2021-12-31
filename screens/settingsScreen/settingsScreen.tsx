import React, { useState } from "react";
import { StyleSheet, Switch } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { useTranslation } from "react-i18next";

import { Text, View } from "../../components/Themed";
import { Languages } from "../../utils/types";
import i18n, {
  LanguagesType,
  mapLanguageCodeToLanguage,
} from "../../i18n.config";
import { BaseView } from "../../components/baseView";
import { Separator } from "../../components/separator";

export const SettingsScreen = () => {
  const { t } = useTranslation();

  const translate = (key: string) => t(`settings.${key}`);

  // --- STATE ---

  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState<LanguagesType>(
    "English"
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

        <RNPickerSelect
          placeholder={selectedLanguage}
          items={[
            { label: "English", value: Languages.ENG },
            { label: "Deutsch", value: Languages.GER },
            { label: "Italiano", value: Languages.ITA },
          ]}
          onValueChange={(itemValue: Languages) => {
            i18n.changeLanguage(itemValue);
            const lng = mapLanguageCodeToLanguage(itemValue);
            setSelectedLanguage(lng);
          }}
          value={selectedLanguage}
          style={customPickerStyles}
        />
      </View>

      <Separator />
    </BaseView>
  );
};

const styles = StyleSheet.create({
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

const customPickerStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 14,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "green",
    borderRadius: 8,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 14,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "blue",
  },
});
