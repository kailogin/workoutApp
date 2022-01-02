import React, { useState, useMemo } from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";

import { Exercise, Categories } from "./utils/exerciseTypes";
import { SearchBar } from "../../components/searchBar";
import { BaseView } from "../../components/baseView";
import { exercises } from "./utils/exercisesConstants";
import { ExerciseStackNavProps } from "./utils/exerciseParamList";
import { Colors } from "../../utils/colors";
import { BaseStatusBar } from "../../components/baseStatusBar";

export const ExercisesList = ({
  navigation,
  route,
}: ExerciseStackNavProps<"ExercisesList">) => {
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
        .map((category, index: number) => {
          const exercises = category[1].map(
            (
              exercise: { category: Categories; exerciseName: string },
              index: number
            ) => (
              // TODO: Fix the path here.
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Exercise", {
                    name: exercise.exerciseName,
                  })
                }
                key={
                  exercise.exerciseName +
                  index.toString() +
                  Math.random().toString()
                }
                style={styles.listElementButton}
              >
                <Text style={styles.listElement}>{exercise.exerciseName}</Text>
              </TouchableOpacity>
            )
          );

          return (
            <View
              key={index.toString() + Math.random().toString()}
              style={styles.listGroupContainer}
            >
              <Text style={styles.title}>{category[0]}</Text>

              {exercises}
            </View>
          );
        }),
    [groupedExercises]
  );

  // --- RENDER ---

  return (
    <BaseView>
      <BaseStatusBar />

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
