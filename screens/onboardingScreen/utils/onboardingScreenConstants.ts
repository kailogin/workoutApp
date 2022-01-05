type OnboardingSlides = {
  image: any;
  key: string;
  text?: string;
  title: string;
};

export const onboardingSlides: OnboardingSlides[] = [
  {
    image: require("../../../assets/images/hiking.svg"),
    key: "one",
    title: "Welcome to \nKraft",
  },
  {
    image: require("../../../assets/images/workout.svg"),
    key: "two",
    title: "Track your \n workouts",
  },
  {
    image: require("../../../assets/images/run.svg"),
    key: "three",
    title: "Track your runs",
  },
  {
    image: require("../../../assets/images/track.svg"),
    key: "four",
    title: "Export your workouts",
  },
];
