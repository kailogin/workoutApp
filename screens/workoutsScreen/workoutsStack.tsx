import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native";
import { Colors } from "../../utils/colors";
import { AddWorkout } from "./components/addWorkout";
import { useTranslation } from "react-i18next";

import { WorkoutExercise } from "./components/workoutExercise";
import { addWorkoutStack } from "./stack/workoutStack";
import { addWorkoutListStack } from "./stack/workoutListStack";
import {
  WorkoutsParamList,
  WorkoutStackNavProps,
} from "./utils/workoutsParamList";

interface WorkoutsStackProps {}

const Stack = createNativeStackNavigator<WorkoutsParamList>();

export const WorkoutsStack: React.FC<WorkoutsStackProps> = ({}) => {
  const { t } = useTranslation();

  // --- HELPERS ---

  const translate = (key: string) => t(`workouts.${key}`);

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
      {addWorkoutListStack({ Stack })}

      {addWorkoutStack({ Stack })}

      <Stack.Screen
        component={AddWorkout}
        name="AddWorkout"
        options={({
          navigation,
          route,
        }: WorkoutStackNavProps<"AddWorkout">) => ({
          headerTitle: translate("headerAddWorkout"),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("WorkoutList");
              }}
            >
              <MaterialIcons
                name="save"
                size={24}
                color={Colors.WHITE}
                style={{ marginRight: 16 }}
              />
            </TouchableOpacity>
          ),
          title: "New workout",
        })}
      />

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
