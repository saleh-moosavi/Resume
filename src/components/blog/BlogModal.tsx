import { IArticle } from "../../dataType";

export default function BlogModal({
  selectedArticle,
  setSelectedArticle,
}: {
  selectedArticle: IArticle | null;
  setSelectedArticle: (item: IArticle | null) => void;
}) {
  if (selectedArticle == null) return;
  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
      onClick={() => setSelectedArticle(null)}
    >
      <div
        className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header with Image */}
        {selectedArticle.urlToImage && (
          <div className="overflow-hidden">
            <img
              src={selectedArticle.urlToImage}
              alt={selectedArticle.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div className="p-8">
          {/* Source and Date */}
          <div className="flex items-center justify-between gap-4 mb-4">
            <span className="text-sm font-medium text-purple-600 bg-purple-100 px-2 py-1 rounded-lg">
              {selectedArticle.source?.name}
            </span>
            <span className="text-sm text-gray-500">
              {selectedArticle.publishedAt.split("T")[0]}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-justify">
            {selectedArticle.title}
          </h2>

          {/* Author */}
          {selectedArticle.author && (
            <p className="text-gray-500 mb-6">By {selectedArticle.author}</p>
          )}

          {/* Description */}
          {selectedArticle.description && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Summary
              </h3>
              <p className="text-gray-600 leading-relaxed text-justify">
                {selectedArticle.description}
              </p>
            </div>
          )}

          {/* Content */}
          {selectedArticle.content && (
            <div className="mb-6 text-justify">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Full Story
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {selectedArticle.content}
              </p>
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-4 mt-8">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={selectedArticle.url}
              className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:opacity-90 transition-opacity text-center font-medium"
            >
              Read Full Article on {selectedArticle.source?.name}
            </a>
            <button
              onClick={() => setSelectedArticle(null)}
              className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
