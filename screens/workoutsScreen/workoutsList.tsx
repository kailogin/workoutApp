import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

import { workouts } from "./workoutsConstants";
import { WorkoutStackNavProps } from "./utils/workoutsParamList";
import { Colors } from "../../utils/colors";

export const WorkoutList = ({
  navigation,
}: WorkoutStackNavProps<"WorkoutList">) => {
  // --- STATE ---

  // --- RENDER ---

  return (
    <View style={styles.view_container}>
      <FlatList
        data={workouts}
        keyExtractor={({ title, subtitle }, index) =>
          title + subtitle + index.toString()
        }
        renderItem={({ item }) => {
          return (
            <View style={styles.renderItem_container}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Workout", {
                    name: item.title,
                  });
                }}
                key={item.title + item.subtitle + Math.random().toString()}
              >
                <Text style={styles.title}>{item.title}</Text>

                <Text style={styles.subtitle}>&#8226; {item.subtitle}</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
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
  title: {
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
