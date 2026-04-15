import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { GalleryAlbum } from "./pages/GalleryAlbum";
import { GalleryHub } from "./pages/GalleryHub";
import { GalleryRoutes } from "./pages/GalleryRoutes";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="gallery" element={<GalleryRoutes />}>
          <Route index element={<GalleryHub />} />
          <Route path=":albumId" element={<GalleryAlbum />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
