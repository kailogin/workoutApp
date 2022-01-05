import React, { useMemo } from "react";
import {
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Text,
  SafeAreaView,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { BaseText } from "../../../components/baseText";
import { Colors } from "../../../utils/colors";
import { WorkoutStackNavProps } from "../utils/workoutsParamList";
import { Separator } from "../../../components/separator";
import { useAppSelector } from "../../../stores/rootStore/rootStore";

interface WorkoutProps extends WorkoutStackNavProps<"Workout"> {}

export const Workout: React.FC<WorkoutProps> = ({
  navigation,
  route,
}: WorkoutStackNavProps<"Workout">) => {
  // --- STATE ---

  const workouts = useAppSelector(({ workout }) => workout);

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
          renderItem={({ item: { exerciseName, id } }) => {
            return (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
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
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => console.log("Show me alternatives")}
                >
                  <AntDesign
                    name="downcircleo"
                    size={24}
                    color={Colors.WHITE}
                    style={{ padding: 8 }}
                  />
                </TouchableOpacity>
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
    // alignItems: "center",
    backgroundColor: Colors.CARD,
    borderBottomWidth: 1,
    borderRadius: 8,
    marginBottom: 6,
    width: "90%",
  },
  listElement: {
    color: Colors.WHITE,
    fontSize: 12,
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
