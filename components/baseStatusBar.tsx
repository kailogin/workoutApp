import React from "react";
import { StatusBar, View } from "react-native";
import { Colors } from "../utils/theme";

export const BaseStatusBar = () => {
  // --- RENDER ---

  return (
    <View>
      <StatusBar
        animated={true}
        backgroundColor={Colors.BLACK}
        barStyle="light-content"
        hidden={false}
      />
    </View>
  );
};
