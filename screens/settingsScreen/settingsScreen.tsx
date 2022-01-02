import React, { useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { useTranslation } from "react-i18next";

import { Languages } from "../../utils/types";
import i18n, {
  LanguagesType,
  mapLanguageCodeToLanguage,
} from "../../i18n.config";
import { BaseView } from "../../components/baseView";
import { Separator } from "../../components/separator";
import { Colors } from "../../utils/colors";

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
      {/* <Separator /> */}

      {/* LanguagePicker */}
      <View style={styles.containerElement}>
        <Text style={styles.containerElementText}>
          {translate("changeAppLanguage")}
        </Text>

        <RNPickerSelect
          placeholder={selectedLanguage}
          items={[
            { label: "English", value: Languages.ENG, key: "en" },
            { label: "Deutsch", value: Languages.GER, key: "ger" },
            { label: "Italiano", value: Languages.ITA, key: "ita" },
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
    color: Colors.WHITE,
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
    padding: 12,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: Colors.WHITE,
    color: Colors.WHITE,
  },
  inputAndroid: {
    backgroundColor: Colors.ORANGE,
    color: Colors.WHITE,
    fontSize: 14,
    padding: 12,
    borderWidth: 1,
    borderColor: Colors.WHITE,
    width: 240,
  },
});
