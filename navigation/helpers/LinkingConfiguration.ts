/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";

import { RootStackParamList } from "./navigationTypes";

const config = {
  screens: {
    Root: {
      screens: {
        Home: "",
        Workouts: {
          path: "/workouts",
          screens: {
            Edit: "/edit",
            Alternatives: "/alternatives",
          },
        },
        Exercises: "/exercises",
        Settings: "/settings",
        Timer: "/timer",
      },
    },
    Modal: "modal",
    NotFound: "*",
  },
};

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl("/")],
  config: config,
};

export default linking;
