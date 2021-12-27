import { StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../navigation/helpers/navigationTypes";

export type WorkoutsScreenType = RootTabScreenProps<"Workouts">;

export const WorkoutsScreen = ({ navigation }: WorkoutsScreenType) => {
  // --- RENDER ---

  return (
    <View style={workoutsScreenStyles.container}>
      <Text style={workoutsScreenStyles.title}>Workouts</Text>

      <View
        style={workoutsScreenStyles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
    </View>
  );
};

const workoutsScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
