export enum Categories {
  Abs = "Abs",
  Back = "Back",
  Biceps = "Biceps",
  Chest = "Chest",
  Legs = "Legs",
  Shoulders = "Shoulders",
  Triceps = "Triceps",
}

export type WorkoutSet = {
  id: string;
  reps: number;
  weight: string;
};

export type Exercise = {
  category: Categories;
  description?: string;
  exerciseName: string;
  id: string;
  sets: WorkoutSet[];
};

export type ExercisesCompleteList =
  | "Butterfly"
  | "Dumbbell Press"
  | "Flat Bench Press"
  | "Arnold Press"
  | "Shoulder Press Barbel"
  | "Lateral Raises Machine"
  | "Deadlifts"
  | "Rowing"
  | "Hyperextensions"
  | "Lat Pulldown"
  | "One-arm rowing"
  | "Squats"
  | "Pistol Squats"
  | "Leg Curls"
  | "Farmer's Walks"
  | "Lunges"
  | "Crunches"
  | "Sit-Ups"
  | "Leg Raises"
  | "Plank"
  | "Overhead Press"
  | "Close Grip Benchpress"
  | "One-Arm Triceps Extension"
  | "Rope Pushdown"
  | "Biceps Curls"
  | "Hammer Curls"
  | "Barbel Curls";
