import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import useColorScheme from "../hooks/useColorScheme";
import Colors from "../constants/Colors";
import { RootTabParamList } from "./helpers/navigationTypes";
import { WorkoutsScreen, WorkoutsScreenType } from "../screens/workoutsPage";
import { FontAwesome } from "@expo/vector-icons";
import { ExercisesScreen } from "../screens/exercisesScreen";
import { LogsScreen } from "../screens/logsScreen";
import { SettingsScreen } from "../screens/settingsPage";

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

export const BottomTabNavigator = () => {
  const colorScheme = useColorScheme();

  // --- RENDER ---

  return (
    <BottomTab.Navigator
      initialRouteName="Workouts"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}
    >
      <BottomTab.Screen
        name="Workouts"
        component={WorkoutsScreen}
        options={({ navigation }: WorkoutsScreenType) => ({
          title: "Workouts",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="fitness-center" size={24} color={color} />
          ),
          headerRight: () => (
            <Pressable
              // @ts-ignore
              onPress={() => navigation.navigate("Modal")}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />

      <BottomTab.Screen
        name="Exercises"
        component={ExercisesScreen}
        options={{
          title: "Exercises",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="list-alt" size={24} color={color} />
          ),
        }}
      />

      <BottomTab.Screen
        name="Logs"
        component={LogsScreen}
        options={{
          title: "Logs",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="history" size={24} color={color} />
          ),
        }}
      />

      <BottomTab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="settings" size={24} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};
