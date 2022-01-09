import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Colors } from "../../../utils/colors";

import { WorkoutsParamList } from "../utils/workoutsParamList";

interface WorkoutListStackHeaderRightProps {
  navigation: NativeStackNavigationProp<WorkoutsParamList, "WorkoutList">;
  setIsModalVisible: (value: React.SetStateAction<boolean>) => void;
}

export const WorkoutListStackHeaderRight = ({
  navigation,
  setIsModalVisible,
}: WorkoutListStackHeaderRightProps) => {
  // --- RENDER ---

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setIsModalVisible(true)}>
        <MaterialIcons
          name="add"
          size={24}
          color={Colors.WHITE}
          style={{ marginRight: 16 }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: undefined,
    borderBottomColor: undefined,
    flexDirection: "row",
  },
});
