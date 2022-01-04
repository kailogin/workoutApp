import React from "react";

import { BaseText } from "../../../components/baseText";
import { BaseView } from "../../../components/baseView";
import { WorkoutStackNavProps } from "../utils/workoutsParamList";

interface WorkoutProps extends WorkoutStackNavProps<"WorkoutExercise"> {}

export const WorkoutExercise: React.FC<WorkoutProps> = ({
  navigation,
  route,
}: WorkoutStackNavProps<"WorkoutExercise">) => {
  // --- STATE ---

  // --- RENDER ---

  return (
    <BaseView>
      <BaseText>{route.params.name}</BaseText>
    </BaseView>
  );
};
