import React from "react";
import "./App.css";
import { Greeting } from "./components/Greeting";
import { SimpleReviewForm } from "./components/SimpleReviewForm";

function App() {
  return (
    <div>
      <Greeting />
      <SimpleReviewForm />
    </div>
  );
}

export default App;
