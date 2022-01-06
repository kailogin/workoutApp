import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTranslation } from "react-i18next";

import { Colors } from "../../utils/colors";
import { Exercise } from "./components/exercise";
import { exercisesListStack } from "./stack/exercisesListStack";
import {
  ExerciseParamList,
  ExerciseStackNavProps,
} from "./utils/exerciseParamList";

interface ExercisesStackProps {}

const Stack = createNativeStackNavigator<ExerciseParamList>();

export const ExercisesStack: React.FC<ExercisesStackProps> = ({}) => {
  const { t } = useTranslation();

  // --- HELPERS ---

  const translate = (key: string) => t(`exercises.${key}`);

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
