import React, { ReactNode } from "react";
import { ScrollView, View, StyleSheet } from "react-native";

import { Colors } from "../utils/colors";

interface BaseViewProps {
  children: ReactNode;
}

export const BaseView = ({ children }: BaseViewProps) => {
  return (
    <View style={styles.container}>
      <ScrollView>{children}</ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.BLACK,
    flex: 1,
    padding: 40,
  },
});
