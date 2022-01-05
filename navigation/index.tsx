/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import LinkingConfiguration from "./utils/LinkingConfiguration";
import { BottomTabNavigator } from "./bottomTabNavigator/bottomTabNavigator";
import { OnboardingScreen } from "../screens/onboardingScreen/onboardingScreen";
import { useAppDispatch, useAppSelector } from "../stores/rootStore/rootStore";
import { RootState } from "../stores/rootStore/rootTypes";
import { setFirstVisitedStateFalse } from "../stores/userStore/userActions";

export const Navigation = () => {
  const dispatch = useAppDispatch();

  // --- STATE ---

  const isFirstVisit = useAppSelector(
    ({ user }: RootState) => user.isFirstVisit
  );

  // --- CALLBACKS ---

  const handleFinishTour = () => {
    dispatch(setFirstVisitedStateFalse(false));
  };

  // --- RENDER ---

  if (isFirstVisit) {
    return <OnboardingScreen handleFinishTour={handleFinishTour} />;
  }

  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <BottomTabNavigator />
    </NavigationContainer>
  );
};
