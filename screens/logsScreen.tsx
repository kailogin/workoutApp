import { StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";

export const LogsScreen = () => {
  // --- RENDER ---

  return (
    <View style={logsScreenStyles.container}>
      <Text style={logsScreenStyles.title}>Logs</Text>

      <View
        style={logsScreenStyles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
    </View>
  );
};

const logsScreenStyles = StyleSheet.create({
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
