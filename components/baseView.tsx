import React, { ReactNode } from "react";
import { ScrollView, View, StyleSheet } from "react-native";

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
    flex: 1,
    margin: 40,
  },
});
