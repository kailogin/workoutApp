import { MaterialIcons } from "@expo/vector-icons";
import React, { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  View,
  TouchableOpacity,
} from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import Toast from "react-native-toast-message";
import uuid from "react-native-uuid";

import { BaseText } from "../../../components/baseText";
import { RightSwipe } from "../../../components/rightSwipe";
import {
  addSetInExercise,
  deleteSetInExercise,
  updateExerciseSet,
} from "../../../stores/exercisesStore/exerciseActions";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../stores/rootStore/rootStore";
import { Colors } from "../../../utils/colors";
import { WorkoutSet } from "../../exercisesScreen/utils/exerciseTypes";
import { WorkoutStackNavProps } from "../utils/workoutsParamList";

interface WorkoutProps extends WorkoutStackNavProps<"WorkoutExercise"> {}

export const WorkoutExercise: React.FC<WorkoutProps> = ({
  navigation,
  route,
}: WorkoutStackNavProps<"WorkoutExercise">) => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  // --- STATE ---

  const [workoutSets, setWorkoutSets] = useState<WorkoutSet[] | []>([]);

  const exercises = useAppSelector(({ exercise }) => exercise.exercises);

  // --- HELPERS ---

  const selectedExercise = useMemo(
    () =>
      exercises.find((item) => item.exerciseName === route.params.name) ||
      exercises[0],
    [exercises, route.params.name]
  );

  const updateRepsState = (text: string, index: number) => {
    const newState = [...workoutSets];
    newState[index].reps = text;
    setWorkoutSets([...newState]);
  };

  const updateWeightsState = (text: string, index: number) => {
    const newState = [...workoutSets];
    newState[index].weight = text;
    setWorkoutSets([...newState]);
  };

  // --- RENDER ---

  if (!selectedExercise) {
    return (
      <SafeAreaView style={{ backgroundColor: Colors.BLACK, height: "100%" }}>
        <BaseText style={{ fontSize: 24, marginTop: 40, padding: 40 }}>
          {t("exercises.noExerciseFound")}
        </BaseText>
      </SafeAreaView>
    );
  }

  const { category, exerciseName, sets, id: exerciseId } = selectedExercise;

  // --- EFFECTS ---

  useEffect(() => {
    if (selectedExercise) {
      setWorkoutSets(selectedExercise.sets);
    }
  }, [selectedExercise]);

  return (
    <View style={{ backgroundColor: Colors.BLACK, flex: 1, padding: 40 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <BaseText
          style={{
            fontSize: 24,
            marginBottom: 40,
            textDecorationColor: Colors.ORANGE,
            textDecorationLine: "underline",
            textDecorationStyle: "solid",
          }}
        >
          {exerciseName}
        </BaseText>
        <MaterialIcons
          name="save"
          size={24}
          color={Colors.WHITE}
          onPress={() => {
            dispatch(updateExerciseSet({ sets: workoutSets, exerciseId }));
            Toast.show({
              type: "success",
              text1: t("exercises.successSave"),
            });
          }}
        />
      </View>

      <TouchableOpacity
        onPress={() =>
          dispatch(
            addSetInExercise({
              id: uuid.v4().toString(),
              weight: "40kg",
              reps: "15",
              exerciseId,
            })
          )
        }
        style={{
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "flex-start",
          marginBottom: 16,
        }}
      >
        <MaterialIcons
          name="add"
          size={24}
          style={{
            backgroundColor: Colors.CARD,
            color: Colors.WHITE,
            marginRight: 16,
            padding: 12,
          }}
          color={Colors.WHITE}
        />

        <BaseText>{t("exercises.addNewSet")}</BaseText>
      </TouchableOpacity>

      <FlatList
        data={sets}
        renderItem={({ item, index }) => (
          <View style={{ width: "90%" }} key={index}>
            <Swipeable
              renderRightActions={() => {
                return (
                  <RightSwipe
                    handleClick={() => {
                      // TODO: Customize this -> how manually add difference reps and weight?

                      dispatch(
                        deleteSetInExercise({
                          id: item.id,
                          weight: item.weight,
                          reps: item.reps,
                          exerciseId,
                        })
                      );
                    }}
                  />
                );
              }}
              // key={uuid.v4().toString()}
            >
              <TouchableWithoutFeedback
                onPress={Keyboard.dismiss}
                accessible={false}
              >
                <View style={styles.listElementView}>
                  <BaseText
                    style={{
                      backgroundColor: Colors.WHITE,
                      color: Colors.BLACK,
                      fontWeight: "900",
                      height: 22,
                      padding: 2,
                      textAlign: "center",
                      width: 22,
                    }}
                  >
                    {index}
                  </BaseText>

                  <TextInput
                    autoCorrect={false}
                    keyboardType="number-pad"
                    style={[
                      styles.listElement,
                      {
                        marginRight: 10,
                        width: "40%",
                      },
                    ]}
                    onChangeText={(text: string) => {
                      updateRepsState(text, index);
                    }}
                    value={item.reps}
                  />

                  <TextInput
                    autoCorrect={false}
                    style={[
                      styles.listElement,
                      {
                        marginRight: 10,
                        width: "40%",
                      },
                    ]}
                    onChangeText={(text: string) =>
                      updateWeightsState(text, index)
                    }
                    value={item.weight}
                  />
                </View>
              </TouchableWithoutFeedback>
            </Swipeable>
          </View>
        )}
        keyExtractor={() => uuid.v4().toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 40,
  },
  listElementButton: {
    backgroundColor: Colors.CARD,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: Colors.WHITE,
    marginBottom: 6,
  },
  listElement: {
    borderColor: Colors.WHITE,
    borderWidth: 1,
    borderRadius: 8,
    color: Colors.WHITE,
    fontSize: 14,
    marginLeft: 8,
    padding: 8,
    width: 50,
    minWidth: 50,
  },
  listGroupContainer: {
    marginBottom: 16,
  },
  listElementView: {
    alignItems: "center",
    backgroundColor: Colors.CARD,
    borderRadius: 8,
    flexDirection: "row",
    marginBottom: 6,
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
});
