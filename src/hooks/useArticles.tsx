import { IArticle } from "../dataType";
import { useEffect, useState } from "react";

export default function useArticles() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [articles, setArticles] = useState<IArticle[]>([]);

  useEffect(() => {
    fetchTechNews();
  }, []);

  const fetchTechNews = async () => {
    setError(null);
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://saurav.tech/NewsAPI/top-headlines/category/technology/us.json",
      );

      if (!response.ok) {
        setError("Failed to fetch news");
        setIsLoading(false);
        return;
      }

      const data = await response.json();
      setArticles(data.articles);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error fetching news");
    } finally {
      setIsLoading(false);
    }
  };
  return { articles, isLoading, error };
}
