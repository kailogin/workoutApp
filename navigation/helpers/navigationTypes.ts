import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

// All prevelant screens
export type RootStackParamList = {
  Home: undefined;
  Modal: undefined;
  NotFound: undefined;
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
};

export type RootStackScreenProps<
  Screen extends keyof RootStackParamList
> = NativeStackScreenProps<RootStackParamList, Screen>;

// Only root screens and shown in bottom navbar
export type RootTabParamList = {
  Exercises: undefined;
  Home: undefined;
  Settings: undefined;
  Timer: undefined;
  Workouts: undefined;
};

export type RootTabScreenProps<
  Screen extends keyof RootTabParamList
> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;
