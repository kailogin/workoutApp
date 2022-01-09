import React from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Swipeable } from "react-native-gesture-handler";
import uuid from "react-native-uuid";

import { WorkoutStackNavProps } from "./utils/workoutsParamList";
import { Colors, SIZES } from "../../utils/theme";
import { BaseStatusBar } from "../../components/baseStatusBar";
import {
  useAppDispatch,
  useAppSelector,
} from "../../stores/rootStore/rootStore";
import { RootState } from "../../stores/rootStore/rootTypes";
import Toast from "react-native-toast-message";
import { RightSwipe } from "../../components/rightSwipe";
import { deleteWorkout } from "../../stores/workoutsStore/workoutActions";

export const WorkoutList = ({
  navigation,
}: WorkoutStackNavProps<"WorkoutList">) => {
  const dispatch = useAppDispatch();

  // --- STATE ---

  const workouts = useAppSelector(({ workout }: RootState) => workout.workouts);

  // --- RENDER ---

  return (
    <SafeAreaView style={styles.view_container}>
      <BaseStatusBar />

      <FlatList
        data={workouts}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => {
          const { muscleGroups, workoutName, id } = item;

          return (
            <Swipeable
              renderRightActions={() => {
                return (
                  <RightSwipe
                    handleClick={() => {
                      dispatch(deleteWorkout(item));
                      Toast.show({
                        type: "success",
                        text1: `You deleted the workout: ${workoutName}.`,
                      });
                    }}
                  />
                );
              }}
              key={uuid.v4().toString()}
            >
              <View style={styles.renderItem_container}>
                <TouchableOpacity
                  key={id}
                  onPress={() => {
                    navigation.navigate("Workout", {
                      name: workoutName,
                    });
                  }}
                  style={styles.listElementButton}
                >
                  <View style={styles.container}>
                    <Text style={styles.workoutName}>{workoutName}</Text>

                    <MaterialIcons name="info" size={24} color={Colors.WHITE} />
                  </View>

                  <Text style={styles.subtitle}>&#8226; {muscleGroups}</Text>
                </TouchableOpacity>
              </View>
            </Swipeable>
          );
        }}
        style={{ marginBottom: 32, padding: 40 }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: undefined,
    borderBottomColor: undefined,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  listElementButton: {
    width: "90%",
  },
  renderItem_container: {
    backgroundColor: Colors.CARD,
    borderWidth: 1,
    borderRadius: SIZES.RADIUS_SMALL,
    marginBottom: 4,
    padding: 16,
  },
  view_container: {
    backgroundColor: Colors.BLACK,
    flex: 1,
    padding: 40,
  },
  list_container: {
    alignItems: "flex-start",
    flex: 1,
    justifyContent: "center",
    margin: 32,
    marginTop: 56,
  },
  workoutName: {
    color: Colors.WHITE,
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    marginLeft: 24,
  },
  subtitle: {
    color: Colors.WHITE,
    fontSize: 12,
    marginLeft: 32,
  },
});
