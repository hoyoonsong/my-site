import { Link, Navigate, useParams } from 'react-router-dom'
import { GalleryGridWithLightbox } from '../components/GalleryGridWithLightbox'
import {
  type GallerySectionId,
  getGallerySection,
} from '../data/gallery'

const VALID_IDS = new Set<GallerySectionId>(['me', 'mentors', 'misc'])

function isGallerySectionId(s: string): s is GallerySectionId {
  return VALID_IDS.has(s as GallerySectionId)
}

export function GalleryAlbum() {
  const { albumId } = useParams<{ albumId: string }>()

  if (!albumId || !isGallerySectionId(albumId)) {
    return <Navigate to="/gallery" replace />
  }

  const section = getGallerySection(albumId)
  if (!section) {
    return <Navigate to="/gallery" replace />
  }

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

      <GalleryGridWithLightbox items={section.items} />
    </div>
  )
}
