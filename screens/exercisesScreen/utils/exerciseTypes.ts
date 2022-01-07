export enum Categories {
  Abs = "Abs",
  Back = "Back",
  Biceps = "Biceps",
  Chest = "Chest",
  Legs = "Legs",
  Shoulders = "Shoulders",
  Triceps = "Triceps",
}

export type Exercise = {
  category: Categories;
  description?: string;
  exerciseName: string;
  id: string;
};
