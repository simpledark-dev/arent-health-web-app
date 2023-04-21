import { useState, useEffect } from "react";
import MockAPI from "@/api/MockAPI";

const useFetchGraphData = () => {
  const [graphData, setGraphData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchArticlesAPI = async () => {
      try {
        const data = await MockAPI.fetchGraphData();
        setGraphData(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticlesAPI();
  }, []);

  return { graphData, loading };
};

export default useFetchGraphData;
