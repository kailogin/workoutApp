import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import uuid from "react-native-uuid";

import { BaseText } from "../../../components/baseText";
import { RightSwipe } from "../../../components/rightSwipe";
import { deleteSetInExercise } from "../../../stores/exercisesStore/exerciseActions";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../stores/rootStore/rootStore";
import { Colors } from "../../../utils/colors";
import { WorkoutStackNavProps } from "../utils/workoutsParamList";

interface WorkoutProps extends WorkoutStackNavProps<"WorkoutExercise"> {}

export const WorkoutExercise: React.FC<WorkoutProps> = ({
  navigation,
  route,
}: WorkoutStackNavProps<"WorkoutExercise">) => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  // --- STATE ---

  // const [repInputs, setRepInputs] = useState<number[]>([]);
  const exercises = useAppSelector(({ exercise }) => exercise.exercises);

  // --- HELPERS ---

  const selectedExercise = useMemo(
    () => exercises.find((item) => item.exerciseName === route.params.name),
    [exercises, route.params.name]
  );

  // --- RENDER ---

  if (!selectedExercise) {
    return (
      <SafeAreaView style={{ backgroundColor: Colors.BLACK, height: "100%" }}>
        <BaseText style={{ fontSize: 24, marginTop: 40, padding: 40 }}>
          {t("noExerciseFound")}
        </BaseText>
      </SafeAreaView>
    );
  }

  const { exerciseName, sets, id: exerciseId } = selectedExercise;

  return (
    <View style={{ backgroundColor: Colors.BLACK, flex: 1, padding: 40 }}>
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

      <FlatList
        data={sets}
        renderItem={({ item, index }) => (
          <View style={{ width: "90%" }} key={uuid.v4().toString()}>
            <Swipeable
              renderRightActions={() => {
                return (
                  <RightSwipe
                    handleClick={() => {
                      dispatch(
                        deleteSetInExercise({
                          id: item.id,
                          weight: item.weight,
                          reps: item.reps,
                          exerciseId: exerciseId,
                        })
                      );
                    }}
                  />
                );
              }}
              key={uuid.v4().toString()}
            >
              <TouchableOpacity
                key={uuid.v4().toString()}
                style={styles.listElementButton}
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

                  <BaseText style={styles.listElement}>
                    {item.reps} x {item.weight}
                  </BaseText>
                </View>
              </TouchableOpacity>
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
    color: Colors.WHITE,
    fontSize: 14,
    marginLeft: 8,
    padding: 8,
  },
  listGroupContainer: {
    marginBottom: 16,
  },
  listElementView: {
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
});
