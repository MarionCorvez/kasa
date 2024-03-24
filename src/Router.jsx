import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/";
import About from "./pages/About/";
import House from "./pages/House/";
import NotFound from "./pages/NotFound/";

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
