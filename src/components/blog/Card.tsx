import LazyImage from "../Image";
import { IArticle } from "../../dataType";
import { FaAngleRight } from "react-icons/fa";

export default function Card({
  article,
  setSelectedArticle,
}: {
  article: IArticle;
  setSelectedArticle: (item: IArticle | null) => void;
}) {
  return (
    <article className="bg-white rounded-xl h-full shadow-md shadow-purple-400 dark:shadow-blue-400 overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
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
      <div className="p-5">
        {/* Source and Date */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-medium text-purple-600 bg-purple-100 px-2 py-1 rounded-md">
            {article.source?.name || "Tech News"}
          </span>
          <span className="text-xs text-gray-500">
            {article.publishedAt.split("T")[0]}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold text-gray-800 mb-3 line-clamp-1 hover:text-purple-600 transition-colors">
          {article.title}
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-1">
          {article.description || article.content || "No description available"}
        </p>

        {/* Author and Read More */}
        <div className="flex items-center justify-between mt-auto">
          <span className="text-xs text-gray-500">
            {article.author ? `By ${article.author}` : "Unknown author"}
          </span>
          <button
            className="text-purple-600 hover:text-purple-700 font-medium text-sm flex items-center gap-1"
            onClick={() => setSelectedArticle(article)}
          >
            Read More
            <FaAngleRight className="size-4" />
          </button>
        </div>
      </div>
    </article>
  );
}
