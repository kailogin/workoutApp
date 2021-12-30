import { StyleSheet } from "react-native";

import { View } from "../../components/Themed";
import { RootTabScreenProps } from "../../navigation/helpers/navigationTypes";
import { useMemo } from "react";
import { ListElement } from "../../components/listElement";
import { Colors } from "../../utils/colors";

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
    <View style={styles.container}>
      {workouts.map((workout, i) => (
        <View key={i} style={styles.list_container}>
          <ListElement title={workout.title} subtitle={workout.subtitle} />

          <View
            style={styles.separator}
            lightColor={Colors.BLACK}
            darkColor={Colors.WHITE}
          />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 40,
  },
  list_container: {
    alignItems: "flex-start",
    flex: 1,
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
