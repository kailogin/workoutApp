import React, { ReactNode } from "react";
import { View } from "react-native";

import { BaseModal } from "./baseModal";

interface ModalProps {
  children: ReactNode;
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Modal = ({ children, isVisible, setIsVisible }: ModalProps) => {
  // --- RENDER ---

  return (
    <BaseModal isVisible={isVisible} setIsVisible={setIsVisible}>
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
    </BaseModal>
  );
};
