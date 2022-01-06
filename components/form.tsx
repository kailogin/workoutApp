import React, { useState } from "react";
import { TextInput, TouchableOpacity, View, StyleSheet } from "react-native";
import { useActionSheet } from "@expo/react-native-action-sheet";

import { Colors } from "../utils/colors";
import { BaseText } from "./baseText";
import { MaterialIcons } from "@expo/vector-icons";
import { useAppDispatch } from "../stores/rootStore/rootStore";
import { addNewExercise } from "../stores/exercisesStore/exerciseActions";
import { Categories } from "../screens/exercisesScreen/utils/exerciseTypes";

interface FormProps {
  actionSheetOptions: string[];
  buttonText: string;
  formTitle: string;
  formSelectTitle: string;
  handleAddButtonClick: () => void;
  selectedElement: Categories;
  setSelectedElement: any;
}

export const Form = ({
  actionSheetOptions,
  buttonText,
  formTitle,
  formSelectTitle,
  handleAddButtonClick,
  selectedElement,
  setSelectedElement,
}: FormProps) => {
  const dispatch = useAppDispatch();

  // --- STATE ---

  const { showActionSheetWithOptions } = useActionSheet();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  // --- CALLBACKS ---

  const handleActionSheetSelection = () => {
    showActionSheetWithOptions(
      {
        options: ["Cancel", ...actionSheetOptions],
        cancelButtonIndex: 0,
        userInterfaceStyle: "dark",
        tintColor: Colors.ORANGE,
      },
      (buttonIndex) => {
        if (buttonIndex) {
          // Needs to be -1 because of cancel
          setSelectedElement(actionSheetOptions[buttonIndex - 1]);
        }
      }
    );
  };

  const handleNameValueChange = (value: string) => {
    console.log(value);
    setName(value);
  };

  const handleDescriptionValueChange = (value: string) => {
    console.log(value);
    setDescription(value);
  };

  const handleButtonPress = () => {
    dispatch(
      addNewExercise({
        category: selectedElement,
        exerciseName: name,
        // TODO: Fix id gedöhns
        id: Math.random().toString(),
        description: "TESCHD",
        videoLink: "LINK",
      })
    );

    handleAddButtonClick();
  };

  // --- RENDER ---

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <BaseText
        style={{
          fontSize: 20,
          marginTop: 32,
          marginBottom: 16,
          textAlign: "center",
        }}
      >
        {formTitle}
      </BaseText>

      <TextInput
        onChangeText={handleNameValueChange}
        placeholder="Exercise Name"
        style={styles.textInput}
        value={name}
      />

      <TouchableOpacity
        onPress={handleActionSheetSelection}
        style={styles.listElementButton}
      >
        <View style={styles.listElementView}>
          <BaseText>{formSelectTitle}</BaseText>

          <MaterialIcons name="add" size={24} color={Colors.WHITE} />
        </View>
      </TouchableOpacity>

      <BaseText style={{ alignSelf: "center", marginBottom: 32, padding: 8 }}>
        {selectedElement}
      </BaseText>

      <TextInput
        onChangeText={handleDescriptionValueChange}
        placeholder="Lorem ipsum sdfjsdkfsd fjskdjk"
        style={[styles.textInput, { height: 60 }]}
        value={description}
      />

      <TouchableOpacity onPress={handleButtonPress} style={styles.button}>
        <BaseText
          style={{ fontSize: 12, fontWeight: "bold", textAlign: "center" }}
        >
          {buttonText}
        </BaseText>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  listElementView: {
    alignItems: "center",
    flexDirection: "row",
    padding: 16,
  },
  listElementButton: {
    backgroundColor: Colors.CARD,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: Colors.WHITE,
    width: "90%",
    marginBottom: 24,
  },
  button: {
    alignSelf: "center",
    backgroundColor: Colors.ORANGE,
    borderBottomWidth: 1,
    borderRadius: 8,
    bottom: 40,
    position: "absolute",
    marginBottom: 6,
    padding: 8,
    width: 100,
  },
  textInput: {
    borderColor: Colors.WHITE,
    backgroundColor: Colors.WHITE,
    color: Colors.RED,
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 24,
    padding: 12,
  },
  picker: {
    height: 50,
    marginBottom: 40,
    padding: 4,
    width: "100%",
  },
});
