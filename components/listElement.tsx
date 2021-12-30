import { StyleSheet } from "react-native";

import { Text } from "../components/Themed";

interface ListElementProps {
  subtitle: string;
  title: string;
}

export const ListElement = ({ subtitle, title }: ListElementProps) => {
  // --- STATE ---

  // --- RENDER ---

  return (
    <>
      <Text style={listElementStyles.title}>{title}</Text>
      <Text style={listElementStyles.subtitle}> &#8226; {subtitle}</Text>
    </>
  );
};

const listElementStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 8,
  },
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
