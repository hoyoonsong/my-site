import { Link } from "react-router-dom";
import {
  GALLERY_FOLDER_BLURBS,
  type GallerySectionId,
  gallerySections,
} from "../data/gallery";

const ROUTES: Record<GallerySectionId, string> = {
  me: "/gallery/me",
  mentors: "/gallery/mentors",
  misc: "/gallery/misc",
};

export function GalleryHub() {
  return (
    <div className="page gallery-page">
      <header className="gallery-intro">
        <h1 className="page-title">Gallery</h1>
      </header>

      <ul className="gallery-hub-grid">
        {gallerySections.map((section) => {
          const cover = section.items[0]?.src;
          const count = section.items.length;
          return (
            <li key={section.id}>
              <Link to={ROUTES[section.id]} className="gallery-folder-card">
                <span className="gallery-folder-card__visual">
                  {cover ? (
                    <img src={cover} alt="" loading="lazy" decoding="async" />
                  ) : (
                    <span className="gallery-folder-card__empty">Empty</span>
                  )}
                </span>
                <span className="gallery-folder-card__body">
                  <span className="gallery-folder-card__heading">
                    {section.heading}
                  </span>
                  <span className="gallery-folder-card__blurb">
                    {GALLERY_FOLDER_BLURBS[section.id]}
                  </span>
                  <span className="gallery-folder-card__meta">
                    {count} {count === 1 ? "photo" : "photos"}
                  </span>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
