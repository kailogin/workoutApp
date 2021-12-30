import React, { useState, useMemo } from "react";
import { StyleSheet } from "react-native";

import { View, Text } from "../../components/Themed";

import { Exercise, Categories } from "./exerciseTypes";
import { SearchBar } from "../../components/searchBar";
import { Colors } from "../../utils/colors";

export const ExercisesScreen = () => {
  // --- STATE ---

  const [searchPhrase, setSearchPhrase] = useState("");
  const [isSearchBarClicked, setIsSearchBarClicked] = useState(false);

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

  const filteredExercises = useMemo((): Exercise[] => {
    if (searchPhrase === "") {
      return exercises;
    }

    const newExercises: Exercise[] = exercises.filter(
      (object: Exercise) =>
        object.category
          .toUpperCase()
          .includes(searchPhrase.toUpperCase().trim().replace(/\s/g, "")) ||
        object.exerciseName
          .toUpperCase()
          .includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))
    );

    return newExercises;
  }, [exercises, searchPhrase]);

  const groupedExercises = useMemo(
    () =>
      filteredExercises.reduce((accumulator, exercise) => {
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
          const exercises = category[1].map(
            (exercise1: { category: Categories; exerciseName: string }) => (
              <Text style={styles.listElement}>{exercise1.exerciseName}</Text>
            )
          );

          return (
            <View style={styles.listGroupContainer}>
              <Text style={styles.title}>{category[0]}</Text>

              {exercises}

              <View
                style={styles.separator}
                lightColor={Colors.BLACK}
                darkColor={Colors.WHITE}
              />
            </View>
          );
        }),
    [groupedExercises]
  );

  // --- RENDER ---

  return (
    <View style={styles.container}>
      <SearchBar
        searchPhrase={searchPhrase}
        isSearchBarClicked={isSearchBarClicked}
        setSearchPhrase={setSearchPhrase}
        setIsSearchBarClicked={setIsSearchBarClicked}
      />

      {workoutExercisesGroupedList}
    </View>
  );
};

const styles = StyleSheet.create({
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
    height: 1,
    marginVertical: 16,
    width: "80%",
  },
});
