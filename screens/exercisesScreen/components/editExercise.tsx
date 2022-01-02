import React, { useEffect, useRef, useState } from "react";

import { BaseText } from "../../../components/baseText";
import { CenterView } from "../../../components/centerView";
import { ExerciseStackNavProps } from "../utils/exerciseParamList";

interface EditExerciseProps extends ExerciseStackNavProps<"Edit"> {}

export const EditExercise: React.FC<EditExerciseProps> = ({
  navigation,
  route,
}: ExerciseStackNavProps<"Edit">) => {
  // --- STATE ---

  const [exerciseState] = useState();

  const submit = useRef(() => {});

  // --- EFFECTS ---

  // useEffect(() => {
  //   navigation.setParams({ submit });
  // }, []);

  // --- CALLBACKS ---

  const apiCall = (x: any) => {
    return x;
  };

  submit.current = () => {
    // api call with new form state -> save new exercise state in reducer
    apiCall(exerciseState);
    navigation.goBack();
  };

  // --- RENDER ---

  return (
    <CenterView>
      <BaseText>EditExercise</BaseText>
      {/* <BaseText>{route.params.name}</BaseText> */}
    </CenterView>
  );
};
