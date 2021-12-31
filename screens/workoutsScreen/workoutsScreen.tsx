import { Button, StyleSheet } from "react-native";
import React, { useMemo } from "react";

import { View } from "../../components/Themed";
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../../navigation/helpers/navigationTypes";
import { ListElement } from "../../components/listElement";
import { Separator } from "../../components/separator";
import { BaseView } from "../../components/baseView";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { CompositeNavigationProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

interface WorkoutsScreenProps {
  navigation: CompositeNavigationProp<
    BottomTabNavigationProp<RootTabParamList, "Workouts">,
    NativeStackNavigationProp<RootStackParamList, "Root">
  >;
}

export type WorkoutsScreenType = RootTabScreenProps<"Workouts">;

export const WorkoutsScreen = ({ navigation }: WorkoutsScreenProps) => {
  // --- MEMOIZED DATA ---

  const workouts = useMemo(
    () => [
      {
        title: "Push",
        subtitle: "Chest & Shoulders",
      },
      {
        title: "Pull",
        subtitle: "Back & Biceps",
      },
      {
        title: "Legs",
        subtitle: "Quads & Abs",
      },
      {
        title: "Push II",
        subtitle: "Chest & Shoulders",
      },
      {
        title: "Pull II",
        subtitle: "Back & Biceps",
      },
    ],
    []
  );

  // --- RENDER ---

  return (
    <BaseView>
      {workouts.map((workout, i) => (
        <View key={i} style={styles.list_container}>
          {/* TODO: Replace this with the proper page. */}
          <Button
            onPress={() => navigation.navigate("Settings")}
            title="Navigate"
          />
          <ListElement title={workout.title} subtitle={workout.subtitle} />

          <Separator />
        </View>
      ))}
    </BaseView>
  );
};

const styles = StyleSheet.create({
  list_container: {
    alignItems: "flex-start",
    flex: 1,
    justifyContent: "center",
    margin: 32,
    marginTop: 56,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
