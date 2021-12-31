import { Pressable, StyleSheet } from "react-native";

import { Text } from "../components/Themed";
import { WorkoutsScreenType } from "../screens/workoutsScreen/workoutsScreen";

interface ListElementProps {
  subtitle: string;
  title: string;
}

export const ListElement = ({ subtitle, title }: ListElementProps) => {
  // --- STATE ---

  // --- RENDER ---

  return (
    <Pressable>
      <Text style={listElementStyles.title}>{title}</Text>
      <Text style={listElementStyles.subtitle}> &#8226; {subtitle}</Text>
    </Pressable>
  );
};

const listElementStyles = StyleSheet.create({
  title: {
    fontSize: 30,
    marginLeft: 24,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    marginLeft: 24,
  },
});
