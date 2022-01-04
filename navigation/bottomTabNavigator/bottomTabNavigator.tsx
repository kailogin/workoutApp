import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";

import {
  BottomTabParamList,
  RootTabScreenProps,
} from "../utils/navigationTypes";
import { TimerScreen } from "../../screens/timerScreen";
import { SettingsScreen } from "../../screens/settingsScreen/settingsScreen";
import { useAppSelector } from "../../utils/hooks";
import { RootState } from "../../stores/store";
import { ExercisesStack } from "../../screens/exercisesScreen/exercisesStack";
import { WorkoutsStack } from "../../screens/workoutsScreen/workoutsStack";
import { Colors } from "../../utils/colors";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export const BottomTabNavigator = () => {
  const { t } = useTranslation();

  const translate = (key: string) => t(`bottomTabNav.${key}`);

  // --- STATE ---

  // const colorScheme = useColorScheme();

  const isFirstVisit = useAppSelector(({ user }: RootState) => user.firstVisit);
  // console.log(isFirstVisit);
  // https://github.com/expo/examples

  // --- RENDER ---

  // if (isFirstVisit) {
  //   return <HomeScreen />;
  // }

  return (
    <BottomTab.Navigator
      initialRouteName="Workouts"
      screenOptions={{
        headerTintColor: Colors.WHITE,
        headerStyle: {
          backgroundColor: Colors.BLACK,
        },
        tabBarActiveTintColor: Colors.ORANGE,
        tabBarInactiveTintColor: Colors.WHITE,
        tabBarActiveBackgroundColor: Colors.BLACK,
        tabBarInactiveBackgroundColor: Colors.BLACK,
      }}
    >
      <BottomTab.Screen
        name="Workouts"
        component={WorkoutsStack}
        options={({ navigation }: RootTabScreenProps<"Workouts">) => ({
          header: () => null,
          title: translate("workouts"),
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="fitness-center" size={24} color={color} />
          ),
        })}
      />

      <BottomTab.Screen
        name="Exercises"
        component={ExercisesStack}
        options={({ navigation, route }: RootTabScreenProps<"Exercises">) => ({
          header: () => null,
          title: translate("exercises"),
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="list-alt" size={24} color={color} />
          ),
        })}
      />

      <BottomTab.Screen
        name="Timer"
        component={TimerScreen}
        options={{
          header: () => null,
          title: "Timer",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="history" size={24} color={color} />
          ),
        }}
      />

      <BottomTab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerTitle: translate("settings"),
          title: translate("settings"),
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="settings" size={24} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};
