import { useState } from "react";
import { IArticle } from "../dataType";
import Card from "../components/blog/Card";
import useArticles from "../hooks/useArticles";
import { Loading } from "../components/Loading";
import BlogModal from "../components/blog/BlogModal";

const BlogIndex = () => {
  const { articles, isLoading, error } = useArticles();
  const [selectedArticle, setSelectedArticle] = useState<IArticle | null>(null);

  if (isLoading) return <Loading />;
  if (error) throw new Error(error);

  return (
    <div className="min-h-screen pt-24">
      {/* News Grid */}
      <div className="max-w-7xl mx-auto px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <Card
              article={article}
              key={index}
              setSelectedArticle={setSelectedArticle}
            />
          ))}
          <BlogModal
            selectedArticle={selectedArticle}
            setSelectedArticle={setSelectedArticle}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogIndex;
