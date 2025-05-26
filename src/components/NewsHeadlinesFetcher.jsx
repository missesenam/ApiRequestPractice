import axios from "axios";
import React, { useEffect, useState } from "react";
import NewsFilter from "./NewsFilter";
const apiKey = import.meta.env.VITE_API_KEY;

// Goal: Display top news headlines from a news API.
// b78e097f2c1f43c8bf31c006d2965f0e;
// Steps:

// Use the NewsAPI: https://newsapi.org/

// Fetch the top headlines and display the title, description, and link to the full article.

// Add a dropdown to filter news by category (e.g., tech, sports).

// Challenge: Implement pagination to show more articles.

const NewsHeadlinesFetcher = () => {
  const [newsHeadlines, setNewsHeadlines] = useState([]);

  const retrieveHeaders = async () => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=tesla&from=2025-04-22&sortBy=publishedAt&apiKey=${apiKey}`
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    retrieveHeaders();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Top News Headlines
      </h1>
      <NewsFilter />
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {/* News Card 1 */}
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">
            Sample News Title
          </h2>
          <p className="text-gray-700 mb-4">
            This is a short description of the news article. It gives a quick
            summary of the content.
          </p>
          <a
            href="https://example.com/full-article"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Read Full Article →
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsHeadlinesFetcher;
