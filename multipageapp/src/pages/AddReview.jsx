import React from "react";
import { MainLayout } from "../layouts/MainLayout";
import ReviewForm from "../components/ReviewForm";

export function AddReview() {
  return (
    <div>
      <MainLayout />
      <h1>review it</h1>
      <ReviewForm />
    </div>
  );
}
