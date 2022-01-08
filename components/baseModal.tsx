import React, { ReactNode } from "react";
import { View } from "react-native";
import Modal from "react-native-modal";
import GestureRecognizer from "react-native-swipe-gestures";
import Toast from "react-native-toast-message";

import { Colors } from "../utils/colors";

interface BaseModalProps {
  children: ReactNode;
  handleClose: () => void;
  isVisible: boolean;
}

export const BaseModal: React.FC<BaseModalProps> = ({
  children,
  handleClose,
  isVisible,
}: BaseModalProps) => {
  // --- RENDER ---

  return (
    <GestureRecognizer
      onSwipeDown={() => handleClose()}
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
          marginLeft: 20,
          marginRight: 20,
          marginTop: 90,
        }}
      >
        <View
          style={{
            flex: 1,
            // Needed for the children to have a fixed width.
            width: "90%",
          }}
        >
          <View
            style={{
              alignItems: "center",
              alignContent: "center",
              flex: 1,
              justifyContent: "center",
            }}
          >
            {children}
          </View>

          <Toast />
        </View>
      </Modal>
    </GestureRecognizer>
  );
};
