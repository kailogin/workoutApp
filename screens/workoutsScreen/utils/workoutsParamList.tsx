import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type WorkoutsParamList = {
  AddWorkout: undefined;
  Workout: {
    name: string;
  };
  WorkoutExercise: {
    name: string;
  };
  WorkoutList: undefined;
};

export type WorkoutStackNavProps<T extends keyof WorkoutsParamList> = {
  navigation: NativeStackNavigationProp<WorkoutsParamList, T>;
  route: RouteProp<WorkoutsParamList, T>;
};
