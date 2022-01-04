import React, { useMemo, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";
import { View, TouchableOpacity, StyleSheet } from "react-native";

import { Colors } from "../../../utils/colors";
import { Workout } from "../components/workout";
import {
  WorkoutsParamList,
  WorkoutStackNavProps,
} from "../utils/workoutsParamList";
import { StackType } from "../../../navigation/utils/navigationTypes";

interface WorkoutStackProps {
  Stack: StackType<WorkoutsParamList>;
}

export const addWorkoutStack = ({ Stack }: WorkoutStackProps) => {
  const { t } = useTranslation();

  // --- STATE ---

  const [isEditWorkoutClicked, setIsEditWorkoutClicked] = useState(false);

  // --- HELPERS ---

  const translate = (key: string) => t(`workouts.${key}`);

  // --- MEMOIZED DATA ---

  const headerRight = useMemo(
    () => ({ navigation, route }: WorkoutStackNavProps<"Workout">) => {
      if (!isEditWorkoutClicked) {
        return (
          <View style={styles.container}>
            <TouchableOpacity
              onPress={() => {
                // TODO: Dispatch an action to save the new workout in redux.
                // dispatch(setSaveNewWorkout)
                setIsEditWorkoutClicked(true);
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
        <TouchableOpacity
          onPress={() => {
            //   if (route.params.submit) {
            //     route.params.submit?.current();
            //   }
            // }
            // dispatch action and save the current changes and state
            setIsEditWorkoutClicked(false);
          }}
          style={{ paddingRight: 8 }}
        >
          <MaterialIcons
            name="save"
            size={24}
            color={Colors.WHITE}
            style={{ marginRight: 16 }}
          />
        </TouchableOpacity>
      );
    },
    [isEditWorkoutClicked]
  );

  // --- RENDER ---

  return (
    <Stack.Screen
      component={Workout}
      name="Workout"
      options={({ navigation, route }) => ({
        headerTitle: isEditWorkoutClicked ? "Edit Workout" : route.params?.name,
        headerRight: () => headerRight(navigation),
        title: route.params?.name,
      })}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomColor: undefined,
    backgroundColor: undefined,
    flexDirection: "row",
  },
});
