import { useId, useMemo, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { GalleryGridWithLightbox } from "../components/GalleryGridWithLightbox";
import {
  type GalleryItem,
  type GallerySectionId,
  getGallerySection,
} from "../data/gallery";

function itemMatchesQuery(item: GalleryItem, needle: string): boolean {
  if (!needle) return true;
  const t = item.title.toLowerCase();
  const c = (item.caption ?? "").toLowerCase();
  return t.includes(needle) || c.includes(needle);
}

const VALID_IDS = new Set<GallerySectionId>(["me", "mentors", "misc"]);

function isGallerySectionId(s: string): s is GallerySectionId {
  return VALID_IDS.has(s as GallerySectionId);
}

export function GalleryAlbum() {
  const { albumId } = useParams<{ albumId: string }>();
  const searchId = useId();
  const [query, setQuery] = useState("");

  const section =
    albumId && isGallerySectionId(albumId)
      ? getGallerySection(albumId)
      : undefined;

  const filteredItems = useMemo(() => {
    if (!section) return [];
    const needle = query.trim().toLowerCase();
    if (!needle) return section.items;
    return section.items.filter((item) => itemMatchesQuery(item, needle));
  }, [section, query]);

  if (!albumId || !isGallerySectionId(albumId) || !section) {
    return <Navigate to="/gallery" replace />;
  }

  const emptyMessage =
    section.items.length > 0 &&
    filteredItems.length === 0 &&
    query.trim() !== ""
      ? "No photos match your search."
      : undefined;

  return (
    <div className="page gallery-page">
      <nav className="gallery-breadcrumb" aria-label="Breadcrumb">
        <Link to="/gallery">Gallery</Link>
        <span className="gallery-breadcrumb__sep" aria-hidden="true">
          /
        </span>
        <span className="gallery-breadcrumb__current">{section.heading}</span>
      </nav>

      <header className="gallery-intro gallery-intro--album">
        <h1 className="page-title">{section.heading}</h1>
      </header>

      <div className="gallery-album-search">
        <label
          className="gallery-album-search__label"
          htmlFor={searchId}
        ></label>
        <input
          id={searchId}
          className="gallery-album-search__input"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search this album"
          autoComplete="off"
          spellCheck={false}
        />
      </div>

      <GalleryGridWithLightbox
        items={filteredItems}
        emptyMessage={emptyMessage}
      />
    </div>
  );
}
