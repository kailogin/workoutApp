/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";

import { RootStackParamList } from "./navigationTypes";

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Root: {
        screens: {
          Workouts: "/workouts",
          // TODO: Add deeper levels of paths for subsequent pages.
          // {
          // screens: {
          //   TabOneScreen: "one",
          // },
          // },
          Exercises: "exercises",

          Logs: "/logs",

          Settings: "/settings",
        },
      },
      Modal: "modal",
      NotFound: "*",
    },
  },
};

export default linking;
