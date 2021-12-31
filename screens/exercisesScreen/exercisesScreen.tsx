import React, { useState, useMemo } from "react";
import { StyleSheet } from "react-native";

import { View, Text } from "../../components/Themed";

import { Exercise, Categories } from "./exerciseTypes";
import { SearchBar } from "../../components/searchBar";
import { Colors } from "../../utils/colors";
import { BaseView } from "../../components/baseView";
import { exercises } from "./exercisesConstants";
import { Separator } from "../../components/separator";

export const ExercisesScreen = () => {
  // --- STATE ---

  const [searchPhrase, setSearchPhrase] = useState("");
  const [isSearchBarClicked, setIsSearchBarClicked] = useState(false);

  // --- MEMOIZED DATA ---

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
    [filteredExercises]
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

              <Separator />
            </View>
          );
        }),
    [groupedExercises]
  );

  // --- RENDER ---

  return (
    <BaseView>
      <SearchBar
        searchPhrase={searchPhrase}
        isSearchBarClicked={isSearchBarClicked}
        setSearchPhrase={setSearchPhrase}
        setIsSearchBarClicked={setIsSearchBarClicked}
      />

      {workoutExercisesGroupedList}
    </BaseView>
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
});
