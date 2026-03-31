import React, { useState } from "react";
import Header from "./components/Header";
import StatsContainer from "./components/StatsContainer";
import Filters from "./components/Filters";
import LessonForm from "./components/LessonForm";
import LessonList from "./components/LessonList";

const initialLessons = [
  {
    id: 1,
    title: "Components and Props",
    category: "Foundations",
    duration: 45,
    priority: "high",
    status: "planned",
  },
  {
    id: 2,
    title: "State with useState",
    category: "Hooks",
    duration: 50,
    priority: "medium",
    status: "planned",
  },
  {
    id: 3,
    title: "Form Inputs",
    category: "UI",
    duration: 35,
    priority: "low",
    status: "draft",
  },
  {
    id: 4,
    title: "Conditional Rendering",
    category: "Foundations",
    duration: 40,
    priority: "high",
    status: "done",
  },
];

export default function App() {
  const [lessons, setLessons] = useState(initialLessons);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [showOnlyHighPriority, setShowOnlyHighPriority] = useState(false);

  const filteredLessons = lessons.filter((lesson) => {
    const matchesSearch =
      lesson.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lesson.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || lesson.status === statusFilter;
    const matchesCategory =
      categoryFilter === "all" || lesson.category === categoryFilter;
    const matchesPriority = !showOnlyHighPriority || lesson.priority === "high";

    return matchesSearch && matchesStatus && matchesCategory && matchesPriority;
  });

  const plannedCount = lessons.filter(
    (lesson) => lesson.status === "planned",
  ).length;
  const doneCount = lessons.filter((lesson) => lesson.status === "done").length;
  const totalMinutes = lessons.reduce(
    (total, lesson) => total + Number(lesson.duration),
    0,
  );

  let stats = [
    {
      label: "Total Lessons",
      stat: lessons.length,
    },
    {
      label: "Planned",
      stat: plannedCount,
    },
    {
      label: "Minutes Mapped",
      stat: totalMinutes,
    },
  ];

  function handleAddLesson(event, form) {
    event.preventDefault();

    if (!form.title.trim()) {
      return;
    }

    const nextLesson = {
      id: Date.now(),
      title: form.title.trim(),
      category: form.category,
      duration: Number(form.duration),
      priority: form.priority,
      status: "planned",
    };

    setLessons((currentLessons) => [nextLesson, ...currentLessons]);
    setForm({ ...emptyForm });
  }

  function handleToggleStatus(id) {
    setLessons((currentLessons) =>
      currentLessons.map((lesson) => {
        if (lesson.id !== id) {
          return lesson;
        }

        if (lesson.status === "draft") {
          return { ...lesson, status: "planned" };
        }

        if (lesson.status === "planned") {
          return { ...lesson, status: "done" };
        }

        return { ...lesson, status: "draft" };
      }),
    );
  }

  function handleDeleteLesson(id) {
    setLessons((currentLessons) =>
      currentLessons.filter((lesson) => lesson.id !== id),
    );
  }

  function clearFilters() {
    setSearchTerm("");
    setStatusFilter("all");
    setCategoryFilter("all");
    setShowOnlyHighPriority(false);
  }

  return (
    <div className="page-shell">
      <main className="app-card">
        <Header />
        <StatsContainer stats={stats} />
        <section className="grid grid-two">
          <Filters
            searchText={searchTerm}
            setSearchText={setSearchTerm}
            status={statusFilter}
            setStatus={setStatusFilter}
            category={categoryFilter}
            setCategory={setCategoryFilter}
            showOnlyHighPriority={showOnlyHighPriority}
            setShowOnlyHighPriority={setShowOnlyHighPriority}
            clearFilters={clearFilters}
          />
          <LessonForm addLesson={handleAddLesson} />
        </section>

        <LessonList
          lessons={filteredLessons}
          advanceLessonStatus={handleToggleStatus}
          deleteLesson={handleDeleteLesson}
          doneCount={doneCount}
        />
      </main>
    </div>
  );
}
