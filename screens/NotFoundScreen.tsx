import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { BaseView } from "../components/baseView";

import { RootStackScreenProps } from "../navigation/utils/navigationTypes";
import { Colors } from "../utils/colors";

export type NotFoundScreenProps = RootStackScreenProps<"NotFound">;

export const NotFoundScreen = ({ navigation }: NotFoundScreenProps) => {
  // --- RENDER ---

  return (
    <BaseView>
      <Text style={notFoundScreenStyles.title}>This screen doesn't exist.</Text>

      <TouchableOpacity
        // @ts-ignore
        onPress={() => navigation.replace("Root")}
        style={notFoundScreenStyles.link}
      >
        <Text style={notFoundScreenStyles.linkText}>Go to home screen!</Text>
      </TouchableOpacity>
    </BaseView>
  );
};

const notFoundScreenStyles = StyleSheet.create({
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
    color: Colors.WHITE,
  },
});
