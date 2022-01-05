import React, { useState, useMemo } from "react";
import {
  TypedNavigator,
  StackNavigationState,
  ParamListBase,
} from "@react-navigation/native";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import {
  NativeStackNavigationEventMap,
  NativeStackNavigationProp,
  NativeStackNavigatorProps,
} from "@react-navigation/native-stack/lib/typescript/src/types";
import { useTranslation } from "react-i18next";
import { MaterialIcons } from "@expo/vector-icons";
import { View, TouchableOpacity, StyleSheet } from "react-native";

import {
  WorkoutsParamList,
  WorkoutStackNavProps,
} from "../utils/workoutsParamList";
import { WorkoutList } from "../workoutsList";
import { Colors } from "../../../utils/colors";

interface WorkoutListStackProps {
  Stack: TypedNavigator<
    WorkoutsParamList,
    StackNavigationState<ParamListBase>,
    NativeStackNavigationOptions,
    NativeStackNavigationEventMap,
    ({
      initialRouteName,
      children,
      screenListeners,
      screenOptions,
      ...rest
    }: NativeStackNavigatorProps) => JSX.Element
  >;
}

export const addWorkoutListStack = ({ Stack }: WorkoutListStackProps) => {
  const { t } = useTranslation();

  // --- STATE ---

  const [isEditWorkoutsClicked, setIsEditWorkoutsClicked] = useState(false);

  // --- HELPERS ---

  const translate = (key: string) => t(`workouts.${key}`);

  // --- MEMOIZED DATA ---

  const headerRight = useMemo(
    () => (
      navigation: NativeStackNavigationProp<WorkoutsParamList, "WorkoutList">
    ) => {
      if (!isEditWorkoutsClicked) {
        return (
          <View style={styles.container}>
            <TouchableOpacity
              onPress={() => {
                // Set state to edit mode so that workouts can be deleted but stay on same side?
                setIsEditWorkoutsClicked(true);
                navigation.navigate("WorkoutList");
              }}
            >
              <MaterialIcons
                name="edit"
                size={24}
                color={Colors.WHITE}
                style={{ marginRight: 16 }}
              />
            </TouchableOpacity>
          </View>
        );
      }

      return (
        <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.navigate("AddWorkout")}>
            <MaterialIcons
              name="add"
              size={24}
              color={Colors.WHITE}
              style={{ marginRight: 16 }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              // TODO: save all changes. Dispatch action to redux store.
              setIsEditWorkoutsClicked(false);
              navigation.navigate("WorkoutList");
            }}
          >
            <MaterialIcons
              name="done"
              size={24}
              color={Colors.WHITE}
              style={{ marginRight: 16 }}
            />
          </TouchableOpacity>
        </View>
      );
    },
    [isEditWorkoutsClicked]
  );

  // --- RENDER ---

  return (
    <Stack.Screen
      component={WorkoutList}
      // TODO: Here muss ich den ExercisesList Screen rendern mit den roten Icons -> oder ich kann den state runter passen
      name="WorkoutList"
      options={({
        navigation,
        route,
      }: WorkoutStackNavProps<"WorkoutList">) => ({
        headerTintColor: Colors.WHITE,
        headerTitle: isEditWorkoutsClicked
          ? translate("headerEditWorkoutsList")
          : translate("headerWorkoutsList"),
        headerRight: () => headerRight(navigation),
        title: "Workouts",
      })}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: undefined,
    borderBottomColor: undefined,
    flexDirection: "row",
  },
});
