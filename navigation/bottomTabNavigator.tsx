import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Pressable, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import useColorScheme from "../hooks/useColorScheme";
import Colors from "../utils/colors";
import { RootTabParamList } from "./helpers/navigationTypes";
import { WorkoutsScreen, WorkoutsScreenType } from "../screens/workoutsScreen";
import { ExercisesScreen } from "../screens/exercisesScreen";
import { LogsScreen } from "../screens/logsScreen";
import { SettingsScreen } from "../screens/settingsScreen";
import { HomeScreen } from "../screens/homeScreen";
import { useAppSelector } from "../utils/hooks";
import { RootState } from "../stores/store";
import { View } from "../components/Themed";

const BottomTab = createBottomTabNavigator<RootTabParamList>();

export const BottomTabNavigator = () => {
  // --- STATE ---

  const colorScheme = useColorScheme();

  const isFirstVisit = useAppSelector(({ user }: RootState) => user.firstVisit);

  // --- RENDER ---

  if (isFirstVisit) {
    return <HomeScreen />;
  }

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
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
            <View style={bottomTabNavigatorStyles.container}>
              <Pressable
                // @ts-ignore
                onPress={() => navigation.navigate("Modal")}
                style={({ pressed }) => ({
                  opacity: pressed ? 0.5 : 1,
                  marginRight: 16,
                })}
              >
                <MaterialIcons
                  name="add"
                  size={24}
                  color={Colors[colorScheme].text}
                />
              </Pressable>

              <Pressable
                // @ts-ignore
                onPress={() => navigation.navigate("Modal")}
                style={({ pressed }) => ({
                  opacity: pressed ? 0.5 : 1,
                })}
              >
                <MaterialIcons
                  name="edit"
                  size={24}
                  color={Colors[colorScheme].text}
                  style={{ marginRight: 16 }}
                />
              </Pressable>
            </View>
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

const bottomTabNavigatorStyles = StyleSheet.create({
  container: {
    borderBottomColor: undefined,
    backgroundColor: undefined,
    flex: 1,
    flexDirection: "row",
    marginTop: 16,
  },
});
