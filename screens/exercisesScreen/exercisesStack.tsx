import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Colors } from "../../utils/theme";
import { Exercise } from "./components/exercise";
import { exercisesListStack } from "./stack/exercisesListStack";
import {
  ExerciseParamList,
  ExerciseStackNavProps,
} from "./utils/exerciseParamList";

interface ExercisesStackProps {}

const Stack = createNativeStackNavigator<ExerciseParamList>();

export const ExercisesStack: React.FC<ExercisesStackProps> = ({}) => {
  // --- RENDER ---

  return (
    <Stack.Navigator
      initialRouteName="ExercisesList"
      screenOptions={() => ({
        headerStyle: {
          backgroundColor: Colors.BLACK,
        },
        headerTintColor: Colors.WHITE,
      })}
    >
      {exercisesListStack({ Stack })}

      <Stack.Screen
        component={Exercise}
        name="Exercise"
        options={({
          navigation,
          route,
        }: ExerciseStackNavProps<"Exercise">) => ({
          headerTitle: route.params?.name,
          title: route.params?.name,
        })}
      />
    </Stack.Navigator>
  );
};
