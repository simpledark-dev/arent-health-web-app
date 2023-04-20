import { MealType } from "@/api/mockData/mealHistoryData";

export interface Meal {
  id: number;
  time: {
    date: number;
    month: number;
  };
  type: MealType;
  image: any;
}

export interface Diary {
  id: number;
  date: string;
  time: string;
  contentIntro: string;
  content: string;
}
