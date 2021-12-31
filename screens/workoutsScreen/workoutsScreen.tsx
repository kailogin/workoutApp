import { StyleSheet } from "react-native";
import { useMemo } from "react";

import { View } from "../../components/Themed";
import { RootTabScreenProps } from "../../navigation/helpers/navigationTypes";
import { ListElement } from "../../components/listElement";
import { Separator } from "../../components/separator";
import { BaseView } from "../../components/baseView";

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
    <BaseView>
      {workouts.map((workout, i) => (
        <View key={i} style={styles.list_container}>
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
