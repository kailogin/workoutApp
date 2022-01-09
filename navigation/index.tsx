import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";

import LinkingConfiguration from "./utils/LinkingConfiguration";
import { BottomTabNavigator } from "./bottomTabNavigator/bottomTabNavigator";
import { OnboardingScreen } from "../screens/onboardingScreen/onboardingScreen";
import { useAppDispatch, useAppSelector } from "../stores/rootStore/rootStore";
import { RootState } from "../stores/rootStore/rootTypes";
import { setFirstVisitedStateFalse } from "../stores/userStore/userActions";
import { Colors } from "../utils/theme";

export const Navigation = () => {
  const dispatch = useAppDispatch();

  // --- STATE ---

  const showOnboardingTour = useAppSelector(
    ({ user }: RootState) => user.isFirstVisit
  );

  // --- CALLBACKS ---

  const handleFinishTour = () => {
    dispatch(setFirstVisitedStateFalse(false));
  };

  // --- RENDER ---

  if (showOnboardingTour) {
    return (
      <View style={{ backgroundColor: Colors.ONBOARDING_BG, flex: 1 }}>
        <OnboardingScreen handleFinishTour={handleFinishTour} />
      </View>
    );
  }

  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <BottomTabNavigator />
    </NavigationContainer>
  );
};
