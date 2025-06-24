import Home from "./pages/Home";
import "./css/App.css";
import Favorites from "./pages/Favorites";
import { Routes, Route } from "react-router-dom";
import { MovieProvider } from "./contexts/MovieContext";
import NavBar from "./components/NavBar";

// The app demonstrates changing pages while keeping the Navbar during page changes, via useContext hook
// in MovieContext.jsx

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
