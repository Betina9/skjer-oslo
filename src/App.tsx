import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import ExplorePage from "./pages/ExplorePage";
import SavedPage from "./pages/SavedPage";
import EventDetailsPage from "./pages/EventDetailsPage";

function App() {
  const [savedEventIds, setSavedEventIds] = useState<number[]>([]);

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
      </Routes>
    </>
  );
}

export default App;
