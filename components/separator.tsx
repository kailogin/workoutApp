import React from "react";
import { StyleSheet } from "react-native";

import { View } from "../components/Themed";
import { Colors } from "../utils/colors";

export const Separator = () => (
  <View
    style={styles.separator}
    lightColor={Colors.BLACK}
    darkColor={Colors.WHITE}
  />
);

const styles = StyleSheet.create({
  separator: {
    height: 1,
    marginVertical: 30,
    width: "80%",
  },
});
