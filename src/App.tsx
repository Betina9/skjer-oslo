import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ExplorePage from "./pages/ExplorePage";
import SavedPage from "./pages/SavedPage";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<ExplorePage />} />
        <Route path="/saved" element={<SavedPage />} />
      </Routes>
    </>
  );
}

export default App;
