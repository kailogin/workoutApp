/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";

import { BottomTabParamList } from "./navigationTypes";

const config = {
  screens: {
    Home: "",
    Workouts: "/workouts",
    Exercises: "/exercises",
    Settings: "/settings",
    Timer: "/timer",
    Modal: "modal",
    NotFound: "*",
  },
};

const linking: LinkingOptions<BottomTabParamList> = {
  prefixes: [Linking.makeUrl("/")],
  config: config,
};

export default linking;
