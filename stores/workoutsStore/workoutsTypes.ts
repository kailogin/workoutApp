import { ActionType } from "typesafe-actions";
import uuid from "react-native-uuid";

import { Categories } from "../../screens/exercisesScreen/utils/exerciseTypes";
import { Workout } from "../../screens/workoutsScreen/utils/workoutTypes";
import * as actions from "./workoutActions";

export type WorkoutAction = ActionType<typeof actions>;

export type WorkoutState = { workouts: Workout[] };

export const initialWorkoutState: WorkoutState = {
  workouts: [
    {
      muscleGroups: "Chest & Shoulders",
      id: uuid.v4().toString(),
      workoutName: "Push",
      exercises: [
        {
          category: Categories.Chest,
          exerciseName: "Butterfly",
          id: uuid.v4().toString(),
          sets: [
            {
              id: uuid.v4().toString(),
              reps: "12",
              weight: "20kg",
            },
            {
              id: uuid.v4().toString(),
              reps: "12",
              weight: "20kg",
            },
            {
              id: uuid.v4().toString(),
              reps: "12",
              weight: "20kg",
            },
          ],
        },
        {
          category: Categories.Chest,
          exerciseName: "Dumbbell Press",
          id: uuid.v4().toString(),
          sets: [
            {
              id: uuid.v4().toString(),
              reps: "12",
              weight: "20kg",
            },
            {
              id: uuid.v4().toString(),
              reps: "12",
              weight: "20kg",
            },
            {
              id: uuid.v4().toString(),
              reps: "12",
              weight: "20kg",
            },
          ],
        },
        {
          category: Categories.Chest,
          exerciseName: "Flat Bench Press",
          id: uuid.v4().toString(),
          sets: [
            {
              id: uuid.v4().toString(),
              reps: "12",
              weight: "20kg",
            },
            {
              id: uuid.v4().toString(),
              reps: "12",
              weight: "20kg",
            },
            {
              id: uuid.v4().toString(),
              reps: "12",
              weight: "20kg",
            },
          ],
        },
        {
          category: Categories.Shoulders,
          exerciseName: "Arnold Press",
          id: uuid.v4().toString(),
          sets: [
            {
              id: uuid.v4().toString(),
              reps: "12",
              weight: "20kg",
            },
            {
              id: uuid.v4().toString(),
              reps: "12",
              weight: "20kg",
            },
            {
              id: uuid.v4().toString(),
              reps: "12",
              weight: "20kg",
            },
          ],
        },
      ],
    },
    {
      muscleGroups: "Back",
      id: uuid.v4().toString(),
      workoutName: "Back",
      exercises: [
        {
          category: Categories.Back,
          exerciseName: "Deadlifts",
          id: uuid.v4().toString(),
          sets: [
            {
              id: uuid.v4().toString(),
              reps: "12",
              weight: "20kg",
            },
            {
              id: uuid.v4().toString(),
              reps: "12",
              weight: "20kg",
            },
            {
              id: uuid.v4().toString(),
              reps: "12",
              weight: "20kg",
            },
          ],
        },
        {
          category: Categories.Back,
          exerciseName: "Rowing",
          id: uuid.v4().toString(),
          sets: [
            {
              id: uuid.v4().toString(),
              reps: "12",
              weight: "20kg",
            },
            {
              id: uuid.v4().toString(),
              reps: "12",
              weight: "20kg",
            },
            {
              id: uuid.v4().toString(),
              reps: "12",
              weight: "20kg",
            },
          ],
        },
        {
          category: Categories.Back,
          exerciseName: "Hyperextensions",
          id: uuid.v4().toString(),
          sets: [
            {
              id: uuid.v4().toString(),
              reps: "12",
              weight: "20kg",
            },
            {
              id: uuid.v4().toString(),
              reps: "12",
              weight: "20kg",
            },
            {
              id: uuid.v4().toString(),
              reps: "12",
              weight: "20kg",
            },
          ],
        },
        {
          category: Categories.Back,
          exerciseName: "Lat Pulldown",
          id: uuid.v4().toString(),
          sets: [
            {
              id: uuid.v4().toString(),
              reps: "12",
              weight: "20kg",
            },
            {
              id: uuid.v4().toString(),
              reps: "12",
              weight: "20kg",
            },
            {
              id: uuid.v4().toString(),
              reps: "12",
              weight: "20kg",
            },
          ],
        },
        {
          category: Categories.Back,
          exerciseName: "One-arm rowing",
          id: uuid.v4().toString(),
          sets: [
            {
              id: uuid.v4().toString(),
              reps: "12",
              weight: "20kg",
            },
            {
              id: uuid.v4().toString(),
              reps: "12",
              weight: "20kg",
            },
            {
              id: uuid.v4().toString(),
              reps: "12",
              weight: "20kg",
            },
          ],
        },
      ],
    },
    {
      muscleGroups: "Quads & Abs",
      id: uuid.v4().toString(),
      workoutName: "Legs",
      exercises: [
        {
          category: Categories.Legs,
          exerciseName: "Leg Curls",
          id: uuid.v4().toString(),
          sets: [
            {
              id: uuid.v4().toString(),
              reps: "12",
              weight: "20kg",
            },
            {
              id: uuid.v4().toString(),
              reps: "12",
              weight: "20kg",
            },
            {
              id: uuid.v4().toString(),
              reps: "12",
              weight: "20kg",
            },
          ],
        },
        {
          category: Categories.Legs,
          exerciseName: "Farmer's Walks",
          id: uuid.v4().toString(),
          sets: [
            {
              id: uuid.v4().toString(),
              reps: "12",
              weight: "20kg",
            },
            {
              id: uuid.v4().toString(),
              reps: "12",
              weight: "20kg",
            },
            {
              id: uuid.v4().toString(),
              reps: "12",
              weight: "20kg",
            },
          ],
        },
        {
          category: Categories.Legs,
          exerciseName: "Lunges",
          id: uuid.v4().toString(),
          sets: [
            {
              id: uuid.v4().toString(),
              reps: "12",
              weight: "20kg",
            },
            {
              id: uuid.v4().toString(),
              reps: "12",
              weight: "20kg",
            },
            {
              id: uuid.v4().toString(),
              reps: "12",
              weight: "20kg",
            },
          ],
        },
        {
          category: Categories.Abs,
          exerciseName: "Crunches",
          id: uuid.v4().toString(),
          sets: [
            {
              id: uuid.v4().toString(),
              reps: "12",
              weight: "20kg",
            },
            {
              id: uuid.v4().toString(),
              reps: "12",
              weight: "20kg",
            },
            {
              id: uuid.v4().toString(),
              reps: "12",
              weight: "20kg",
            },
          ],
        },
        {
          category: Categories.Abs,
          exerciseName: "Sit-Ups",
          id: uuid.v4().toString(),
          sets: [
            {
              id: uuid.v4().toString(),
              reps: "12",
              weight: "20kg",
            },
            {
              id: uuid.v4().toString(),
              reps: "12",
              weight: "20kg",
            },
            {
              id: uuid.v4().toString(),
              reps: "12",
              weight: "20kg",
            },
          ],
        },
      ],
    },
    {
      muscleGroups: "Chest & Shoulders",
      workoutName: "Push II",
      id: uuid.v4().toString(),
      exercises: [
        {
          category: Categories.Chest,
          exerciseName: "Flat Bench Press",
          id: uuid.v4().toString(),
          sets: [
            {
              id: uuid.v4().toString(),
              reps: "12",
              weight: "20kg",
            },
            {
              id: uuid.v4().toString(),
              reps: "12",
              weight: "20kg",
            },
            {
              id: uuid.v4().toString(),
              reps: "12",
              weight: "20kg",
            },
          ],
        },
        {
          category: Categories.Shoulders,
          exerciseName: "Arnold Press",
          id: "3",
          sets: [
            {
              id: uuid.v4().toString(),
              reps: "12",
              weight: "20kg",
            },
            {
              id: uuid.v4().toString(),
              reps: "12",
              weight: "20kg",
            },
            {
              id: uuid.v4().toString(),
              reps: "12",
              weight: "20kg",
            },
          ],
        },
        {
          category: Categories.Shoulders,
          exerciseName: "Shoulder Press Barbel",
          id: uuid.v4().toString(),
          sets: [
            {
              id: uuid.v4().toString(),
              reps: "12",
              weight: "20kg",
            },
            {
              id: uuid.v4().toString(),
              reps: "12",
              weight: "20kg",
            },
            {
              id: uuid.v4().toString(),
              reps: "12",
              weight: "20kg",
            },
          ],
        },
        {
          category: Categories.Shoulders,
          exerciseName: "Lateral Raises Machine",
          id: uuid.v4().toString(),
          sets: [
            {
              id: uuid.v4().toString(),
              reps: "12",
              weight: "20kg",
            },
            {
              id: uuid.v4().toString(),
              reps: "12",
              weight: "20kg",
            },
            {
              id: uuid.v4().toString(),
              reps: "12",
              weight: "20kg",
            },
          ],
        },
      ],
    },
    {
      muscleGroups: "Biceps & Triceps",
      workoutName: "Arms",
      id: uuid.v4().toString(),
      exercises: [
        {
          category: Categories.Triceps,
          exerciseName: "Close Grip Benchpress",
          id: uuid.v4().toString(),
          sets: [
            {
              id: uuid.v4().toString(),
              reps: "12",
              weight: "20kg",
            },
            {
              id: uuid.v4().toString(),
              reps: "12",
              weight: "20kg",
            },
            {
              id: uuid.v4().toString(),
              reps: "12",
              weight: "20kg",
            },
          ],
        },
        {
          category: Categories.Triceps,
          exerciseName: "One-Arm Triceps Extension",
          id: uuid.v4().toString(),
          sets: [
            {
              id: uuid.v4().toString(),
              reps: "12",
              weight: "20kg",
            },
            {
              id: uuid.v4().toString(),
              reps: "12",
              weight: "20kg",
            },
            {
              id: uuid.v4().toString(),
              reps: "12",
              weight: "20kg",
            },
          ],
        },
        {
          category: Categories.Triceps,
          exerciseName: "Rope Pushdown",
          id: uuid.v4().toString(),
          sets: [
            {
              id: uuid.v4().toString(),
              reps: "12",
              weight: "20kg",
            },
            {
              id: uuid.v4().toString(),
              reps: "12",
              weight: "20kg",
            },
            {
              id: uuid.v4().toString(),
              reps: "12",
              weight: "20kg",
            },
          ],
        },
        {
          category: Categories.Biceps,
          exerciseName: "Biceps Curls",
          id: uuid.v4().toString(),
          sets: [
            {
              id: uuid.v4().toString(),
              reps: "12",
              weight: "20kg",
            },
            {
              id: uuid.v4().toString(),
              reps: "12",
              weight: "20kg",
            },
            {
              id: uuid.v4().toString(),
              reps: "12",
              weight: "20kg",
            },
          ],
        },
        {
          category: Categories.Biceps,
          exerciseName: "Hammer Curls",
          id: uuid.v4().toString(),
          sets: [
            {
              id: uuid.v4().toString(),
              reps: "12",
              weight: "20kg",
            },
            {
              id: uuid.v4().toString(),
              reps: "12",
              weight: "20kg",
            },
            {
              id: uuid.v4().toString(),
              reps: "12",
              weight: "20kg",
            },
          ],
        },
      ],
    },
  ],
};
