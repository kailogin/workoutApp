import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useTranslation } from "react-i18next";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";
import uuid from "react-native-uuid";

import i18n, { Languages, LanguagesType } from "../../i18n.config";
import { BaseView } from "../../components/baseView";
import { Colors, SIZES } from "../../utils/theme";
import { Separator } from "../../components/separator";

export const SettingsScreen = () => {
  const { t } = useTranslation();

  const translate = (key: string) => t(`settings.${key}`);

  // --- STATE ---

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
    setSelectedIndex(itemValue);
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
              key={uuid.v4().toString()}
              style={{ marginBottom: 16 }}
            >
              <RadioButtonInput
                buttonOuterColor={Colors.WHITE}
                buttonInnerColor={Colors.ORANGE}
                obj={radio_prop}
                index={radio_prop.value}
                isSelected={selectedIndex === radio_prop.value}
                onPress={handleRadioButtonPress}
                buttonSize={8}
                buttonOuterSize={16}
                buttonWrapStyle={{ marginLeft: 10 }}
              />

              <RadioButtonLabel
                obj={radio_prop}
                index={radio_prop.value + 10}
                labelHorizontal={true}
                onPress={handleRadioButtonPress}
                labelStyle={{ fontSize: 12, color: Colors.WHITE }}
                labelWrapStyle={{}}
              />
            </RadioButton>
          ))}
        </RadioForm>
      </View>

      <Separator widthPercentage={100} />
    </BaseView>
  );
};

const styles = StyleSheet.create({
  // containerElement: {
  //   flexDirection: "row",
  // },
  title: {
    color: Colors.WHITE,
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 24,
  },
  button: {
    backgroundColor: Colors.CARD,
    borderBottomWidth: 1,
    borderRadius: SIZES.RADIUS_SMALL,
    marginBottom: 4,
    padding: 8,
  },
});
