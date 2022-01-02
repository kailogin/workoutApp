export enum Categories {
  ABS = "Abs",
  BACK = "Back",
  Biceps = "Biceps",
  CHEST = "Chest",
  LEGS = "Legs",
  SHOULDERS = "Shoulders",
  Triceps = "Triceps",
}

export type Exercise = {
  category: Categories;
  exerciseName: string;
  // TODO: Add id for filtering and react keys to improve performance
};
