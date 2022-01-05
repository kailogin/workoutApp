import { Colors } from "../../../utils/colors";

type OnboardingSlides = {
  image: any;
  key: string;
  text?: string;
  title: string;
};

export const onboardingSlides: OnboardingSlides[] = [
  {
    image: require("../../../images/hiking.svg"),
    key: "one",
    title: "Welcome to \nKraft",
  },
  {
    image: require("../../../images/workout.svg"),
    key: "two",
    title: "Track your \n workouts",
  },
  {
    image: require("../../../images/run.svg"),
    key: "three",
    title: "Track your runs",
  },
  {
    image: require("../../../images/track.svg"),
    key: "four",
    title: "Export your workouts",
  },
];
