import { StyleSheet, SectionList } from "react-native";
const lodash = require("lodash");

import { Text, View } from "../../components/Themed";
import { useMemo } from "react";
import { ListElement } from "../../components/listElement";
import React from "react";

export enum Categories {
  ABS = "Abs",
  BACK = "Back",
  Biceps = "Biceps",
  CHEST = "Chest",
  LEGS = "Legs",
  SHOULDERS = "Shoulders",
  Triceps = "Triceps",
}

type Exercise = { category: Categories; exerciseName: string };

export const ExercisesScreen = () => {
  // --- DATA ---

  // TODO: Should this be placed in redux store?
  const exercises: Exercise[] = [
    {
      category: Categories.CHEST,
      exerciseName: "Butterfly",
    },
    {
      category: Categories.CHEST,
      exerciseName: "Dumbbell Press",
    },
    {
      category: Categories.CHEST,
      exerciseName: "Flat Bench Press",
    },
    {
      category: Categories.SHOULDERS,
      exerciseName: "Arnold Press",
    },
    {
      category: Categories.BACK,
      exerciseName: "Deadlifts",
    },
    {
      category: Categories.BACK,
      exerciseName: "Rows",
    },
  ];

  // --- MEMOIZED DATA ---
  const groupedExercises = useMemo(
    () =>
      exercises.reduce((accumulator, exercise) => {
        accumulator[exercise.category] = accumulator[exercise.category] || [];
        accumulator[exercise.category].push(exercise);

        return accumulator;
      }, Object.create(null)),
    [exercises]
  );

  const workoutExercisesGroupedList = useMemo(
    () =>
      Object.keys(groupedExercises)
        .map((key) => [key, groupedExercises[key]])
        .map((category) => {
          const exerciseListPerCategory = category[1].map(
            (exercise: Exercise, i: number) => (
              <React.Fragment key={`${exercise.exerciseName}+${i}`}>
                <Text style={exerciseScreenStyles.listElement}>
                  {exercise.exerciseName}
                </Text>

                <View
                  style={exerciseScreenStyles.separator}
                  darkColor="#ffffff"
                  lightColor="#000000"
                />
              </React.Fragment>
            )
          );

          return (
            <View style={exerciseScreenStyles.listGroupContainer}>
              <Text style={exerciseScreenStyles.title}>{category[0]}</Text>
              {exerciseListPerCategory}
            </View>
          );
        }),
    [groupedExercises]
  );

  // --- RENDER ---

  return (
    <View style={exerciseScreenStyles.container}>
      {workoutExercisesGroupedList}
    </View>
  );
};

const exerciseScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 40,
  },
  listElement: {
    fontSize: 18,
    marginBottom: 8,
    marginLeft: 16,
  },
  listGroupContainer: {
    // flex: 1,
    marginBottom: 16,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 32,
  },
  separator: {
    marginVertical: 16,
    height: 1,
    width: "80%",
  },
});
