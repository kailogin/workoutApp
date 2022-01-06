import React from "react";
import { View } from "react-native";

import { BaseModal } from "./baseModal";
import { Form } from "./form";

interface ModalProps {
  buttonText: string;
  formTitle: string;
  handleButtonClick: () => void;
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Modal = ({
  buttonText,
  formTitle,
  handleButtonClick,
  isVisible,
  setIsVisible,
}: ModalProps) => {
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
        <Form
          buttonText={buttonText}
          formTitle={formTitle}
          handleAddButtonClick={handleButtonClick}
        />
      </View>
    </BaseModal>
  );
};
