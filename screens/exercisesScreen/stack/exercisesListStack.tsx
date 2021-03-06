import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";

import { ExercisesList } from "../exercisesList";
import {
  ExerciseParamList,
  ExerciseStackNavProps,
} from "../utils/exerciseParamList";
import { Colors } from "../../../utils/theme";
import { StackType } from "../../../navigation/utils/navigationTypes";
import { ExercisesListStackHeaderRight } from "./exercisesListStackHeaderRight";
import { AddExerciseForm } from "../../../components/addExerciseForm";
import { BaseModal } from "../../../components/baseModal";

interface ExercisesListStackProps {
  Stack: StackType<ExerciseParamList>;
}

export const exercisesListStack = ({ Stack }: ExercisesListStackProps) => {
  const { t } = useTranslation();

  // --- STATE ---

  const [isEditExercisesClicked, setIsEditExercisesClicked] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  // --- HELPERS ---

  const translate = (key: string) => t(`exercises.${key}`);

  // --- RENDER ---

  return (
    <Stack.Screen
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
        title: translate("headerExercisesList"),
      })}
    >
      {(navProps: ExerciseStackNavProps<"ExercisesList">) => (
        <View style={{ backgroundColor: Colors.BLACK, flex: 1 }}>
          <ExercisesList
            isEditExercisesClicked={isEditExercisesClicked}
            navProps={navProps}
          />

          <BaseModal
            handleClose={() => {
              setIsModalVisible(false);
            }}
            isVisible={isModalVisible}
          >
            <AddExerciseForm
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
