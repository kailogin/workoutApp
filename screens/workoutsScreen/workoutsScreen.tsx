import { StyleSheet } from "react-native";

import { View } from "../../components/Themed";
import { RootTabScreenProps } from "../../navigation/helpers/navigationTypes";
import { useMemo } from "react";
import { ListElement } from "../../components/listElement";

export type WorkoutsScreenType = RootTabScreenProps<"Workouts">;

export const WorkoutsScreen = () => {
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
    <>
      {workouts.map((workout, i) => (
        <View key={i} style={workoutsScreenStyles.container}>
          <ListElement title={workout.title} subtitle={workout.subtitle} />

          <View
            style={workoutsScreenStyles.separator}
            lightColor="#000000"
            darkColor="#FFFFFF"
          />
        </View>
      ))}
    </>
  );
};

const workoutsScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    margin: 32,
    marginTop: 56,
  },
  separator: {
    height: 1,
    marginVertical: 30,
    width: "100%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
