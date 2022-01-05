import React, { useMemo } from "react";
import { SafeAreaView } from "react-native";
import { useTranslation } from "react-i18next";

import { BaseText } from "../../../components/baseText";
import { BaseView } from "../../../components/baseView";
import { ExerciseStackNavProps } from "../utils/exerciseParamList";
import { Colors } from "../../../utils/colors";
import { useAppSelector } from "../../../stores/rootStore/rootStore";

interface ExerciseProps extends ExerciseStackNavProps<"Exercise"> {}

export const Exercise: React.FC<ExerciseProps> = ({
  navigation,
  route,
}: ExerciseStackNavProps<"Exercise">) => {
  const { t } = useTranslation();

  // --- STATE ---

  const exercises = useAppSelector(({ exercise }) => exercise);

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
          fontSize: 40,
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
          fontSize: 24,
          marginBottom: 32,
        }}
      >
        {category}
      </BaseText>

      {/* {description && ( */}
      <BaseText
        style={{
          fontSize: 24,
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
