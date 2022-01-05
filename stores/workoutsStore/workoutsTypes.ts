import { ActionType } from "typesafe-actions";

import { Categories } from "../../screens/exercisesScreen/utils/exerciseTypes";
import { Workout } from "../../screens/workoutsScreen/utils/workoutTypes";
import * as actions from "./workoutActions";

export type WorkoutAction = ActionType<typeof actions>;

export type WorkoutState = Workout[];

export const initialWorkoutState: Workout[] = [
  {
    muscleGroups: "Chest & Shoulders",
    id: "TEST",
    workoutName: "Push",
    exercises: [
      {
        category: Categories.CHEST,
        exerciseName: "Butterfly",
        id: "0",
      },
      {
        category: Categories.CHEST,
        exerciseName: "Dumbbell Press",
        id: "1",
      },
      {
        category: Categories.CHEST,
        exerciseName: "Flat Bench Press",
        id: "2",
      },
      {
        category: Categories.SHOULDERS,
        exerciseName: "Arnold Press",
        id: "3",
      },
      {
        category: Categories.SHOULDERS,
        exerciseName: "Shoulder Press Barbel",
        id: "4",
      },
    ],
  },
  {
    muscleGroups: "Back",
    id: "TEST2",
    workoutName: "Back",
    exercises: [
      {
        category: Categories.BACK,
        exerciseName: "Deadlifts",
        id: "6",
      },
      {
        category: Categories.BACK,
        exerciseName: "Rowing",
        id: "7",
      },
      {
        category: Categories.BACK,
        exerciseName: "Hyperextensions",
        id: "8",
      },
      {
        category: Categories.BACK,
        exerciseName: "Lat Pulldown",
        id: "9",
      },
      {
        category: Categories.BACK,
        exerciseName: "One-arm rowing",
        id: "10",
      },
    ],
  },
  {
    muscleGroups: "Quads & Abs",
    id: "TEST3",
    workoutName: "Legs",
    exercises: [
      {
        category: Categories.LEGS,
        exerciseName: "Leg Curls",
        id: "13",
      },
      {
        category: Categories.LEGS,
        exerciseName: "Farmer's Walks",
        id: "14",
      },
      {
        category: Categories.LEGS,
        exerciseName: "Lunges",
        id: "15",
      },
      {
        category: Categories.ABS,
        exerciseName: "Crunches",
        id: "16",
      },
      {
        category: Categories.ABS,
        exerciseName: "Sit-Ups",
        id: "17",
      },
    ],
  },
  {
    muscleGroups: "Chest & Shoulders",
    workoutName: "Push II",
    id: "TEST4",
    exercises: [
      {
        category: Categories.CHEST,
        exerciseName: "Flat Bench Press",
        id: "2",
      },
      {
        category: Categories.SHOULDERS,
        exerciseName: "Arnold Press",
        id: "3",
      },
      {
        category: Categories.SHOULDERS,
        exerciseName: "Shoulder Press Barbel",
        id: "4",
      },
      {
        category: Categories.SHOULDERS,
        exerciseName: "Lateral Raises Machine",
        id: "5",
      },
    ],
  },
  {
    muscleGroups: "Biceps & Triceps",
    workoutName: "Arms",
    id: "TEST5",
    exercises: [
      {
        category: Categories.Triceps,
        exerciseName: "Close Grip Benchpress",
        id: "21",
      },
      {
        category: Categories.Triceps,
        exerciseName: "One-Arm Triceps Extension",
        id: "22",
      },
      {
        category: Categories.Triceps,
        exerciseName: "Rope Pushdown",
        id: "23",
      },
      {
        category: Categories.Biceps,
        exerciseName: "Biceps Curls",
        id: "24",
      },
      {
        category: Categories.Biceps,
        exerciseName: "Hammer Curls",
        id: "25",
      },
    ],
  },
  {
    muscleGroups: "Back & Legs",
    workoutName: "Leg Day",
    id: "TEST6",
    exercises: [
      {
        category: Categories.BACK,
        exerciseName: "Hyperextensions",
        id: "8",
      },
      {
        category: Categories.BACK,
        exerciseName: "Lat Pulldown",
        id: "9",
      },
      {
        category: Categories.BACK,
        exerciseName: "One-arm rowing",
        id: "10",
      },
      {
        category: Categories.LEGS,
        exerciseName: "Squats",
        id: "11",
      },
      {
        category: Categories.LEGS,
        exerciseName: "Pistol Squats",
        id: "12",
      },
    ],
  },
  {
    muscleGroups: "Quads & Abs",
    workoutName: "Legs II",
    id: "TEST7",
    exercises: [
      {
        category: Categories.LEGS,
        exerciseName: "Leg Curls",
        id: "13",
      },
      {
        category: Categories.LEGS,
        exerciseName: "Farmer's Walks",
        id: "14",
      },
      {
        category: Categories.LEGS,
        exerciseName: "Lunges",
        id: "15",
      },
      {
        category: Categories.ABS,
        exerciseName: "Crunches",
        id: "16",
      },
      {
        category: Categories.ABS,
        exerciseName: "Sit-Ups",
        id: "17",
      },
    ],
  },
];
