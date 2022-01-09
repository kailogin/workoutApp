import React, { useMemo } from "react";
import { SafeAreaView, TouchableOpacity } from "react-native";
import { useTranslation } from "react-i18next";
import Toast from "react-native-toast-message";

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
          {t("exercises.noExerciseFound")}
        </BaseText>
      </SafeAreaView>
    );
  }

  const { category, description, exerciseName, id, sets } = selectedExercise;

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

      {/* TODO: Add description to all types */}

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
          const exName = selectedExercise.exerciseName ?? "";

          Toast.show({
            type: "success",
            text1: `You deleted the exercise ${exName}`,
          });
          dispatch(deleteExercise(selectedExercise));
          navigation.navigate("ExercisesList");
        }}
        style={{
          backgroundColor: Colors.ONBOARDING_BG,
          borderRadius: 12,
          marginBottom: 32,
          padding: 12,
          width: 150,
        }}
      >
        <BaseText
          style={{
            color: Colors.BLACK,
          }}
        >
          {t("exercises.delete")}
        </BaseText>
      </TouchableOpacity>
    </BaseView>
  );
};
