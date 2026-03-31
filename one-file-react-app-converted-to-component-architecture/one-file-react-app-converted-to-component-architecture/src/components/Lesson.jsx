import React from "react";

export default function Lesson({ lesson, advanceLessonStatus, deleteLesson }) {
  return (
    <>
      <div className="lesson-main">
        <div className="lesson-title-row">
          <h3>{lesson.title}</h3>
          <span className={`badge badge-${lesson.status}`}>
            {lesson.status}
          </span>
        </div>

        <p className="lesson-meta">
          {lesson.category} · {lesson.duration} minutes · {lesson.priority}{" "}
          priority
        </p>
      </div>

      <div className="card-actions">
        <button
          className="secondary-button"
          type="button"
          onClick={() => advanceLessonStatus(lesson.id)}
        >
          Advance status
        </button>
        <button
          className="ghost-button"
          type="button"
          onClick={() => deleteLesson(lesson.id)}
        >
          Delete
        </button>
      </div>
    </>
  );
}
