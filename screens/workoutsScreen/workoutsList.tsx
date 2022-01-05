import React, { useState, useEffect } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { WorkoutStackNavProps } from "./utils/workoutsParamList";
import { Colors } from "../../utils/colors";
import { BaseStatusBar } from "../../components/baseStatusBar";
import { useAppSelector } from "../../stores/rootStore/rootStore";
import { RootState } from "../../stores/rootStore/rootTypes";

export const WorkoutList = ({
  navigation,
}: WorkoutStackNavProps<"WorkoutList">) => {
  // --- STATE ---

  const workouts = useAppSelector(({ workout }: RootState) => workout);

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
                <View style={styles.container}>
                  <Text style={styles.workoutName}>{workoutName}</Text>

                  <MaterialIcons name="info" size={24} color={Colors.WHITE} />
                </View>

                <Text style={styles.subtitle}>&#8226; {muscleGroups}</Text>
              </TouchableOpacity>
            </View>
          );
        }}
        style={{ marginBottom: 32, padding: 40 }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: undefined,
    borderBottomColor: undefined,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  renderItem_container: {
    backgroundColor: Colors.CARD,
    borderBottomWidth: 1,
    borderRadius: 8,
    marginBottom: 4,
    padding: 16,
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
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    marginLeft: 24,
  },
  subtitle: {
    color: Colors.WHITE,
    fontSize: 12,
    marginLeft: 32,
  },
});
