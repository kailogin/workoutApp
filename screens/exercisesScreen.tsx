import { StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";

export const ExercisesScreen = () => {
  // --- RENDER ---

  return (
    <View style={exerciseScreenStyles.container}>
      <Text style={exerciseScreenStyles.title}>Exercises</Text>

      <View
        style={exerciseScreenStyles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
    </View>
  );
};

const exerciseScreenStyles = StyleSheet.create({
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
