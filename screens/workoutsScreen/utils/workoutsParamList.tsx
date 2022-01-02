import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type WorkoutsParamList = {
  Edit: {
    name: string;
    // submit?: React.MutableRefObject<() => void>;
  };
  WorkoutList: undefined;
  Workout: {
    name: string;
  };
};

export type WorkoutStackNavProps<T extends keyof WorkoutsParamList> = {
  navigation: NativeStackNavigationProp<WorkoutsParamList, T>;
  route: RouteProp<WorkoutsParamList, T>;
};
