import React from "react";
import { StyleSheet } from "react-native";

import { BaseText } from "../../../components/baseText";
import { BaseView } from "../../../components/baseView";
import { ExerciseStackNavProps } from "../utils/exerciseParamList";
import { Colors } from "../../../utils/colors";

interface AddExerciseProps extends ExerciseStackNavProps<"AddExercise"> {}

export const AddExercise: React.FC<AddExerciseProps> = ({
  navigation,
  route,
}: ExerciseStackNavProps<"AddExercise">) => {
  // --- HELPERS ---

  // --- RENDER ---

  return (
    <BaseView>
      <BaseText
        style={{
          fontSize: 40,
          marginBottom: 40,
          textDecorationColor: Colors.ORANGE,
          textDecorationLine: "underline",
          textDecorationStyle: "solid",
        }}
      >
        Add a new exercise
      </BaseText>
    </BaseView>
  );
};

const styles = StyleSheet.create({
  listElementButton: {
    backgroundColor: Colors.CARD,
    borderBottomWidth: 1,
    borderRadius: 8,
    marginBottom: 6,
  },
  listElement: {
    color: Colors.WHITE,
    fontSize: 18,
    marginBottom: 8,
    marginLeft: 8,
    padding: 8,
  },
  listGroupContainer: {
    marginBottom: 16,
  },
  title: {
    color: Colors.WHITE,
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 32,
  },
});
