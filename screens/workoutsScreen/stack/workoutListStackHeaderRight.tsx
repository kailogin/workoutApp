import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Colors } from "../../../utils/colors";

import { WorkoutsParamList } from "../utils/workoutsParamList";

interface WorkoutListStackHeaderRightProps {
  isEditWorkoutsClicked: boolean;
  navigation: NativeStackNavigationProp<WorkoutsParamList, "WorkoutList">;
  setIsEditWorkoutsClicked: (value: React.SetStateAction<boolean>) => void;
  setIsModalVisible: (value: React.SetStateAction<boolean>) => void;
}

export const WorkoutListStackHeaderRight = ({
  isEditWorkoutsClicked,
  navigation,
  setIsEditWorkoutsClicked,
  setIsModalVisible,
}: WorkoutListStackHeaderRightProps) => {
  // --- RENDER ---

  if (!isEditWorkoutsClicked) {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            setIsEditWorkoutsClicked(true);
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
          // TODO: save all changes. Dispatch action to redux store.
          setIsEditWorkoutsClicked(false);
          navigation.navigate("WorkoutList");
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
