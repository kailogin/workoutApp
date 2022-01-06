import React from "react";
import { View } from "react-native";

import { BaseModal } from "./baseModal";
import { BaseText } from "./baseText";

interface ModalProps {
  buttonText: string;
  handleButtonClick: () => void;
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Modal = ({
  buttonText,
  handleButtonClick,
  isVisible,
  setIsVisible,
}: ModalProps) => {
  // --- RENDER ---

  return (
    <BaseModal
      buttonText={buttonText}
      handleAddButtonClick={handleButtonClick}
      isVisible={isVisible}
      setIsVisible={setIsVisible}
    >
      <View
        style={{
          alignItems: "center",
          alignContent: "center",
          flex: 1,
          justifyContent: "center",
        }}
      >
        <BaseText style={{ padding: 16 }}>
          This will be a thorough description of the exercise. This will be a
          thorough description of the exercise. This will be a thorough
          description of the exercise. This will be a thorough description of
          the exercise. This will be a thorough description of the exercise.
          This will be a thorough description of the exercise. This will be a
          thorough description of the exercise.This will be a thorough
          description of the exercise. This will be a thorough description of
          the exercise. This will be a thorough description of the exercise.
          This will be a thorough description of the exercise. This will be a
          thorough description of the exercise. This will be a thorough
          description of the exercise. This will be a thorough description of
          the exercise.
        </BaseText>
      </View>
    </BaseModal>
  );
};
