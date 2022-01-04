import React, { useMemo } from "react";
import {
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Text,
  SafeAreaView,
} from "react-native";

import { BaseText } from "../../../components/baseText";
import { BaseView } from "../../../components/baseView";
import { Colors } from "../../../utils/colors";
import { WorkoutStackNavProps } from "../utils/workoutsParamList";
import { workouts } from "../utils/workoutsConstants";

interface WorkoutProps extends WorkoutStackNavProps<"Workout"> {}

export const Workout: React.FC<WorkoutProps> = ({
  navigation,
  route,
}: WorkoutStackNavProps<"Workout">) => {
  // --- MEMOIZED DATA ---

  const selectedWorkout = useMemo(
    () => workouts.find((item) => item.workoutName === route.params.name),
    [route.params.name, workouts]
  );

  // --- RENDER ---

  if (!selectedWorkout) {
    return (
      <SafeAreaView style={{ backgroundColor: Colors.BLACK, height: "100%" }}>
        <BaseText style={{ fontSize: 24, marginTop: 40, padding: 40 }}>
          Oops, please select the workout again.
        </BaseText>
      </SafeAreaView>
    );
  }

  const { workoutName, muscleGroups, exercises } = selectedWorkout;

  return (
    <BaseView>
      <BaseText
        style={{
          fontSize: 40,
          marginBottom: 40,
          textDecorationColor: Colors.ORANGE,
          textDecorationLine: "underline",
          textDecorationStyle: "solid",
        }}
      >
        {workoutName}
      </BaseText>

      <BaseText
        style={{
          fontSize: 24,
          marginBottom: 32,
        }}
      >
        {muscleGroups}
      </BaseText>

      <FlatList
        data={exercises}
        keyExtractor={({ id }) => id}
        renderItem={({ item: { exerciseName, id } }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("WorkoutExercise", {
                  name: exerciseName,
                })
              }
              key={id}
              style={styles.listElementButton}
            >
              <Text style={styles.listElement}>{exerciseName}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </BaseView>
  );
};

const styles = StyleSheet.create({
  listElementButton: {
    backgroundColor: Colors.CARD,
    borderBottomWidth: 1,
    borderRadius: 8,
    marginBottom: 6,
  },
  listElement: {
    color: Colors.WHITE,
    fontSize: 18,
    marginBottom: 8,
    marginLeft: 8,
    padding: 8,
  },
  listGroupContainer: {
    // flex: 1,
    marginBottom: 16,
  },
  title: {
    color: Colors.WHITE,
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 32,
  },
});
