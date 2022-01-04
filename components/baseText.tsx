import React from "react";
import { StyleSheet, Text, TextStyle } from "react-native";

import { Colors } from "../utils/colors";

interface BaseTextProps {
  style?: TextStyle;
}

export const BaseText: React.FC<BaseTextProps> = ({ children, style }) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: Colors.WHITE,
    fontFamily: "Montserrat",
  },
});
