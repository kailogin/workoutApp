import React, { useEffect, useState } from "react";
import { TextInput, TouchableOpacity, View, StyleSheet } from "react-native";
import { useActionSheet } from "@expo/react-native-action-sheet";
import Toast from "react-native-toast-message";

import { Colors } from "../utils/colors";
import { BaseText } from "./baseText";
import { MaterialIcons } from "@expo/vector-icons";
import { useAppDispatch } from "../stores/rootStore/rootStore";
import { addNewExercise } from "../stores/exercisesStore/exerciseActions";
import { Categories } from "../screens/exercisesScreen/utils/exerciseTypes";

interface FormProps {
  formTitle: string;
  handleAddButtonClick: () => void;
}

export const Form = ({ formTitle, handleAddButtonClick }: FormProps) => {
  const dispatch = useAppDispatch();

  // --- STATE ---

  const { showActionSheetWithOptions } = useActionSheet();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [muscleGroup, setMuscleGroup] = useState(Categories.Abs);

  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(true);

  // const [selectedExercises, setSelectedExercises] = useState<string[]>([]);

  // const exercises = useAppSelector(
  //   ({ exercise }: RootState) => exercise.exercises
  // );

  // --- HELPERS ---

  const workoutGroups = Object.keys(Categories);

  // --- CALLBACKS ---

  const handleActionSheetSelection = () => {
    showActionSheetWithOptions(
      {
        options: ["Cancel", ...workoutGroups],
        cancelButtonIndex: 0,
        userInterfaceStyle: "dark",
        tintColor: Colors.ORANGE,
      },
      (buttonIndex) => {
        if (buttonIndex) {
          // Needs to be -1 because of "Cancel"
          setMuscleGroup(workoutGroups[buttonIndex - 1] as Categories);
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

  const handleMuscleGroupValueChange = (value: string) => {
    console.log(value);
    setMuscleGroup(value as Categories);
  };

  const validateFields = () => {
    if (!name || name === "") {
      setIsSubmitButtonDisabled(true);

      Toast.show({
        type: "error",
        text1: "Please choose a workout name.",
      });
      return;
    }

    if (!description || description === "") {
      setIsSubmitButtonDisabled(true);

      Toast.show({
        type: "error",
        text1: "Please set a description.",
      });
      return;
    }

    setIsSubmitButtonDisabled(false);
  };

  const handleButtonPress = async () => {
    validateFields();

    if (isSubmitButtonDisabled) {
      return;
    }

    dispatch(
      addNewExercise({
        category: muscleGroup,
        exerciseName: name,
        // TODO: Fix id gedöhns
        id: Math.random().toString(),
        description: description,
      })
    );

    handleAddButtonClick();
  };

  // --- EFFECTS ---

  useEffect(() => {
    if (!description || description === "") {
      setIsSubmitButtonDisabled(true);
      return;
    }

    if (!name || name === "") {
      setIsSubmitButtonDisabled(true);
      return;
    }

    setIsSubmitButtonDisabled(false);
  }, [description, name]);

  // --- RENDER ---

  return (
    <View style={{ flex: 1 }}>
      <BaseText
        style={{
          fontSize: 20,
          marginTop: 40,
          marginBottom: 16,
          textAlign: "center",
        }}
      >
        {formTitle}
      </BaseText>

      <BaseText style={{ fontSize: 16 }}>Exercise name</BaseText>

      <TextInput
        onChangeText={handleNameValueChange}
        style={styles.textInput}
        value={name}
      />

      <BaseText style={{ fontSize: 16 }}>Muscle group</BaseText>

      <View
        style={{
          alignItems: "center",
          backgroundColor: Colors.WHITE,
          borderRadius: 12,
          flexDirection: "row",
          marginBottom: 40,
          // padding: 10,
          width: "95%",
        }}
      >
        <TextInput
          onChangeText={handleMuscleGroupValueChange}
          style={[
            styles.textInput,
            {
              borderWidth: 0,
              marginBottom: 0,
              marginRight: 10,
              width: "90%",
            },
          ]}
          value={muscleGroup}
          onPressIn={handleActionSheetSelection}
        />

        <MaterialIcons
          name="add"
          size={24}
          color={Colors.BLACK}
          style={{ marginRight: 16 }}
          onPress={handleActionSheetSelection}
        />
      </View>

      <BaseText
        style={{
          alignSelf: "flex-start",
          color: Colors.WHITE,
          fontSize: 16,
        }}
      >
        Description
      </BaseText>

      <TextInput
        multiline
        onChangeText={handleDescriptionValueChange}
        style={[styles.textInput, { height: 150, minWidth: "100%" }]}
        value={description}
      />

      <TouchableOpacity
        onPress={handleButtonPress}
        style={isSubmitButtonDisabled ? styles.buttonDisabled : styles.button}
      >
        <BaseText
          style={{ fontSize: 12, fontWeight: "bold", textAlign: "center" }}
        >
          Add
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
    borderRadius: 24,
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
  buttonDisabled: {
    alignSelf: "center",
    backgroundColor: Colors.RED,
    borderBottomWidth: 1,
    borderColor: Colors.RED,
    borderRadius: 8,
    bottom: 40,
    position: "absolute",
    marginBottom: 6,
    padding: 8,
    width: 100,
  },
  textInput: {
    backgroundColor: Colors.WHITE,
    color: Colors.BLACK,
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 32,
    padding: 12,
  },
});
