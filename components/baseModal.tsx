import React, { ReactNode } from "react";
import { TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Modal from "react-native-modal";
import GestureRecognizer from "react-native-swipe-gestures";

import { Colors } from "../utils/colors";

interface BaseModalProps {
  children: ReactNode;
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BaseModal: React.FC<BaseModalProps> = ({
  children,
  isVisible,
  setIsVisible,
}: BaseModalProps) => {
  // --- RENDER ---

  return (
    <GestureRecognizer
      onSwipeDown={() => setIsVisible(false)}
      style={{
        flex: !isVisible ? 0 : 1,
      }}
    >
      <Modal
        isVisible={isVisible}
        style={{
          alignItems: "center",
          backgroundColor: Colors.BLACK,
          borderTopColor: Colors.ORANGE,
          borderTopWidth: 3,
          flex: 1,
          justifyContent: "center",
          marginBottom: 0,
          marginLeft: 0,
          marginRight: 0,
          marginTop: 90,
        }}
      >
        <TouchableOpacity
          onPress={() => setIsVisible(false)}
          style={{
            marginRight: 16,
            marginTop: 8,
            position: "absolute",
            right: 0,
            top: 0,
          }}
        >
          <MaterialIcons name="close" size={24} color={Colors.WHITE} />
        </TouchableOpacity>

        <View style={{ flex: 1 }}>{children}</View>
      </Modal>
    </GestureRecognizer>
  );
};
