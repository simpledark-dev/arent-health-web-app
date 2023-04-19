// Mock Data
import { mealList } from "./mockData";

import { Meal } from "@/types";

const FAKE_DELAY_IN_MS = 1000;

const fetchMealHistory = (): Promise<Meal[] | null> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mealList);
    }, FAKE_DELAY_IN_MS);
  });
};

const MockAPI = {
  fetchMealHistory,
};

export default MockAPI;
