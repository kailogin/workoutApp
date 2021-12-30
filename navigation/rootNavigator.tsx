import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ModalScreen } from "../screens/modalScreen";
import { NotFoundScreen } from "../screens/notFoundScreen";

import { BottomTabNavigator } from "./bottomTabNavigator";
import { RootStackParamList } from "./helpers/navigationTypes";
import { HomeScreen } from "../screens/homeScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
export const RootNavigator = () => (
  <Stack.Navigator
    initialRouteName="Root"
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen
      name="Root"
      component={BottomTabNavigator}
      options={{ headerShown: false }}
    />

    {/* <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{ headerShown: false }}
    /> */}

    <Stack.Screen
      name="NotFound"
      component={NotFoundScreen}
      options={{ title: "Oops! This screen does not exist." }}
    />

    <Stack.Group screenOptions={{ presentation: "modal" }}>
      <Stack.Screen name="Modal" component={ModalScreen} />
    </Stack.Group>
  </Stack.Navigator>
);
