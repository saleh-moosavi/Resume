import Header from "./Header";
import Footer from "./Footer";
import {
  useNavigate,
  useRouteError,
  isRouteErrorResponse,
} from "react-router-dom";

export default function ErrorBoundary() {
  const error = useRouteError();
  const navigate = useNavigate();
  const isResErr = isRouteErrorResponse(error);

  return (
    <>
      <Header />
      <section className="flex flex-col justify-center items-center h-screen gap-5">
        <h1 className="text-3xl font-bold mb-4">
          {isResErr ? "404 - Page Not Found" : "Oops! Something went wrong."}
        </h1>
        <p className="text-md mb-6">
          {isResErr
            ? "You Can Back And Try Another Page"
            : "We're sorry for the inconvenience. Our team has been notified and isworking on a fix"}
        </p>
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-3 bg-gradient-to-br from-my-darkpurple to-my-darkblue text-my-white font-semibold hover:scale-105 rounded-md transition duration-300"
        >
          Back to Previous Page
        </button>
      </section>
      <Footer />
    </>
  );
}
