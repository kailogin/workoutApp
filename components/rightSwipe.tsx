import React from "react";
import { TouchableOpacity } from "react-native";

import { Colors } from "../utils/colors";
import { BaseText } from "./baseText";

interface RightSwipeProps {
  handleClick: () => void;
}

export const RightSwipe = ({ handleClick }: RightSwipeProps) => {
  return (
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
      <BaseText
        style={{
          color: Colors.WHITE,
          fontSize: 12,
          fontWeight: "600",
          padding: 8,
        }}
      >
        DELETE
      </BaseText>
    </TouchableOpacity>
  );
};
