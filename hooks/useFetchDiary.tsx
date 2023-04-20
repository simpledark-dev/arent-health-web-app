import { useState, useEffect } from "react";
import { Diary } from "@/types";
import MockAPI from "@/api/MockAPI";

const useFetchDiary = () => {
  const [diaryList, setDiaryList] = useState<Diary[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchDiaryAPI = async () => {
      try {
        const data = await MockAPI.fetchDiary();
        setDiaryList(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchDiaryAPI();
  }, []);

  return { diaryList, loading };
};

export default useFetchDiary;
