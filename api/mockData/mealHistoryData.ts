import mealImg1 from "@/public/images/m01.jpg";
import mealImg2 from "@/public/images/m02.jpg";
import mealImg3 from "@/public/images/m03.jpg";
import mealImg4 from "@/public/images/d01.jpg";
import mealImg5 from "@/public/images/d02.jpg";
import mealImg6 from "@/public/images/l01.jpg";
import mealImg7 from "@/public/images/l02.jpg";
import mealImg8 from "@/public/images/l03.jpg";

export enum MealType {
  MORNING = "Morning",
  LUNCH = "Lunch",
  DINNER = "Dinner",
  SNACK = "Snack",
}

export const mealList = [
  {
    id: 0,
    time: {
      date: 21,
      month: 5,
    },
    type: MealType.MORNING,
    image: mealImg1,
  },
  {
    id: 1,
    time: {
      date: 21,
      month: 5,
    },
    type: MealType.LUNCH,
    image: mealImg2,
  },
  {
    id: 2,
    time: {
      date: 21,
      month: 5,
    },
    type: MealType.MORNING,
    image: mealImg3,
  },
  {
    id: 3,
    time: {
      date: 21,
      month: 5,
    },
    type: MealType.DINNER,
    image: mealImg4,
  },
  {
    id: 4,
    time: {
      date: 21,
      month: 5,
    },
    type: MealType.DINNER,
    image: mealImg5,
  },
  {
    id: 5,
    time: {
      date: 21,
      month: 5,
    },
    type: MealType.LUNCH,
    image: mealImg6,
  },
  {
    id: 6,
    time: {
      date: 21,
      month: 5,
    },
    type: MealType.MORNING,
    image: mealImg7,
  },
  {
    id: 7,
    time: {
      date: 21,
      month: 5,
    },
    type: MealType.MORNING,
    image: mealImg8,
  },
  {
    id: 8,
    time: {
      date: 21,
      month: 5,
    },
    type: MealType.MORNING,
    image: mealImg7,
  },
  {
    id: 9,
    time: {
      date: 21,
      month: 5,
    },
    type: MealType.MORNING,
    image: mealImg4,
  },
  {
    id: 10,
    time: {
      date: 21,
      month: 5,
    },
    type: MealType.MORNING,
    image: mealImg2,
  },
  {
    id: 11,
    time: {
      date: 21,
      month: 5,
    },
    type: MealType.MORNING,
    image: mealImg1,
  },
];
