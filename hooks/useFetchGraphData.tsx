import { useState, useEffect } from "react";
import MockAPI from "@/api/MockAPI";

const useFetchGraphData = () => {
  const [graphData, setGraphData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchGraphDataAPI = async () => {
      try {
        const data = await MockAPI.fetchGraphData();
        setGraphData(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchGraphDataAPI();
  }, []);

  return { graphData, loading };
};

export default useFetchGraphData;
