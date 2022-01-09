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
    NotFound: "*",
  },
};

const linking: LinkingOptions<BottomTabParamList> = {
  prefixes: [Linking.makeUrl("/")],
  config: config,
};

export default linking;
