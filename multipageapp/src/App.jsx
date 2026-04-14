import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Navigation } from "./components/Navigation";
import { PageNotFound } from "./pages/PageNotFound";
import { Movies } from "./pages/Movies";
import { AddReview } from "./pages/AddReview";
import { MainLayout } from "./layouts/MainLayout";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/add-review" element={<AddReview />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
