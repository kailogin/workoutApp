import React from "react";

import { BaseText } from "../../../components/baseText";
import { BaseView } from "../../../components/baseView";
import { WorkoutStackNavProps } from "../utils/workoutsParamList";
import { Colors } from "../../../utils/colors";

interface AddWorkoutProps extends WorkoutStackNavProps<"AddWorkout"> {}

export const AddWorkout: React.FC<AddWorkoutProps> = ({
  navigation,
  route,
}: WorkoutStackNavProps<"AddWorkout">) => {
  // --- HELPERS ---

  // --- RENDER ---

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
        Add a new workout
      </BaseText>
    </BaseView>
  );
};
