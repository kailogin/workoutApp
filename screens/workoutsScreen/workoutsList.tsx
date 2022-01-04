import React from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { workouts } from "./utils/workoutsConstants";
import { WorkoutStackNavProps } from "./utils/workoutsParamList";
import { Colors } from "../../utils/colors";
import { BaseStatusBar } from "../../components/baseStatusBar";

export const WorkoutList = ({
  navigation,
}: WorkoutStackNavProps<"WorkoutList">) => {
  // --- STATE ---

  // --- RENDER ---

  return (
    <SafeAreaView style={styles.view_container}>
      <BaseStatusBar />

      <FlatList
        data={workouts}
        keyExtractor={({ id }) => id}
        renderItem={({ item: { muscleGroups, workoutName, id } }) => {
          return (
            <View style={styles.renderItem_container}>
              <TouchableOpacity
                key={id}
                onPress={() => {
                  navigation.navigate("Workout", {
                    name: workoutName,
                  });
                }}
              >
                <Text style={styles.workoutName}>{workoutName}</Text>

                <Text style={styles.subtitle}>&#8226; {muscleGroups}</Text>
              </TouchableOpacity>
            </View>
          );
        }}
        style={{ padding: 40 }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  renderItem_container: {
    backgroundColor: Colors.CARD,
    borderBottomWidth: 1,
    borderRadius: 8,
    marginBottom: 4,
    padding: 8,
  },
  view_container: {
    backgroundColor: Colors.BLACK,
    flex: 1,
    padding: 40,
  },
  list_container: {
    alignItems: "flex-start",
    flex: 1,
    justifyContent: "center",
    margin: 32,
    marginTop: 56,
  },
  workoutName: {
    color: Colors.WHITE,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    marginLeft: 24,
  },
  subtitle: {
    color: Colors.WHITE,
    fontSize: 16,
    marginBottom: 24,
    marginLeft: 32,
  },
});
