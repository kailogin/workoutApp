import React, { useEffect, useRef, useState } from "react";

import { BaseText } from "../../../components/baseText";
import { BaseView } from "../../../components/baseView";
import { WorkoutStackNavProps } from "../utils/workoutsParamList";

interface EditWorkoutProps extends WorkoutStackNavProps<"Edit"> {}

export const EditWorkout: React.FC<EditWorkoutProps> = ({
  navigation,
  route,
}: WorkoutStackNavProps<"Edit">) => {
  // --- STATE ---

  // const [workoutState] = useState();

  // const submit = useRef(() => {});

  // --- EFFECTS ---

  // useEffect(() => {
  //   navigation.setParams({ submit });
  // }, []);

  // --- CALLBACKS ---

  // const apiCall = (x: any) => {
  //   return x;
  // };

  // submit.current = () => {
  //   // api call with new form state -> save new exercise state in reducer
  //   apiCall(workoutState);
  //   navigation.goBack();
  // };

  // --- RENDER ---

  return (
    <BaseView>
      <BaseText>Edit Workout</BaseText>
      {/* <BaseText>{route.params.name}</BaseText> */}
    </BaseView>
  );
};
