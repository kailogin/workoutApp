import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";

import {
  BottomTabParamList,
  RootTabScreenProps,
} from "../utils/navigationTypes";
import { TimerScreen } from "../../screens/timerScreen";
import { SettingsScreen } from "../../screens/settingsScreen/settingsScreen";
import { ExercisesStack } from "../../screens/exercisesScreen/exercisesStack";
import { WorkoutsStack } from "../../screens/workoutsScreen/workoutsStack";
import { Colors } from "../../utils/theme";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export const BottomTabNavigator = () => {
  const { t } = useTranslation();

  // --- HELPERS ---

  const translate = (key: string) => t(`bottomTabNav.${key}`);

  // --- RENDER ---

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
