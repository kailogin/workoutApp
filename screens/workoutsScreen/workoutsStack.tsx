import { MaterialIcons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Colors } from "../../utils/colors";

import { EditWorkout } from "./components/editWorkout";
import { Workout } from "./components/workout";
import {
  WorkoutsParamList,
  WorkoutStackNavProps,
} from "./utils/workoutsParamList";
import { WorkoutList } from "./workoutsList";

interface WorkoutsStackProps {}

const Stack = createNativeStackNavigator<WorkoutsParamList>();

export const WorkoutsStack: React.FC<WorkoutsStackProps> = ({}) => {
  // --- RENDER ---

  return (
    <Stack.Navigator
      initialRouteName="WorkoutList"
      screenOptions={() => ({
        headerStyle: {
          backgroundColor: Colors.BLACK,
        },
        headerTintColor: Colors.WHITE,
      })}
    >
      <Stack.Screen
        component={WorkoutList}
        name="WorkoutList"
        options={({ navigation }: WorkoutStackNavProps<"WorkoutList">) => ({
          headerTitle: "Workouts",
          headerRight: () => (
            <View style={styles.container}>
              <TouchableOpacity
                onPress={() =>
                  // Set state to edit mode so that workouts can be deleted but stay on same side?
                  navigation.navigate("WorkoutList")
                }
              >
                <MaterialIcons
                  name="edit"
                  size={24}
                  color={Colors.WHITE}
                  style={{ marginRight: 16 }}
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() =>
                  // TODO: fix the name prop
                  navigation.navigate("Workout", { name: "New Workout" })
                }
              >
                <MaterialIcons name="add" size={24} color={Colors.WHITE} />
              </TouchableOpacity>
            </View>
          ),
          title: "Workouts",
        })}
      />

      <Stack.Screen
        component={Workout}
        name="Workout"
        options={({ navigation, route }: WorkoutStackNavProps<"Workout">) => ({
          headerTitle: route.params?.name,
          headerRight: () => (
            <View style={styles.container}>
              <TouchableOpacity
                onPress={() =>
                  // TODO: Dispatch an action to save the new workout in redux.
                  // dispatch(setSaveNewWorkout)
                  navigation.navigate("WorkoutList")
                }
              >
                <MaterialIcons name="save" size={24} color={Colors.WHITE} />
              </TouchableOpacity>
            </View>
          ),
          title: route.params?.name,
        })}
      />

      <Stack.Screen
        component={EditWorkout}
        name="Edit"
        options={({ route }) => ({
          headerTitle: route.params?.name,
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                //   if (route.params.submit) {
                //     route.params.submit?.current();
                //   }
                // }
                console.log("On Press workout");
              }}
              style={{ paddingRight: 8 }}
            >
              <MaterialIcons name="save" size={24} color={Colors.WHITE} />
            </TouchableOpacity>
          ),
          title: route.params?.name,
        })}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomColor: undefined,
    backgroundColor: undefined,
    flexDirection: "row",
  },
});
