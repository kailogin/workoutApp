import React, { useState, useMemo } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack/lib/typescript/src/types";
import { useTranslation } from "react-i18next";
import { MaterialIcons } from "@expo/vector-icons";
import { View, TouchableOpacity, StyleSheet } from "react-native";

import {
  WorkoutsParamList,
  WorkoutStackNavProps,
} from "../utils/workoutsParamList";
import { WorkoutList } from "../workoutsList";
import { Colors } from "../../../utils/colors";
import { StackType } from "../../../navigation/utils/navigationTypes";
import { Modal } from "../../../components/modal";

interface WorkoutListStackProps {
  Stack: StackType<WorkoutsParamList>;
}

export const workoutListStack = ({ Stack }: WorkoutListStackProps) => {
  const { t } = useTranslation();

  // --- STATE ---

  const [isEditWorkoutsClicked, setIsEditWorkoutsClicked] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  // --- HELPERS ---

  const translate = (key: string) => t(`workouts.${key}`);

  // --- MEMOIZED DATA ---

  const headerRight = useMemo(
    () => (
      navigation: NativeStackNavigationProp<WorkoutsParamList, "WorkoutList">
    ) => {
      if (!isEditWorkoutsClicked) {
        return (
          <View style={styles.container}>
            <TouchableOpacity
              onPress={() => {
                // Set state to edit mode so that workouts can be deleted but stay on same side?
                setIsEditWorkoutsClicked(true);
                navigation.navigate("WorkoutList");
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
    },
    [isEditWorkoutsClicked]
  );

  // --- RENDER ---

  return (
    <Stack.Screen
      // TODO: Here muss ich den ExercisesList Screen rendern mit den roten Icons -> oder ich kann den state runter passen
      name="WorkoutList"
      options={({
        navigation,
        route,
      }: WorkoutStackNavProps<"WorkoutList">) => ({
        headerTintColor: Colors.WHITE,
        headerTitle: isEditWorkoutsClicked
          ? translate("headerEditWorkoutsList")
          : translate("headerWorkoutsList"),
        headerRight: () => headerRight(navigation),
        title: "Workouts",
      })}
    >
      {({ navigation, route }: WorkoutStackNavProps<"WorkoutList">) => (
        <View style={{ flex: 1, backgroundColor: Colors.BLACK }}>
          <WorkoutList navigation={navigation} route={route} />

          <Modal
            buttonText="Add a new workout"
            handleButtonClick={() =>
              console.log("CIAO HERE MUSS EIN NEUES WORKOUT GEADDET WERDEN")
            }
            isVisible={isModalVisible}
            setIsVisible={setIsModalVisible}
          />
        </View>
      )}
    </Stack.Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: undefined,
    borderBottomColor: undefined,
    flexDirection: "row",
  },
  renderItem_container: {
    backgroundColor: Colors.BLACK,
    flex: 1,
    padding: 40,
  },
});
