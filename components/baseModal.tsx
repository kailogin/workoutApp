import React from "react";
import { TouchableHighlight, View } from "react-native";
import Modal from "react-native-modal";

import { Colors } from "../utils/colors";
import { BaseText } from "./baseText";

interface BaseModalProps {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BaseModal = ({ isVisible, setIsVisible }: BaseModalProps) => {
  return (
    <View
      style={{
        flex: !isVisible ? 0 : 1,
      }}
    >
      <Modal
        isVisible={isVisible}
        style={{
          alignItems: "center",
          backgroundColor: Colors.BLACK,
          marginTop: 60,
          marginLeft: 0,
          marginRight: 0,
          marginBottom: 0,
          justifyContent: "center",
        }}
      >
        <View>
          <BaseText>I am the modal content!</BaseText>
          <TouchableHighlight onPress={() => setIsVisible(!isVisible)}>
            <BaseText>Close the Modal</BaseText>
          </TouchableHighlight>
        </View>
      </Modal>
    </View>
  );
};
