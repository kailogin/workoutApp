import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type ExerciseParamList = {
  AddExercise: undefined;
  Exercise: {
    name: string;
  };
  ExercisesList: undefined;
};

export type ExerciseStackNavProps<T extends keyof ExerciseParamList> = {
  navigation: NativeStackNavigationProp<ExerciseParamList, T>;
  route: RouteProp<ExerciseParamList, T>;
};
