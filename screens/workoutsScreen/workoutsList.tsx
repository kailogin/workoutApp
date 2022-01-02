import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

import { Separator } from "../../components/separator";
import { workouts } from "./workoutsConstants";
import { WorkoutStackNavProps } from "./utils/workoutsParamList";
import { Colors } from "../../utils/colors";

export const WorkoutList = ({
  navigation,
}: WorkoutStackNavProps<"WorkoutList">) => {
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
            <>
              {/* TODO: Fix the path here. */}
              <Pressable
                onPress={() => {
                  console.log(item);

                  navigation.navigate("Workout", {
                    name: item.title,
                  });
                }}
                key={item.title + item.subtitle + Math.random().toString()}
              >
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.subtitle}>&#8226; {item.subtitle}</Text>
              </Pressable>
              <Separator />
            </>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
    fontSize: 30,
    marginLeft: 24,
    marginBottom: 8,
  },
  subtitle: {
    color: Colors.WHITE,
    fontSize: 18,
    marginLeft: 24,
  },
});
