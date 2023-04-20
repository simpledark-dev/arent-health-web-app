import { useState, useEffect } from "react";
import { Article } from "@/types";
import MockAPI from "@/api/MockAPI";

const usefetchArticles = () => {
  const [articleList, setArticleList] = useState<Article[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchArticlesAPI = async () => {
      try {
        const data = await MockAPI.fetchArticles();
        setArticleList(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticlesAPI();
  }, []);

  return { articleList, loading };
};

export default usefetchArticles;
