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
  description?: string;
  exerciseName: string;
  id: string;
  videoLink?: string;
};
