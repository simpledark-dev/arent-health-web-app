// Mock Data
import { mealList, diaryList, articleList, exerciseList } from "./mockData";

import { Meal, Diary, Article, Exercise } from "@/types";

const FAKE_DELAY_IN_MS = 1000;
const FAKE_SLOW_DELAY_IN_MS = 3000;

const fetchMealHistory = (): Promise<Meal[] | null> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mealList);
    }, FAKE_DELAY_IN_MS);
  });
};

const fetchDiary = (): Promise<Diary[] | null> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(diaryList);
    }, FAKE_SLOW_DELAY_IN_MS);
  });
};

const fetchExercises = (): Promise<Exercise[] | null> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(exerciseList);
    }, FAKE_DELAY_IN_MS);
  });
};

const fetchArticles = (): Promise<Article[] | null> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(articleList);
    }, FAKE_DELAY_IN_MS);
  });
};

const MockAPI = {
  fetchMealHistory,
  fetchDiary,
  fetchExercises,
  fetchArticles,
};

export default MockAPI;
