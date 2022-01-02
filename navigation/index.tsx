/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import LinkingConfiguration from "./utils/LinkingConfiguration";
import { BottomTabNavigator } from "./bottomTabNavigator/bottomTabNavigator";

export const Navigation = () => (
  <NavigationContainer linking={LinkingConfiguration}>
    <BottomTabNavigator />
  </NavigationContainer>
);
