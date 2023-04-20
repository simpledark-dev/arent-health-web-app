export enum MealType {
  MORNING = "Morning",
  LUNCH = "Lunch",
  DINNER = "Dinner",
  SNACK = "Snack",
}

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

export interface Article {
  id: number;
  date: string;
  time: string;
  image: any;
  title: string;
  hashtags: string[];
}
