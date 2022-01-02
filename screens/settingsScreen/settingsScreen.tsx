import React, { useState } from "react";
import { StyleSheet, Switch, Text, TouchableOpacity, View } from "react-native";
import { useTranslation } from "react-i18next";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";

import { Languages } from "../../utils/types";
import i18n, {
  LanguagesType,
  mapLanguageCodeToLanguage,
} from "../../i18n.config";
import { BaseView } from "../../components/baseView";
import { Colors } from "../../utils/colors";

export const SettingsScreen = () => {
  const { t } = useTranslation();

  const translate = (key: string) => t(`settings.${key}`);

  // --- STATE ---

  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState<LanguagesType>(
    "English"
  );
  const [selectedIndex, setSelectedIndex] = useState<0 | 1 | 2>(0);

  // --- HELPERS ---

  const radio_props = [
    { label: "English", value: 0 },
    { label: "Deutsch", value: 1 },
    { label: "Italiano", value: 2 },
  ];

  // --- CALLBACKS ---

  const toggleSwitch = () =>
    setIsDarkModeEnabled((previousState) => !previousState);

  const handleRadioButtonPress = (itemValue: 0 | 1 | 2) => {
    let language;

    if (itemValue === 0) {
      language = Languages.ENG;
    }

    if (itemValue === 1) {
      language = Languages.GER;
    }

    if (itemValue === 2) {
      language = Languages.ITA;
    }

    i18n.changeLanguage(language);
    // const lng = mapLanguageCodeToLanguage(language);
    setSelectedIndex(itemValue);
    // setSelectedLanguage(lng);
  };
  // --- RENDER ---

  return (
    <BaseView>
      {/* LanguagePicker */}
      <View style={{ marginBottom: 40 }}>
        <Text style={styles.title}>{translate("changeAppLanguage")}</Text>

        <RadioForm animation={true}>
          {radio_props.map((radio_prop) => (
            <RadioButton
              labelHorizontal={true}
              key={radio_prop.label + radio_prop.value}
              style={{ marginBottom: 16 }}
            >
              <RadioButtonInput
                buttonOuterColor={Colors.WHITE}
                buttonInnerColor={Colors.ORANGE}
                obj={radio_prop}
                index={radio_prop.value}
                isSelected={selectedIndex === radio_prop.value}
                onPress={handleRadioButtonPress}
                buttonSize={10}
                buttonOuterSize={25}
                buttonWrapStyle={{ marginLeft: 10 }}
              />

              <RadioButtonLabel
                obj={radio_prop}
                index={radio_prop.value + 10}
                labelHorizontal={true}
                onPress={handleRadioButtonPress}
                labelStyle={{ fontSize: 16, color: Colors.WHITE }}
                labelWrapStyle={{}}
              />
            </RadioButton>
          ))}
        </RadioForm>
      </View>

      <View>
        <Text style={[styles.title, { marginRight: 24 }]}>
          {translate("darkModeCta")}
        </Text>

        <Switch
          trackColor={{ false: Colors.CARD, true: Colors.ORANGE }}
          thumbColor={Colors.WHITE}
          onValueChange={toggleSwitch}
          value={isDarkModeEnabled}
        />
      </View>
    </BaseView>
  );
};

const styles = StyleSheet.create({
  // containerElement: {
  //   flexDirection: "row",
  // },
  title: {
    color: Colors.WHITE,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 24,
  },
  button: {
    backgroundColor: Colors.CARD,
    borderBottomWidth: 1,
    borderRadius: 8,
    marginBottom: 4,
    padding: 8,
  },
});
