import React, { useState, useMemo } from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import Toast from "react-native-toast-message";

import { Exercise } from "./utils/exerciseTypes";
import { SearchBar } from "../../components/searchBar";
import { BaseView } from "../../components/baseView";
import { ExerciseStackNavProps } from "./utils/exerciseParamList";
import { Colors } from "../../utils/colors";
import { BaseStatusBar } from "../../components/baseStatusBar";
import {
  useAppDispatch,
  useAppSelector,
} from "../../stores/rootStore/rootStore";
import { RootState } from "../../stores/rootStore/rootTypes";
import { MaterialIcons } from "@expo/vector-icons";
import { RightSwipe } from "../../components/rightSwipe";
import { deleteExercise } from "../../stores/exercisesStore/exerciseActions";
import { BaseText } from "../../components/baseText";
import { AddExerciseForm } from "../../components/addExerciseForm";
import { BaseModal } from "../../components/baseModal";

interface ExercisesListProps {
  isEditExercisesClicked: boolean;
  navProps: ExerciseStackNavProps<"ExercisesList">;
}

export const ExercisesList = ({
  isEditExercisesClicked,
  navProps,
}: ExercisesListProps) => {
  const dispatch = useAppDispatch();

  // --- STATE ---

  const [searchPhrase, setSearchPhrase] = useState("");
  const [isSearchBarClicked, setIsSearchBarClicked] = useState(false);
  const [showAddExerciseModal, setShowAddExerciseModal] = useState(false);

  const exercises = useAppSelector(
    ({ exercise }: RootState) => exercise.exercises
  );

  // --- MEMOIZED DATA ---

  const filteredExercises = useMemo((): Exercise[] => {
    if (searchPhrase === "") {
      return exercises;
    }

    const newExercises: Exercise[] = exercises.filter(
      (exercise: Exercise) =>
        exercise.category
          .toUpperCase()
          .includes(searchPhrase.toUpperCase().trim().replace(/\s/g, "")) ||
        exercise.exerciseName
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

  const { navigation } = navProps;

  const workoutExercisesGroupedList = useMemo(
    () =>
      Object.keys(groupedExercises)
        .map((key) => [key, groupedExercises[key]])
        .map((category, index: number) => {
          const exercises = category[1].map((exercise: Exercise) => (
            <View style={{ width: "90%" }} key={Math.random().toString()}>
              <Swipeable
                renderRightActions={() => {
                  return (
                    <RightSwipe
                      handleClick={() => {
                        dispatch(deleteExercise(exercise));
                        Toast.show({
                          type: "success",
                          text1: `You deleted the exercise: ${exercise.exerciseName}.`,
                        });
                      }}
                    />
                  );
                }}
                key={exercise.id}
              >
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Exercise", {
                      name: exercise.exerciseName,
                    })
                  }
                  key={exercise.id + "TEST"}
                  style={styles.listElementButton}
                >
                  <View style={styles.listElementView}>
                    {isEditExercisesClicked && (
                      <MaterialIcons
                        name="delete"
                        size={24}
                        color={Colors.WHITE}
                        onPress={() => {
                          dispatch(deleteExercise(exercise));
                          Toast.show({
                            type: "success",
                            text1: `You deleted the exercise: ${exercise.exerciseName}.`,
                          });
                        }}
                      />
                    )}

                    <Text style={styles.listElement}>
                      {exercise.exerciseName}
                    </Text>
                  </View>
                </TouchableOpacity>
              </Swipeable>
            </View>
          ));

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
    [groupedExercises, isEditExercisesClicked]
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

      <TouchableOpacity
        onPress={() => setShowAddExerciseModal(true)}
        style={{
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "flex-start",
          marginBottom: 16,
        }}
      >
        <MaterialIcons
          name="add"
          size={24}
          style={{
            backgroundColor: Colors.CARD,
            color: Colors.WHITE,
            marginRight: 16,
            padding: 12,
          }}
          color={Colors.WHITE}
        />

        <BaseText>Add Exercise</BaseText>
      </TouchableOpacity>

      <BaseModal
        handleClose={() => {
          setShowAddExerciseModal(false);
        }}
        isVisible={showAddExerciseModal}
      >
        <AddExerciseForm
          handleAddButtonClick={() => setShowAddExerciseModal(false)}
        />
      </BaseModal>

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
    borderWidth: 1,
    borderRadius: 8,
    borderColor: Colors.WHITE,
    marginBottom: 6,
  },
  listElement: {
    color: Colors.WHITE,
    fontSize: 14,
    marginLeft: 8,
    padding: 8,
  },
  listGroupContainer: {
    marginBottom: 16,
  },
  listElementView: {
    alignItems: "baseline",
    flexDirection: "row",
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
  title: {
    color: Colors.WHITE,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
});
