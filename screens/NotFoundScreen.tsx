import { StyleSheet, TouchableOpacity } from "react-native";

import { Text, View } from "../components/Themed";
import { RootStackScreenProps } from "../navigation/helpers/navigationTypes";

export type NotFoundScreenProps = RootStackScreenProps<"NotFound">;

export const NotFoundScreen = ({ navigation }: NotFoundScreenProps) => {
  // --- RENDER ---

  return (
    <View style={notFoundScreenStyles.container}>
      <Text style={notFoundScreenStyles.title}>This screen doesn't exist.</Text>

      <TouchableOpacity
        // @ts-ignore
        onPress={() => navigation.replace("Root")}
        style={notFoundScreenStyles.link}
      >
        <Text style={notFoundScreenStyles.linkText}>Go to home screen!</Text>
      </TouchableOpacity>
    </View>
  );
};

const notFoundScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: "#2e78b7",
  },
});
