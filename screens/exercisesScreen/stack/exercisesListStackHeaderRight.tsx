import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import { Colors } from "../../../utils/colors";
import { ExerciseParamList } from "../utils/exerciseParamList";

interface ExerciseListStackHeaderRightProps {
  isEditExercisesClicked: boolean;
  navigation: NativeStackNavigationProp<ExerciseParamList, "ExercisesList">;
  setIsEditExercisesClicked: (value: React.SetStateAction<boolean>) => void;
  setIsModalVisible: (value: React.SetStateAction<boolean>) => void;
}

export const ExercisesListStackHeaderRight = ({
  isEditExercisesClicked,
  navigation,
  setIsEditExercisesClicked,
  setIsModalVisible,
}: ExerciseListStackHeaderRightProps) => {
  // --- RENDER ---

  if (!isEditExercisesClicked) {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            setIsEditExercisesClicked(true);
          }}
        >
          <MaterialIcons
            name="edit"
            size={24}
            color={Colors.WHITE}
            style={{ marginRight: 16 }}
          />
        </TouchableOpacity>
      </View>
    );
  }

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

      <TouchableOpacity
        onPress={() => {
          setIsEditExercisesClicked(false);
        }}
      >
        <MaterialIcons
          name="done"
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
