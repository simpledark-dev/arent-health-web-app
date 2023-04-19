import { MealType } from "@/api/mockData/mealHistoryData";

export type Meal = {
  id: number;
  time: {
    date: number;
    month: number;
  };
  type: MealType;
  image: any;
};
