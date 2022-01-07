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
import { WorkoutListStackHeaderRight } from "./workoutListStackHeaderRight";
import { BaseModal } from "../../../components/baseModal";
import { AddWorkoutForm } from "../../../components/addWorkoutForm";

interface WorkoutListStackProps {
  Stack: StackType<WorkoutsParamList>;
}

export const workoutListStack = ({ Stack }: WorkoutListStackProps) => {
  const { t } = useTranslation();

  // --- STATE ---

  const [isEditWorkoutsClicked, setIsEditWorkoutsClicked] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  // --- HELPERS ---

  const translate = (key: string) => t(`workouts.${key}`);

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

          <BaseModal
            handleClose={() => setIsModalVisible(false)}
            isVisible={isModalVisible}
          >
            <AddWorkoutForm
              handleAddButtonClick={() => {
                setIsModalVisible(false);
              }}
            />
          </BaseModal>
        </View>
      )}
    </Stack.Screen>
  );
};
