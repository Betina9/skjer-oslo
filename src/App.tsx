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

  const [toastMessage, setToastMessage] = useState("");
  const [isToastLeaving, setIsToastLeaving] = useState(false);

  useEffect(() => {
    localStorage.setItem("savedEvents", JSON.stringify(savedEventIds));
  }, [savedEventIds]);

  useEffect(() => {
    localStorage.setItem("savedEvents", JSON.stringify(savedEventIds));
  }, [savedEventIds]);

  useEffect(() => {
    if (!toastMessage) return;

    setIsToastLeaving(false);

    const fadeTimeout = setTimeout(() => {
      setIsToastLeaving(true);
    }, 1200);

    const removeTimeout = setTimeout(() => {
      setToastMessage("");
    }, 1500);

    return () => {
      clearTimeout(fadeTimeout);
      clearTimeout(removeTimeout);
    };
  }, [toastMessage]);

  const toggleSavedEvent = (eventId: number) => {
    setSavedEventIds((currentIds) => {
      const isAlreadySaved = currentIds.includes(eventId);

      setToastMessage(
        isAlreadySaved ? "Fjernet fra Mine planer" : "Lagt til i Mine planer"
      );

      return isAlreadySaved
        ? currentIds.filter((id) => id !== eventId)
        : [...currentIds, eventId];
    });
  };
  return (
    <>
      <Header savedCount={savedEventIds.length} />

      {toastMessage && (
        <div
          role="status"
          className={`fixed right-6 top-20 z-50 rounded-xl bg-gray-950 px-4 py-3 text-sm font-medium text-white shadow-lg ${
            isToastLeaving
              ? "animate-[fadeOut_0.3s_ease-in_forwards]"
              : "animate-[fadeIn_0.2s_ease-out]"
          }`}
        >
          {toastMessage}
        </div>
      )}

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
        <Route
          path="/events/:id"
          element={
            <EventDetailsPage
              savedEventIds={savedEventIds}
              onToggleSaved={toggleSavedEvent}
            />
          }
        />
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
