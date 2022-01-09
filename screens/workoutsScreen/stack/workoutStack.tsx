import React, { useMemo, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";
import { View, TouchableOpacity, StyleSheet } from "react-native";

import { Colors } from "../../../utils/theme";
import { Workout } from "../components/workout";
import {
  WorkoutsParamList,
  WorkoutStackNavProps,
} from "../utils/workoutsParamList";
import { StackType } from "../../../navigation/utils/navigationTypes";

interface WorkoutStackProps {
  Stack: StackType<WorkoutsParamList>;
}

export const workoutStack = ({ Stack }: WorkoutStackProps) => {
  const { t } = useTranslation();

  // --- STATE ---

  const [isStartWorkoutClicked, setIsStartWorkoutClicked] = useState(false);

  // --- HELPERS ---

  const translate = (key: string) => t(`workouts.${key}`);

  // --- MEMOIZED DATA ---

  const headerRight = useMemo(
    () => ({ navigation, route }: WorkoutStackNavProps<"Workout">) => {
      if (!isStartWorkoutClicked) {
        return (
          <View style={styles.container}>
            <TouchableOpacity
              onPress={() => {
                // TODO: Start new workout -> Create instance of workout in redux store
                setIsStartWorkoutClicked(true);
              }}
            >
              <MaterialIcons
                name="not-started"
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
            // TODO: End current workout -> Dispatch all information to redux store
            setIsStartWorkoutClicked(false);
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
    [isStartWorkoutClicked]
  );

  // --- RENDER ---

  return (
    <Stack.Screen
      component={Workout}
      name="Workout"
      options={({ navigation, route }) => ({
        headerTitle: isStartWorkoutClicked
          ? translate("headerEditWorkoutsList")
          : route.params?.name,
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
