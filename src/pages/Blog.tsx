import LazyImage from "../components/Image";
import { FaAngleRight } from "react-icons/fa";
import useArticles from "../hooks/useArticles";
import { Loading } from "../components/Loading";

const BlogIndex = () => {
  const { articles, isLoading, error } = useArticles();

  if (isLoading) return <Loading />;
  if (error) throw new Error(error);

  return (
    <div className="min-h-screen pt-24">
      {/* News Grid */}
      <div className="max-w-7xl mx-auto px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <article
              key={index}
              className="bg-white rounded-xl shadow-md shadow-purple-400 dark:shadow-blue-400 overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
            >
              {/* Article Image */}
              {article.urlToImage ? (
                <div className="h-48 overflow-hidden object-cover hover:scale-105 transition-transform duration-300">
                  <LazyImage src={article.urlToImage} alt={article.title} />
                </div>
              ) : (
                <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <span className="text-4xl">📰</span>
                </div>
              )}

              {/* Article Content */}
              <div className="p-6">
                {/* Source and Date */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                    {article.source?.name || "Tech News"}
                  </span>
                  <span className="text-xs text-gray-400">
                    {article.publishedAt}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 hover:text-purple-600 transition-colors">
                  {article.title}
                </h2>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {article.description ||
                    article.content ||
                    "No description available"}
                </p>

                {/* Author and Read More */}
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xs text-gray-400">
                    {article.author ? `By ${article.author}` : "Unknown author"}
                  </span>
                  <button
                    className="text-purple-600 hover:text-purple-700 font-medium text-sm flex items-center gap-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(article.url, "_blank");
                    }}
                  >
                    Read More
                    <FaAngleRight className="size-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogIndex;
