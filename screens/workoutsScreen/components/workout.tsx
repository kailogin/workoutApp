import React, { useCallback, useMemo, useState } from "react";
import {
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Text,
  SafeAreaView,
  View,
} from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { Swipeable } from "react-native-gesture-handler";
import Toast from "react-native-toast-message";
import MultiSelect from "react-native-sectioned-multi-select";

import { BaseText } from "../../../components/baseText";
import { Colors } from "../../../utils/colors";
import { WorkoutStackNavProps } from "../utils/workoutsParamList";
import { Separator } from "../../../components/separator";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../stores/rootStore/rootStore";
import { RightSwipe } from "../../../components/rightSwipe";
import {
  addExerciseInWorkout,
  deleteExerciseInWorkout,
} from "../../../stores/workoutsStore/workoutActions";
import { RootState } from "../../../stores/rootStore/rootTypes";
import {
  multiSelectColorStyles,
  multiSelectIcons,
  multiSelectStyles,
  RenderSelectText,
} from "../../../components/multiSelectHelpers";

interface WorkoutProps extends WorkoutStackNavProps<"Workout"> {}

export const Workout: React.FC<WorkoutProps> = ({
  navigation,
  route,
}: WorkoutStackNavProps<"Workout">) => {
  const dispatch = useAppDispatch();

  // --- STATE ---

  const [selectedExercises, setSelectedExercises] = useState<string[]>([]);

  const workouts = useAppSelector(({ workout }) => workout.workouts);

  const exerciseOptions = useAppSelector(
    ({ exercise }: RootState) => exercise.exercises
  );

  // --- MEMOIZED DATA ---

  const exerciseNamesAndId = useMemo(
    () =>
      exerciseOptions.map((exercise) => ({
        id: exercise.id,
        name: exercise.exerciseName,
      })),
    [exerciseOptions]
  );

  const selectedWorkout = useMemo(
    () => workouts.find((item) => item.workoutName === route.params.name),
    [route.params.name, workouts]
  );

  // --- CALLBACKS ---

  const handleSelectedMultiSelectItemsChange = useCallback((exercises: any) => {
    if (exercises in selectedExercises) {
      return;
    }

    setSelectedExercises([...exercises]);
  }, []);

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

  const dispatchExercises = useCallback(() => {
    const chosenExercises = exerciseOptions.filter((exercise) =>
      selectedExercises.includes(exercise.id)
    );

    return chosenExercises.map((ex) => {
      dispatch(
        addExerciseInWorkout({
          category: ex.category,
          description: ex.description,
          exerciseName: ex.exerciseName,
          id: ex.id,
          workoutId: selectedWorkout.id,
        })
      );
    });
  }, [exerciseOptions, selectedExercises]);

  const {
    exercises,
    id: workoutId,
    muscleGroups,
    workoutName,
  } = selectedWorkout;

  return (
    <SafeAreaView style={styles.safe_area_container}>
      <View style={styles.viewContainer}>
        <BaseText
          style={{
            fontSize: 24,
            marginBottom: 24,
            textDecorationColor: Colors.ORANGE,
            textDecorationLine: "underline",
            textDecorationStyle: "solid",
          }}
        >
          {workoutName}
        </BaseText>

        <BaseText
          style={{
            fontSize: 16,
          }}
        >
          {muscleGroups}
        </BaseText>

        <Separator widthPercentage={60} />

        <View style={{ paddingVertical: 16, width: "90%" }}>
          <MultiSelect
            colors={multiSelectColorStyles}
            styles={multiSelectStyles}
            searchPlaceholderText="Search exercises..."
            renderSelectText={RenderSelectText}
            icons={multiSelectIcons}
            items={exerciseNamesAndId}
            uniqueKey="id"
            onConfirm={() => {
              dispatchExercises();
              setSelectedExercises([]);
            }}
            onSelectedItemsChange={handleSelectedMultiSelectItemsChange}
            IconRenderer={MaterialIcons}
            selectedItems={selectedExercises}
            modalWithTouchable
          />
        </View>

        <FlatList
          data={exercises}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => {
            const { category, exerciseName, id } = item;

            return (
              <View style={{ width: "90%" }} key={Math.random().toString()}>
                <Swipeable
                  renderRightActions={() => {
                    return (
                      <RightSwipe
                        handleClick={() => {
                          dispatch(
                            deleteExerciseInWorkout({
                              category,
                              exerciseName,
                              id,
                              workoutId,
                            })
                          );
                          Toast.show({
                            type: "success",
                            text1: `You deleted the exercise: ${exerciseName} from ${workoutName}.`,
                          });
                        }}
                      />
                    );
                  }}
                  key={id}
                >
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("WorkoutExercise", {
                        name: exerciseName,
                      })
                    }
                    key={id}
                    style={styles.listElementButton}
                  >
                    <View style={styles.listElementView}>
                      <Text
                        style={styles.listElement}
                        onPress={() =>
                          navigation.navigate("WorkoutExercise", {
                            name: exerciseName,
                          })
                        }
                      >
                        {exerciseName}
                      </Text>

                      <AntDesign
                        name="rightcircleo"
                        size={24}
                        color={Colors.WHITE}
                        style={{ padding: 8 }}
                      />
                    </View>
                  </TouchableOpacity>
                </Swipeable>
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe_area_container: {
    flex: 1,
  },
  viewContainer: {
    backgroundColor: Colors.BLACK,
    flex: 1,
    padding: 40,
  },
  listElementButton: {
    backgroundColor: Colors.CARD,
    borderRadius: 8,
    marginBottom: 12,
  },
  listElement: {
    color: Colors.WHITE,
    fontSize: 14,
    marginLeft: 8,
    padding: 8,
  },
  listElementView: {
    alignItems: "baseline",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
  listGroupContainer: {
    marginBottom: 16,
  },
  title: {
    color: Colors.WHITE,
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 32,
  },
});
