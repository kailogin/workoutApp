import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Colors } from "../../utils/colors";
import { WorkoutExercise } from "./components/workoutExercise";
import { workoutStack } from "./stack/workoutStack";
import { workoutListStack } from "./stack/workoutListStack";
import {
  WorkoutsParamList,
  WorkoutStackNavProps,
} from "./utils/workoutsParamList";

const Stack = createNativeStackNavigator<WorkoutsParamList>();

export const WorkoutsStack = () => {
  // --- RENDER ---

  return (
    <Stack.Navigator
      initialRouteName="WorkoutList"
      screenOptions={() => ({
        headerStyle: {
          backgroundColor: Colors.BLACK,
        },
        headerTintColor: Colors.WHITE,
      })}
    >
      {workoutListStack({ Stack })}

      {workoutStack({ Stack })}

      <Stack.Screen
        component={WorkoutExercise}
        name="WorkoutExercise"
        options={({
          navigation,
          route,
        }: WorkoutStackNavProps<"WorkoutExercise">) => ({
          headerTitle: route.params.name,
          title: route.params.name,
        })}
      />
    </Stack.Navigator>
  );
};
