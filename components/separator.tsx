import React from "react";
import { StyleSheet, View } from "react-native";
import { Colors } from "../utils/colors";

export const Separator = () => <View style={styles.separator} />;

const styles = StyleSheet.create({
  separator: {
    backgroundColor: Colors.WHITE,
    height: 1,
    marginVertical: 30,
    width: "80%",
  },
});
