import React, { useCallback, useEffect, useMemo, useState } from "react";
import { TextInput, TouchableOpacity, View, StyleSheet } from "react-native";
import { useActionSheet } from "@expo/react-native-action-sheet";
import Toast from "react-native-toast-message";
import MultiSelect from "react-native-sectioned-multi-select";

import { Colors } from "../utils/colors";
import { BaseText } from "./baseText";
import { MaterialIcons } from "@expo/vector-icons";
import { useAppDispatch, useAppSelector } from "../stores/rootStore/rootStore";
import { Categories } from "../screens/exercisesScreen/utils/exerciseTypes";
import { RootState } from "../stores/rootStore/rootTypes";
import { addNewWorkout } from "../stores/workoutsStore/workoutActions";
import {
  multiSelectColorStyles,
  multiSelectIcons,
  multiSelectStyles,
  RenderSelectText,
} from "./multiSelectHelpers";

interface AddWorkoutFormProps {
  handleAddButtonClick: () => void;
}

export const AddWorkoutForm = ({
  handleAddButtonClick,
}: AddWorkoutFormProps) => {
  const dispatch = useAppDispatch();

  // --- STATE ---

  const { showActionSheetWithOptions } = useActionSheet();

  const [name, setName] = useState("");
  const [muscleGroup, setMuscleGroup] = useState(Categories.Abs);
  const [selectedExercises, setSelectedExercises] = useState<string[]>([]);
  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(true);

  const exercises = useAppSelector(
    ({ exercise }: RootState) => exercise.exercises
  );

  // --- EFFECTS ---

  useEffect(() => {
    if (!name || name === "") {
      setIsSubmitButtonDisabled(true);
      return;
    }

    if (selectedExercises.length === 0) {
      setIsSubmitButtonDisabled(true);
      return;
    }

    setIsSubmitButtonDisabled(false);
  }, [name]);

  // --- HELPERS ---

  const exerciseNamesAndId = exercises.map((exercise) => ({
    id: exercise.id,
    name: exercise.exerciseName,
  }));

  const workoutGroups = Object.keys(Categories);

  const findRightExercises = useMemo(() => {
    return exercises.filter((exercise) =>
      selectedExercises.includes(exercise.id)
    );
  }, [exercises, selectedExercises]);

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

  const handleNameValueChange = useCallback((value: string) => {
    setName(value);
  }, []);

  const handleMuscleGroupValueChange = (value: string) => {
    setMuscleGroup(value as Categories);
  };

  const handleSelectedMultiSelectItemsChange = (exercises: any) => {
    if (exercises in selectedExercises) {
      return;
    }

    setSelectedExercises([...exercises]);
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

    setIsSubmitButtonDisabled(false);
  };

  const handleWorkoutButtonPress = () => {
    validateFields();

    if (isSubmitButtonDisabled) {
      return;
    }

    dispatch(
      addNewWorkout({
        exercises: findRightExercises,
        id: Math.random.toString(),
        muscleGroups: muscleGroup,
        workoutName: name,
      })
    );

    handleAddButtonClick();
  };

  // --- RENDER ---

  return (
    <View style={{ flex: 1 }}>
      <BaseText
        style={{
          fontSize: 20,
          marginTop: 40,
          marginBottom: 24,
          textAlign: "center",
        }}
      >
        Add a new Workout
      </BaseText>

      <BaseText style={styles.inputTitle}>Workout name</BaseText>

      <TextInput
        onChangeText={handleNameValueChange}
        style={styles.textInput}
        value={name}
      />

      <BaseText style={styles.inputTitle}>Muscle group</BaseText>

      <View
        style={{
          alignItems: "center",
          backgroundColor: Colors.WHITE,
          borderRadius: 12,
          flexDirection: "row",
          marginBottom: 40,
          width: "100%",
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

      <MultiSelect
        colors={multiSelectColorStyles}
        IconRenderer={MaterialIcons}
        icons={multiSelectIcons}
        items={exerciseNamesAndId}
        onSelectedItemsChange={handleSelectedMultiSelectItemsChange}
        renderSelectText={RenderSelectText}
        searchPlaceholderText="Search exercises..."
        selectedItems={selectedExercises}
        showRemoveAll
        uniqueKey="id"
        styles={multiSelectStyles}
      />

      <TouchableOpacity
        onPress={handleWorkoutButtonPress}
        style={isSubmitButtonDisabled ? styles.buttonDisabled : styles.button}
      >
        <BaseText
          style={{ fontSize: 12, fontWeight: "bold", textAlign: "center" }}
        >
          Add Workout
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
    width: "100%",
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
  inputTitle: {
    color: Colors.WHITE,
    fontSize: 16,
    marginBottom: 4,
  },
});
