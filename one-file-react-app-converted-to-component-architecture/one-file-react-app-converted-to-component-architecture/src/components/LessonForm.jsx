import React, { useState } from "react";

const emptyForm = {
  title: "",
  category: "Foundations",
  duration: 30,
  priority: "medium",
};

export default function LessonForm({addLesson}) {
    const [form, setForm] = useState({...emptyForm})

    function handleFormChange(event) {
        const { name, value } = event.target;

        setForm((currentForm) => ({
        ...currentForm,
        [name]: name === "duration" ? Number(value) : value,
        }));
    }

    return (
        <article className="panel">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Form</p>
                <h2>Add a lesson</h2>
              </div>
              <p className="helper-text">
                This form logic also lives in the same component.
              </p>
            </div>

            <form className="form-grid" onSubmit={(event) => addLesson(event, form)}>
              <label>
                Title
                <input
                  type="text"
                  name="title"
                  value={form.title}
                  onChange={handleFormChange}
                  placeholder="Build a lesson topic"
                />
              </label>

              <label>
                Category
                <select
                  name="category"
                  value={form.category}
                  onChange={handleFormChange}
                >
                  <option value="Foundations">Foundations</option>
                  <option value="Hooks">Hooks</option>
                  <option value="UI">UI</option>
                </select>
              </label>

              <label>
                Duration
                <input
                  type="number"
                  name="duration"
                  min="10"
                  step="5"
                  value={form.duration}
                  onChange={handleFormChange}
                />
              </label>

              <label>
                Priority
                <select
                  name="priority"
                  value={form.priority}
                  onChange={handleFormChange}
                >
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
              </label>

              <button className="primary-button" type="submit">
                Add lesson
              </button>
            </form>
          </article>
    )
}