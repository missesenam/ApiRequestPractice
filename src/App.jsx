import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// Importing pages and components
import Home from "./pages/HomePage";
import CountryInformationApp from "./components/CountryInformationApp";
import MovieSearchApp from "./components/MovieSearchApp";
import NewsHeadlinesFetcher from "./components/NewsHeadlinesFetcher";
import RandomUserGenerator from "./components/RandomUserGenerator";
import WeatherChecker from "./components/WeatherChecker";

const App = () => {
  const myRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index element={<Home />} />
        <Route path="/country-info" element={<CountryInformationApp />} />
        <Route path="/movie-search" element={<MovieSearchApp />} />
        <Route path="/news" element={<NewsHeadlinesFetcher />} />
        <Route path="/random-user" element={<RandomUserGenerator />} />
        <Route path="/weather" element={<WeatherChecker />} />
      </Route>
    )
  );

  return <RouterProvider router={myRoute} />;
};

export default App;
