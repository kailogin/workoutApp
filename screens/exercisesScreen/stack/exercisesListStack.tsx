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
import { useAppDispatch } from "../../../stores/rootStore/rootStore";
import { addNewExercise } from "../../../stores/exercisesStore/exerciseActions";
import { Categories } from "../utils/exerciseTypes";
import { Modal } from "../../../components/modal";

interface ExercisesListStackProps {
  Stack: StackType<ExerciseParamList>;
}

export const exercisesListStack = ({ Stack }: ExercisesListStackProps) => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  // --- STATE ---

  const [isEditExercisesClicked, setIsEditExercisesClicked] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  // --- HELPERS ---

  const translate = (key: string) => t(`exercises.${key}`);

  const handleModalAddExerciseClick = () => {
    dispatch(
      // TODO: This should be form data
      addNewExercise({
        category: Categories.BACK,
        description: "TEST",
        exerciseName: "Pumbe",
        id: Math.random().toString(),
      })
    );
  };

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
    >
      {({ navigation, route }: ExerciseStackNavProps<"ExercisesList">) => (
        <View style={{ flex: 1, backgroundColor: Colors.BLACK }}>
          <ExercisesList navigation={navigation} route={route} />

          <Modal
            buttonText="Add a new exercise"
            handleButtonClick={() => {
              setIsModalVisible(false);
              handleModalAddExerciseClick();
            }}
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
    borderBottomColor: undefined,
    backgroundColor: undefined,
    // alignItems: "center",
    flexDirection: "row",
  },
});
