import { MaterialIcons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, TouchableOpacity, Pressable, View } from "react-native";

import { Colors } from "../../utils/colors";
import { EditExercise } from "./components/editExercise";
import { Exercise } from "./components/exercise";
import { ExercisesList } from "./exercisesList";
import {
  ExerciseParamList,
  ExerciseStackNavProps,
} from "./utils/exerciseParamList";

interface ExercisesStackProps {}

const Stack = createNativeStackNavigator<ExerciseParamList>();

export const ExercisesStack: React.FC<ExercisesStackProps> = ({}) => {
  // --- RENDER ---

  return (
    <Stack.Navigator
      initialRouteName="ExercisesList"
      screenOptions={() => ({
        headerStyle: {
          backgroundColor: Colors.BLACK,
        },
        headerTintColor: Colors.WHITE,
      })}
    >
      <Stack.Screen
        component={ExercisesList}
        name="ExercisesList"
        options={({
          navigation,
          route,
        }: ExerciseStackNavProps<"ExercisesList">) => ({
          headerRight: () => (
            <View style={styles.container}>
              <Pressable
                onPress={() =>
                  // Set state to edit mode so that exercises can be deleted but stay on same side?
                  navigation.navigate("ExercisesList")
                }
                style={({ pressed }) => ({
                  opacity: pressed ? 0.5 : 1,
                })}
              >
                <MaterialIcons
                  name="edit"
                  size={24}
                  color={Colors.WHITE}
                  style={{ marginRight: 16 }}
                />
              </Pressable>

              <Pressable
                onPress={() =>
                  // TODO: Fix the name of the route and use it correctly
                  navigation.navigate("Exercise", { name: "PIMMEL" })
                }
                style={({ pressed }) => ({
                  opacity: pressed ? 0.5 : 1,
                  marginRight: 16,
                })}
              >
                <MaterialIcons name="add" size={24} color={Colors.WHITE} />
              </Pressable>
            </View>
          ),
        })}
      />

      <Stack.Screen
        component={Exercise}
        name="Exercise"
        options={({
          navigation,
          route,
        }: ExerciseStackNavProps<"Exercise">) => ({
          headerTitle: route.params?.name,
          headerRight: () => (
            <View style={styles.container}>
              <Pressable
                onPress={() =>
                  navigation.navigate("Exercise", { name: route.params?.name })
                }
                style={({ pressed }) => ({
                  opacity: pressed ? 0.5 : 1,
                })}
              >
                <MaterialIcons
                  name="edit"
                  size={24}
                  color={Colors.WHITE}
                  style={{ marginRight: 16 }}
                />
              </Pressable>
            </View>
          ),
        })}
      />

      <Stack.Screen
        component={EditExercise}
        name="Edit"
        options={({ route }) => ({
          headerTitle: route.params?.name,
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                // if (route.params.submit) {
                //   route.params.submit?.current();
                // }
                console.log("Hallo ");
              }}
              style={{ paddingRight: 8 }}
            >
              <MaterialIcons name="save" size={24} color={Colors.WHITE} />
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomColor: undefined,
    backgroundColor: undefined,
    flex: 1,
    flexDirection: "row",
    marginTop: 16,
  },
});
