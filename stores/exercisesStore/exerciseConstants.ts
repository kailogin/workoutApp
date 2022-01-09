import uuid from "react-native-uuid";

import {
  Categories,
  Exercise,
} from "../../screens/exercisesScreen/utils/exerciseTypes";

export const ExerciseConstants: Exercise[] = [
  {
    category: Categories.Chest,
    exerciseName: "Butterfly",
    id: "1",
    sets: [
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
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
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
    ],
  },
  {
    category: Categories.Legs,
    exerciseName: "Flat Bench Press",
    id: uuid.v4().toString(),
    sets: [
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
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
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
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
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
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
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
    ],
  },
  {
    category: Categories.Back,
    exerciseName: "Deadlifts",
    id: uuid.v4().toString(),
    sets: [
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
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
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
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
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
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
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
    ],
  },
  {
    category: Categories.Back,
    exerciseName: "One-Arm Rowing",
    id: uuid.v4().toString(),
    sets: [
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
    ],
  },
  {
    category: Categories.Legs,
    exerciseName: "Squats",
    id: uuid.v4().toString(),
    sets: [
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
    ],
  },
  {
    category: Categories.Legs,
    exerciseName: "Pistol Squats",
    id: uuid.v4().toString(),
    sets: [
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
    ],
  },
  {
    category: Categories.Legs,
    exerciseName: "Leg Curls",
    id: uuid.v4().toString(),
    sets: [
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
    ],
  },
  {
    category: Categories.Legs,
    exerciseName: "Farmers",
    id: uuid.v4().toString(),
    sets: [
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
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
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
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
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
    ],
  },
  {
    category: Categories.Abs,
    exerciseName: "SitUps",
    id: uuid.v4().toString(),
    sets: [
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
    ],
  },
  {
    category: Categories.Abs,
    exerciseName: "LegRaises",
    id: uuid.v4().toString(),
    sets: [
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
    ],
  },
  {
    category: Categories.Abs,
    exerciseName: "Plank",
    id: uuid.v4().toString(),
    sets: [
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
    ],
  },
  {
    category: Categories.Triceps,
    exerciseName: "Overhead Press",
    id: uuid.v4().toString(),
    sets: [
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
    ],
  },
  {
    category: Categories.Triceps,
    exerciseName: "Close-Grip Benchpress",
    id: uuid.v4().toString(),
    sets: [
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
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
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
    ],
  },
  {
    category: Categories.Triceps,
    exerciseName: "Rope Pushdown ",
    id: uuid.v4().toString(),
    sets: [
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
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
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
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
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
    ],
  },
  {
    category: Categories.Biceps,
    exerciseName: "Barbel Curls",
    id: uuid.v4().toString(),
    sets: [
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
      {
        id: uuid.v4().toString(),
        reps: "10",
        weight: "20kg",
      },
    ],
  },
];
