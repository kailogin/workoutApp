import React, { ReactNode } from "react";
import { ScrollView, View, StyleSheet, SafeAreaView } from "react-native";

import { Colors } from "../utils/colors";
import { BaseStatusBar } from "./baseStatusBar";

interface BaseViewProps {
  children: ReactNode;
}

export const BaseView = ({ children }: BaseViewProps) => {
  return (
    <SafeAreaView style={styles.safe_area_container}>
      <BaseStatusBar />

      <View style={styles.container}>
        <ScrollView>{children}</ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe_area_container: {
    flex: 1,
  },
  container: {
    backgroundColor: Colors.BLACK,
    flex: 1,
    padding: 40,
  },
});
