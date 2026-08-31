import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import ExplorePage from "./pages/ExplorePage";
import SavedPage from "./pages/SavedPage";
import EventDetailsPage from "./pages/EventDetailsPage";
import EventsPage from "./pages/EventsPage";

function App() {
  const [savedEventIds, setSavedEventIds] = useState<number[]>(() => {
    const saved = localStorage.getItem("savedEvents");

    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("savedEvents", JSON.stringify(savedEventIds));
  }, [savedEventIds]);

  const toggleSavedEvent = (eventId: number) => {
    setSavedEventIds((currentIds) =>
      currentIds.includes(eventId)
        ? currentIds.filter((id) => id !== eventId)
        : [...currentIds, eventId]
    );
  };
  return (
    <>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <ExplorePage
              savedEventIds={savedEventIds}
              onToggleSaved={toggleSavedEvent}
            />
          }
        />
        <Route
          path="/saved"
          element={
            <SavedPage
              savedEventIds={savedEventIds}
              onToggleSaved={toggleSavedEvent}
            />
          }
        />
        <Route path="/events/:id" element={<EventDetailsPage />} />
        <Route
          path="/events"
          element={
            <EventsPage
              savedEventIds={savedEventIds}
              onToggleSaved={toggleSavedEvent}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
