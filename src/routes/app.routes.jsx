import { Routes, Route, Navigate } from "react-router-dom";

import { CreateMovie } from "../pages/CreateMovie";
import { MoviePreview } from "../pages/MoviePreview";

import { Home } from "../pages/Home";
import { Profile } from "../pages/Profile";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/createMovie" element={<CreateMovie />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/moviePreview/:id" element={<MoviePreview />} />

      <Route path="*" element={<Navigate to="/"/>}/>
    </Routes>
  );
}
