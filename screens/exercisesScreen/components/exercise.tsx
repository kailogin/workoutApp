import React from "react";

import { BaseText } from "../../../components/baseText";
import { BaseView } from "../../../components/baseView";
import { ExerciseStackNavProps } from "../utils/exerciseParamList";

interface ExerciseProps extends ExerciseStackNavProps<"Exercise"> {}

export const Exercise: React.FC<ExerciseProps> = ({
  navigation,
  route,
}: ExerciseStackNavProps<"Exercise">) => {
  // --- STATE ---

  // --- RENDER ---

  return (
    <BaseView>
      <BaseText>{route.params.name}</BaseText>
    </BaseView>
  );
};
