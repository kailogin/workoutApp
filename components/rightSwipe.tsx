import React from "react";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { Colors } from "../utils/theme";

interface RightSwipeProps {
  handleClick: () => void;
}

export const RightSwipe = ({ handleClick }: RightSwipeProps) => (
  <TouchableOpacity
    onPress={handleClick}
    style={{
      alignItems: "center",
      backgroundColor: Colors.RED,
      borderTopEndRadius: 12,
      borderBottomEndRadius: 12,
      flex: 0.5,
      justifyContent: "center",
      marginBottom: 6,
    }}
  >
    <MaterialIcons name="delete" size={24} color={Colors.WHITE} />
  </TouchableOpacity>
);
