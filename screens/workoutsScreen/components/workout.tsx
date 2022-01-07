import React, { useMemo } from "react";
import {
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Button,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Swipeable } from "react-native-gesture-handler";
import Toast from "react-native-toast-message";

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
import { Categories } from "../../exercisesScreen/utils/exerciseTypes";

interface WorkoutProps extends WorkoutStackNavProps<"Workout"> {}

export const Workout: React.FC<WorkoutProps> = ({
  navigation,
  route,
}: WorkoutStackNavProps<"Workout">) => {
  const dispatch = useAppDispatch();

  // --- STATE ---

  const workouts = useAppSelector(({ workout }) => workout.workouts);

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

        <FlatList
          data={exercises}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => {
            const { exerciseName, id } = item;

            return (
              <View style={{ width: "90%" }} key={Math.random().toString()}>
                <Swipeable
                  renderRightActions={() => {
                    return (
                      <RightSwipe
                        handleClick={() => {
                          dispatch(deleteExerciseInWorkout(item));
                          Toast.show({
                            type: "success",
                            text1: `You deleted the exercise: ${exerciseName}.`,
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

        <Button
          title="ADD WORKOUT EXERCISE"
          onPress={() => {
            dispatch(
              addExerciseInWorkout({
                exerciseName: "CHIHAUAHU",
                id: "!!@#@3423423423423",
                category: Categories.Abs,
              })
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
