// Mock Data
import {
  achievementRate,
  mealList,
  diaryList,
  articleList,
  exerciseList,
  graphData,
} from "./mockData";

import { AchievementRate, Meal, Diary, Article, Exercise } from "@/types";

const FAKE_DELAY_IN_MS = 1000;
const FAKE_NORMAL_DELAY_IN_MS = 2000;
const FAKE_SLOW_DELAY_IN_MS = 3000;

const fetchAchievementRate = (): Promise<AchievementRate | null> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(achievementRate);
    }, FAKE_DELAY_IN_MS);
  });
};

const fetchMealHistory = (): Promise<Meal[] | null> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mealList);
    }, FAKE_NORMAL_DELAY_IN_MS);
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
    }, FAKE_SLOW_DELAY_IN_MS);
  });
};

const fetchArticles = (): Promise<Article[] | null> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(articleList);
    }, FAKE_DELAY_IN_MS);
  });
};

const fetchGraphData = (): Promise<any> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(graphData);
    }, FAKE_DELAY_IN_MS);
  });
};

const MockAPI = {
  fetchAchievementRate,
  fetchMealHistory,
  fetchDiary,
  fetchExercises,
  fetchArticles,
  fetchGraphData,
};

export default MockAPI;
