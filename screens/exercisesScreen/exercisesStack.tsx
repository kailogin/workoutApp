import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTranslation } from "react-i18next";
import { TouchableOpacity } from "react-native";

import { Colors } from "../../utils/colors";
import { AddExercise } from "./components/addExercise";
import { Exercise } from "./components/exercise";
import { exercisesListStack } from "./stack/exercisesListStack";
import {
  ExerciseParamList,
  ExerciseStackNavProps,
} from "./utils/exerciseParamList";

interface ExercisesStackProps {}

const Stack = createNativeStackNavigator<ExerciseParamList>();

export const ExercisesStack: React.FC<ExercisesStackProps> = ({}) => {
  const { t } = useTranslation();

  // --- HELPERS ---

  const translate = (key: string) => t(`exercises.${key}`);

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
      {exercisesListStack({ Stack })}

      <Stack.Screen
        component={Exercise}
        name="Exercise"
        options={({
          navigation,
          route,
        }: ExerciseStackNavProps<"Exercise">) => ({
          headerTitle: route.params?.name,
          title: route.params?.name,
        })}
      />

      <Stack.Screen
        component={AddExercise}
        name="AddExercise"
        options={({
          navigation,
          route,
        }: ExerciseStackNavProps<"AddExercise">) => ({
          headerTitle: translate("headerAddExercise"),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                // onPress: dispatch workout information to redux store (save it) and
                //  then return to ExercisesList screen?
                //   if (route.params.submit) {
                //     route.params.submit?.current();
                //   }
                // }
                navigation.navigate("ExercisesList");
              }}
              style={{ paddingRight: 8 }}
            >
              <MaterialIcons name="save" size={24} color={Colors.WHITE} />
            </TouchableOpacity>
          ),
          title: "New exercise",
        })}
      />
    </Stack.Navigator>
  );
};
