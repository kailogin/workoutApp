import React, { useState } from "react";
import { TextInput, TouchableOpacity, View, StyleSheet } from "react-native";
import { useActionSheet } from "@expo/react-native-action-sheet";

import { Colors } from "../utils/colors";
import { BaseText } from "./baseText";
import { useAppSelector } from "../stores/rootStore/rootStore";
import { RootState } from "../stores/rootStore/rootTypes";
import { Categories } from "../screens/exercisesScreen/utils/exerciseTypes";
import { MaterialIcons } from "@expo/vector-icons";

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

  const { showActionSheetWithOptions } = useActionSheet();

  const exercises = useAppSelector(
    ({ exercise }: RootState) => exercise.exercises
  );

  const exercisesNamesAndId = exercises.map((exercise) => ({
    id: exercise.id,
    label: exercise.exerciseName,
  }));

  const workoutGroups = Object.keys(Categories);

  const [selectedExercises, setSelectedExercises] = useState<string[]>([]);
  const [selectedWorkoutGroup, setSelectedWorkoutGroup] = useState<
    Categories
  >();

  const handleWorkoutGroupSelection = () => {
    showActionSheetWithOptions(
      {
        options: ["Cancel", ...workoutGroups],
        cancelButtonIndex: 0,
        userInterfaceStyle: "dark",
        tintColor: Colors.ORANGE,
      },
      (buttonIndex) => {
        if (buttonIndex) {
          // Needs to be -1 because of cancel
          setSelectedWorkoutGroup(workoutGroups[buttonIndex - 1] as Categories);
        }
      }
    );
  };

  // --- RENDER ---

  return (
    <View style={{ flex: 1, paddingVertical: 16 }}>
      <BaseText style={{ fontSize: 20, marginBottom: 16, textAlign: "center" }}>
        {formTitle}
      </BaseText>
      <View>
        <TextInput placeholder="Name" style={styles.textInput} />

        <TouchableOpacity onPress={handleWorkoutGroupSelection}>
          <View style={{ alignItems: "baseline", flexDirection: "row" }}>
            <BaseText style={{ marginBottom: 16, padding: 8 }}>
              Select Workout Group
            </BaseText>

            <MaterialIcons name="add" size={24} color={Colors.WHITE} />
          </View>
        </TouchableOpacity>

        <BaseText style={{ marginBottom: 32, padding: 8 }}>
          {selectedWorkoutGroup}
        </BaseText>

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
    width: "50%",
  },
  textInput: {
    borderColor: Colors.WHITE,
    color: Colors.WHITE,
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
