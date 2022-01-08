import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
import { Colors } from "../utils/colors";
import { BaseText } from "./baseText";

export const multiSelectColorStyles = {
  primary: Colors.ORANGE,
  selectToggleTextColor: Colors.ORANGE,
  searchSelectionColor: Colors.WHITE,
  text: Colors.WHITE,
  searchPlaceholderTextColor: Colors.WHITE,
};

export const multiSelectIcons = {
  check: {
    name: "check",
    style: {
      color: Colors.ORANGE,
    },
    size: 22,
  },
  search: {
    name: "search",
    color: Colors.ORANGE,
    size: 22,
  },
};

export const multiSelectStyles = {
  selectToggle: {
    backgroundColor: Colors.BLACK,
    borderRadius: 12,
    padding: 8,
  },
  cancelButton: {
    backgroundColor: Colors.WHITE,
    color: Colors.WHITE,
  },
  container: {
    backgroundColor: Colors.BLACK,
  },
  modalWrapper: {
    backgroundColor: Colors.BLACK,
    marginTop: 90,
    borderTopColor: Colors.ORANGE,
    borderTopWidth: 4,
  },
  item: {
    backgroundColor: Colors.BLACK,
    padding: 8,
  },
  searchBar: {
    backgroundColor: Colors.BLACK,
  },
  searchTextInput: {
    color: Colors.WHITE,
  },
};

export const RenderSelectText = () => (
  <View
    style={{
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "flex-start",
    }}
  >
    <MaterialIcons
      name="add"
      size={24}
      style={{
        backgroundColor: Colors.CARD,
        color: Colors.WHITE,
        marginRight: 16,
        padding: 12,
      }}
      color={Colors.WHITE}
    />

    <BaseText>Add Exercises</BaseText>
  </View>
);
