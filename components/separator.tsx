import React from "react";
import { StyleSheet, View } from "react-native";

import { Colors } from "../utils/theme";

interface SeparatorProps {
  widthPercentage?: number;
}

export const Separator = ({ widthPercentage: width }: SeparatorProps) => (
  <View style={[styles.separator, { width: `${width}%` }]} />
);

const styles = StyleSheet.create({
  separator: {
    backgroundColor: Colors.WHITE,
    height: 1,
    marginBottom: 32,
    width: "80%",
  },
});
