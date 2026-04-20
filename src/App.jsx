import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import SavedPage from "./pages/SavedPage";
import NavBar from "./components/NavBar";

function App() {
  // ✅ FIX HERE
  const saved = useSelector((state) => state.saved || []);

  return (
    <>
      <NavBar savedCount={saved.length} />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:barcode" element={<DetailPage />} />

        {/* ❌ DO NOT PASS PROPS */}
        <Route path="/saved" element={<SavedPage />} />
      </Routes>
    </>
  );
}

export default App;