import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";

import {
  WorkoutsParamList,
  WorkoutStackNavProps,
} from "../utils/workoutsParamList";
import { WorkoutList } from "../workoutsList";
import { Colors } from "../../../utils/colors";
import { StackType } from "../../../navigation/utils/navigationTypes";
import { Modal } from "../../../components/modal";
import { useAppSelector } from "../../../stores/rootStore/rootStore";
import { RootState } from "../../../stores/rootStore/rootTypes";
import { Categories } from "../../exercisesScreen/utils/exerciseTypes";
import { WorkoutListStackHeaderRight } from "./workoutListStackHeaderRight";
import { Form } from "../../../components/form";

interface WorkoutListStackProps {
  Stack: StackType<WorkoutsParamList>;
}

export const workoutListStack = ({ Stack }: WorkoutListStackProps) => {
  const { t } = useTranslation();

  // --- STATE ---

  const [isEditWorkoutsClicked, setIsEditWorkoutsClicked] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  // const [selectedExercises, setSelectedExercises] = useState<string[]>([]);
  const [selectedWorkoutGroup, setSelectedWorkoutGroup] = useState(
    Categories.Abs
  );

  const exercises = useAppSelector(
    ({ exercise }: RootState) => exercise.exercises
  );

  // --- HELPERS ---

  const translate = (key: string) => t(`workouts.${key}`);

  const workoutGroups = Object.keys(Categories);

  // const exercisesNamesAndId = exercises.map((exercise) => ({
  //   id: exercise.id,
  //   label: exercise.exerciseName,
  // }));

  // --- RENDER ---

  return (
    <Stack.Screen
      name="WorkoutList"
      options={({
        navigation,
        route,
      }: WorkoutStackNavProps<"WorkoutList">) => ({
        headerTintColor: Colors.WHITE,
        headerTitle: isEditWorkoutsClicked
          ? translate("headerEditWorkoutsList")
          : translate("headerWorkoutsList"),
        headerRight: () => (
          <WorkoutListStackHeaderRight
            isEditWorkoutsClicked={isEditWorkoutsClicked}
            navigation={navigation}
            setIsEditWorkoutsClicked={setIsEditWorkoutsClicked}
            setIsModalVisible={setIsModalVisible}
          />
        ),
        title: "Workouts",
      })}
    >
      {({ navigation, route }: WorkoutStackNavProps<"WorkoutList">) => (
        <View style={{ flex: 1, backgroundColor: Colors.BLACK }}>
          <WorkoutList navigation={navigation} route={route} />

          <Modal isVisible={isModalVisible} setIsVisible={setIsModalVisible}>
            <Form
              actionSheetOptions={workoutGroups}
              buttonText="Add"
              formSelectTitle="Muscle group"
              formTitle="Add a new workout"
              handleAddButtonClick={() => {
                setIsModalVisible(false);
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
