import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ExplorePage from "./pages/ExplorePage";
import SavedPage from "./pages/SavedPage";
import EventDetailsPage from "./pages/EventDetailsPage";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<ExplorePage />} />
        <Route path="/saved" element={<SavedPage />} />
        <Route path="/events/:id" element={<EventDetailsPage />} />
      </Routes>
    </>
  );
}

export default App;
