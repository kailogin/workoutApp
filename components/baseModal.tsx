import React, { ReactNode } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Modal from "react-native-modal";
import GestureRecognizer from "react-native-swipe-gestures";

import { Colors } from "../utils/colors";
import { BaseText } from "./baseText";

interface BaseModalProps {
  buttonText: string;
  children: ReactNode;
  handleAddButtonClick: () => void;
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BaseModal: React.FC<BaseModalProps> = ({
  buttonText,
  children,
  handleAddButtonClick,
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
            paddingHorizontal: 5,
          }}
        >
          <MaterialIcons name="close" size={24} color={Colors.WHITE} />
        </TouchableOpacity>

        <View>
          {/* TODO: Replace this with Form data and not the dummy text I added in addNewModal */}
          {children}

          <TouchableOpacity
            onPress={handleAddButtonClick}
            style={styles.button}
          >
            <BaseText
              style={{ fontSize: 12, fontWeight: "bold", textAlign: "center" }}
            >
              {buttonText}
            </BaseText>
          </TouchableOpacity>
        </View>
      </Modal>
    </GestureRecognizer>
  );
};

const styles = StyleSheet.create({
  button: {
    alignSelf: "center",
    backgroundColor: Colors.ORANGE,
    borderBottomWidth: 1,
    borderRadius: 8,
    marginBottom: 6,
    padding: 8,
    width: "fit-content",
  },
});
