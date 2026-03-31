import React from "react";
import Lesson from "./Lesson";

export default function LessonList({
  lessons,
  doneCount,
  advanceLessonStatus,
  deleteLesson,
}) {
  return (
    <section className="panel">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Results</p>
          <h2>Lesson list</h2>
        </div>
        <p className="helper-text">
          {lessons.length} visible, {doneCount} complete
        </p>
      </div>

      <div className="lesson-list">
        {lessons.length === 0 ? (
          <div className="empty-state">
            No lessons match the current filters.
          </div>
        ) : (
          lessons.map((lesson) => (
            <article className="lesson-card" key={lesson.id}>
              <Lesson
                lesson={lesson}
                advanceLessonStatus={advanceLessonStatus}
                deleteLesson={deleteLesson}
              />
            </article>
          ))
        )}
      </div>
    </section>
  );
}
