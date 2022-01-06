import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";

import { ExercisesList } from "../exercisesList";
import {
  ExerciseParamList,
  ExerciseStackNavProps,
} from "../utils/exerciseParamList";
import { Colors } from "../../../utils/colors";
import { StackType } from "../../../navigation/utils/navigationTypes";
import { useAppDispatch } from "../../../stores/rootStore/rootStore";
import { Categories } from "../utils/exerciseTypes";
import { Modal } from "../../../components/modal";
import { ExercisesListStackHeaderRight } from "./exercisesListStackHeaderRight";
import { Form } from "../../../components/form";

interface ExercisesListStackProps {
  Stack: StackType<ExerciseParamList>;
}

export const exercisesListStack = ({ Stack }: ExercisesListStackProps) => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  // --- STATE ---

  const [isEditExercisesClicked, setIsEditExercisesClicked] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedWorkoutGroup, setSelectedWorkoutGroup] = useState(
    Categories.Abs
  );

  // --- HELPERS ---

  const translate = (key: string) => t(`exercises.${key}`);

  const workoutGroups = Object.keys(Categories);

  // --- RENDER ---

  return (
    <Stack.Screen
      // TODO: Here muss ich den ExercisesList Screen rendern mit den roten Icons -> oder ich kann den state runter passen
      name="ExercisesList"
      options={({
        navigation,
        route,
      }: ExerciseStackNavProps<"ExercisesList">) => ({
        headerTintColor: Colors.WHITE,
        headerTitle: isEditExercisesClicked
          ? translate("headerEditExercisesList")
          : translate("headerExercisesList"),
        headerRight: () => (
          <ExercisesListStackHeaderRight
            isEditExercisesClicked={isEditExercisesClicked}
            navigation={navigation}
            setIsEditExercisesClicked={setIsEditExercisesClicked}
            setIsModalVisible={setIsModalVisible}
          />
        ),
        title: "Exercises Unclicked",
      })}
    >
      {(navProps: ExerciseStackNavProps<"ExercisesList">) => (
        <View style={{ flex: 1, backgroundColor: Colors.BLACK }}>
          <ExercisesList
            isEditExercisesClicked={isEditExercisesClicked}
            navProps={navProps}
          />

          <Modal isVisible={isModalVisible} setIsVisible={setIsModalVisible}>
            <Form
              actionSheetOptions={workoutGroups}
              buttonText="Add"
              formSelectTitle="Muscle group"
              formTitle="Add a new exercise"
              handleAddButtonClick={() => {
                setIsModalVisible(false);
                console.log("CIAO HERE MUSS EINE Neue Exercise GEADDET WERDEN");
              }}
              selectedElement={selectedWorkoutGroup}
              setSelectedElement={setSelectedWorkoutGroup}
            />
          </Modal>
        </View>
      )}
    </Stack.Screen>
  );
};
