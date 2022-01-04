import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  NavigatorScreenParams,
  CompositeScreenProps,
  ParamListBase,
  StackNavigationState,
  TypedNavigator,
} from "@react-navigation/native";
import {
  NativeStackNavigationOptions,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import {
  NativeStackNavigationEventMap,
  NativeStackNavigatorProps,
} from "@react-navigation/native-stack/lib/typescript/src/types";
import { ExerciseParamList } from "../../screens/exercisesScreen/utils/exerciseParamList";
import { WorkoutsParamList } from "../../screens/workoutsScreen/utils/workoutsParamList";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends BottomTabParamList {}
  }
}

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

export type BottomTabParamList = {
  Exercises: undefined;
  Home: undefined;
  Settings: undefined;
  Timer: undefined;
  Workouts: undefined;
};

export type StackType<
  T extends WorkoutsParamList | ExerciseParamList
> = TypedNavigator<
  T,
  StackNavigationState<ParamListBase>,
  NativeStackNavigationOptions,
  NativeStackNavigationEventMap,
  ({
    initialRouteName,
    children,
    screenListeners,
    screenOptions,
    ...rest
  }: NativeStackNavigatorProps) => JSX.Element
>;
