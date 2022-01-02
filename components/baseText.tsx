import React from "react";
import { StyleSheet, Text } from "react-native";

import { Colors } from "../utils/colors";

interface BaseTextProps {}

export const BaseText: React.FC<BaseTextProps> = ({ children }) => {
  return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: Colors.WHITE,
    fontFamily: "Montserrat",
  },
});
