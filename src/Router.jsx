import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import House from "./pages/House/House.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";

export default function Router() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/logements/:id" element={<House />} />
        <Route path="*" element={<Navigate to="/404" />} />
        <Route path="/404" element={<NotFound />} />
      </Routes>
    </>
  );
}
