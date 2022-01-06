import { ActionType } from "typesafe-actions";

import {
  Categories,
  Exercise,
} from "../../screens/exercisesScreen/utils/exerciseTypes";
import * as actions from "./exerciseActions";

export type ExerciseAction = ActionType<typeof actions>;

export type ExerciseState = { exercises: Exercise[] };

export const initialExercisesState: ExerciseState = {
  exercises: [
    {
      category: Categories.Chest,
      exerciseName: "Butterfly",
      id: "0",
    },
    {
      category: Categories.Chest,
      exerciseName: "Dumbbell Press",
      id: "1",
    },
    {
      category: Categories.Chest,
      exerciseName: "Flat Bench Press",
      id: "2",
    },
    {
      category: Categories.Shoulders,
      exerciseName: "Arnold Press",
      id: "3",
    },
    {
      category: Categories.Shoulders,
      exerciseName: "Shoulder Press Barbel",
      id: "4",
    },
    {
      category: Categories.Shoulders,
      exerciseName: "Lateral Raises Machine",
      id: "5",
    },
    {
      category: Categories.Back,
      exerciseName: "Deadlifts",
      id: "6",
    },
    {
      category: Categories.Back,
      exerciseName: "Rowing",
      id: "7",
    },
    {
      category: Categories.Back,
      exerciseName: "Hyperextensions",
      id: "8",
    },
    {
      category: Categories.Back,
      exerciseName: "Lat Pulldown",
      id: "9",
    },
    {
      category: Categories.Back,
      exerciseName: "One-arm rowing",
      id: "10",
    },
    {
      category: Categories.Legs,
      exerciseName: "Squats",
      id: "11",
    },
    {
      category: Categories.Legs,
      exerciseName: "Pistol Squats",
      id: "12",
    },
    {
      category: Categories.Legs,
      exerciseName: "Leg Curls",
      id: "13",
    },
    {
      category: Categories.Legs,
      exerciseName: "Farmer's Walks",
      id: "14",
    },
    {
      category: Categories.Legs,
      exerciseName: "Lunges",
      id: "15",
    },
    {
      category: Categories.Abs,
      exerciseName: "Crunches",
      id: "16",
    },
    {
      category: Categories.Abs,
      exerciseName: "Sit-Ups",
      id: "17",
    },
    {
      category: Categories.Abs,
      exerciseName: "Leg Raises",
      id: "18",
    },
    {
      category: Categories.Abs,
      exerciseName: "Plank",
      id: "19",
    },
    {
      category: Categories.Triceps,
      exerciseName: "Overhead Press",
      id: "20",
    },
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
    {
      category: Categories.Biceps,
      exerciseName: "Barbel Curls",
      id: "26",
    },
  ],
};
