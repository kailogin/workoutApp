declare global {
  namespace ReactNavigation {
    interface RootParamList extends BottomTabParamList {}
  }
}

export type BottomTabParamList = {
  Exercises: undefined;
  Home: undefined;
  Settings: undefined;
  Timer: undefined;
  Workouts: undefined;
};
