import { Routes, Route } from "react-router-dom";
import { useReducer } from "react";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import SavedPage from "./pages/SavedPage";
import NavBar from "./components/NavBar";

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      if (state.find(item => item.code === action.payload.code)) {
        return state;
      }
      return [...state, action.payload];

    case "REMOVE":
      return state.filter(item => item.code !== action.payload);

    default:
      return state;
  }
}

function App() {
  const [saved, dispatch] = useReducer(reducer, []);

  return (
    <>
      <NavBar savedCount={saved.length} />
      <Routes>
        <Route path="/" element={<HomePage dispatch={dispatch} />} />
        <Route path="/product/:barcode" element={<DetailPage />} />
        <Route path="/saved" element={<SavedPage saved={saved} dispatch={dispatch} />} />
      </Routes>
    </>
  );
}

export default App;