import { useState, useEffect } from "react";
import { Meal } from "@/types";
import MockAPI from "@/api/MockAPI";

const useFetchMealHistory = () => {
  const [mealList, setMealList] = useState<Meal[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchMealHistoryAPI = async () => {
      try {
        const data = await MockAPI.fetchMealHistory();
        setMealList(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMealHistoryAPI();
  }, []);

  return { mealList, loading };
};

export default useFetchMealHistory;
