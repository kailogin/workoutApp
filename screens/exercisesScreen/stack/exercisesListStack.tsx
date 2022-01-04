import React, { useMemo, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { ExercisesList } from "../exercisesList";
import {
  ExerciseParamList,
  ExerciseStackNavProps,
} from "../utils/exerciseParamList";
import { Colors } from "../../../utils/colors";
import { StackType } from "../../../navigation/utils/navigationTypes";

interface ExercisesListStackProps {
  Stack: StackType<ExerciseParamList>;
}

export const exercisesListStack = ({ Stack }: ExercisesListStackProps) => {
  const { t } = useTranslation();

  // --- STATE ---

  const [isEditExercisesClicked, setIsEditExercisesClicked] = useState(false);

  // --- HELPERS ---

  const translate = (key: string) => t(`exercises.${key}`);

  // --- MEMOIZED DATA ---

  const headerRight = useMemo(
    () => (
      navigation: NativeStackNavigationProp<ExerciseParamList, "ExercisesList">
    ) => {
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
          <TouchableOpacity onPress={() => navigation.navigate("AddExercise")}>
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
              setIsEditExercisesClicked(false);
              navigation.navigate("ExercisesList");
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
    [isEditExercisesClicked]
  );

  // --- RENDER ---

  return (
    <Stack.Screen
      component={ExercisesList}
      // TODO: Here muss ich den ExercisesList Screen rendern mit den roten Icons -> oder ich kann den state runter passen
      name="ExercisesList"
      options={({
        navigation,
        route,
      }: ExerciseStackNavProps<"ExercisesList">) => ({
        headerTintColor: Colors.WHITE,
        headerTitle: isEditExercisesClicked
          ? translate("headerEditExercisesList")
          : translate("headerExercisesList"),
        headerRight: () => headerRight(navigation),
        title: "Exercises Unclicked",
      })}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomColor: undefined,
    backgroundColor: undefined,
    // alignItems: "center",
    flexDirection: "row",
  },
});
