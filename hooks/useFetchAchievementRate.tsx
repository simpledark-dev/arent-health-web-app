import { useState, useEffect } from "react";
import { AchievementRate } from "@/types";
import MockAPI from "@/api/MockAPI";

const useFetchAchievementRate = () => {
  const [achievementRate, setAchievementRate] =
    useState<AchievementRate | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchAchievementRateAPI = async () => {
      try {
        const data = await MockAPI.fetchAchievementRate();
        setAchievementRate(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchAchievementRateAPI();
  }, []);

  return { achievementRate, loading };
};

export default useFetchAchievementRate;
