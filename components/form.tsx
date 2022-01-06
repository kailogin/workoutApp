import React, { useState } from "react";
import { TextInput, TouchableOpacity, View, StyleSheet } from "react-native";
import { Colors } from "../utils/colors";
import { BaseText } from "./baseText";

interface FormProps {
  buttonText: string;
  formTitle: string;
  handleAddButtonClick: () => void;
}

export const Form = ({
  buttonText,
  formTitle,
  handleAddButtonClick,
}: FormProps) => {
  // --- STATE ---

  const [value, setValue] = useState(0);

  // --- RENDER ---

  return (
    <View style={{ padding: 16 }}>
      <BaseText style={{ marginBottom: 16, textAlign: "center" }}>
        {formTitle}
      </BaseText>
      <View>
        <TextInput placeholder="Workout Name" style={styles.textInput} />
        {/* PICKER for Group */}

        <TextInput
          placeholder="Workout Group"
          secureTextEntry={true}
          style={styles.textInput}
        />

        {/* PICKER for Exercises */}

        <TouchableOpacity onPress={handleAddButtonClick} style={styles.button}>
          <BaseText
            style={{ fontSize: 12, fontWeight: "bold", textAlign: "center" }}
          >
            {buttonText}
          </BaseText>
        </TouchableOpacity>
      </View>
    </View>
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
  textInput: {
    borderColor: Colors.WHITE,
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 12,
    padding: 12,
  },
});
