import React, { useMemo } from "react";
import { SafeAreaView, TouchableOpacity } from "react-native";
import { useTranslation } from "react-i18next";

import { BaseText } from "../../../components/baseText";
import { BaseView } from "../../../components/baseView";
import { ExerciseStackNavProps } from "../utils/exerciseParamList";
import { Colors } from "../../../utils/colors";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../stores/rootStore/rootStore";
import { deleteExercise } from "../../../stores/exercisesStore/exerciseActions";

interface ExerciseProps extends ExerciseStackNavProps<"Exercise"> {}

export const Exercise: React.FC<ExerciseProps> = ({
  navigation,
  route,
}: ExerciseStackNavProps<"Exercise">) => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  // --- STATE ---

  const exercises = useAppSelector(({ exercise }) => exercise.exercises);

  // --- HELPERS ---

  const selectedExercise = useMemo(
    () => exercises.find((item) => item.exerciseName === route.params.name),
    [exercises, route.params.name]
  );

  // --- RENDER ---

  if (!selectedExercise) {
    return (
      <SafeAreaView style={{ backgroundColor: Colors.BLACK, height: "100%" }}>
        <BaseText style={{ fontSize: 24, marginTop: 40, padding: 40 }}>
          {t("noExerciseFound")}
        </BaseText>
      </SafeAreaView>
    );
  }

  const {
    category,
    description,
    exerciseName,
    id,
    videoLink,
  } = selectedExercise;

  return (
    <BaseView>
      <BaseText
        style={{
          fontSize: 24,
          marginBottom: 40,
          textDecorationColor: Colors.ORANGE,
          textDecorationLine: "underline",
          textDecorationStyle: "solid",
        }}
      >
        {exerciseName}
      </BaseText>

      <BaseText
        style={{
          fontSize: 18,
          marginBottom: 32,
        }}
      >
        {category}
      </BaseText>

      {/* {description && ( */}
      <BaseText
        style={{
          fontSize: 14,
          marginBottom: 32,
        }}
      >
        This will be a thorough description of the exercise. This will be a
        thorough description of the exercise. This will be a thorough
        description of the exercise. This will be a thorough description of the
        exercise. This will be a thorough description of the exercise. This will
        be a thorough description of the exercise. This will be a thorough
        description of the exercise.
      </BaseText>
      {/* )} */}

      <TouchableOpacity
        onPress={() => {
          console.log("DELETE EXERCISE");
          dispatch(deleteExercise(selectedExercise));
          // TODO: Toast saying you successfully deleted that exercise and then navigating to exercisesList
        }}
      >
        <BaseText>DELETE THIS EXERCISE</BaseText>
      </TouchableOpacity>

      {/* TODO: Build in react native youtube plugin */}
      {videoLink && (
        <BaseText
          style={{
            fontSize: 24,
            marginBottom: 32,
          }}
        >
          {videoLink}
        </BaseText>
      )}
    </BaseView>
  );
};
