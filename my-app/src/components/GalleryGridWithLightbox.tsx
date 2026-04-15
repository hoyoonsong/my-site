import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from 'react'
import type { GalleryItem } from '../data/gallery'

const SWIPE_PX = 48

type Props = {
  items: GalleryItem[]
}

function tileLabel(item: GalleryItem): string {
  return item.caption ? `${item.title}. ${item.caption}` : item.title
}

export function GalleryGridWithLightbox({ items }: Props) {
  const [active, setActive] = useState<number | null>(null)
  const titleId = useId()
  const captionId = useId()
  const closeRef = useRef<HTMLButtonElement>(null)
  const touchStartX = useRef<number | null>(null)

  const indexBySrc = useMemo(() => {
    const m = new Map<string, number>()
    items.forEach((item, i) => m.set(item.src, i))
    return m
  }, [items])

  const count = items.length

  const close = useCallback(() => setActive(null), [])

  const goNext = useCallback(() => {
    setActive((i) => (i === null ? null : (i + 1) % count))
  }, [count])

  const goPrev = useCallback(() => {
    setActive((i) => (i === null ? null : (i - 1 + count) % count))
  }, [count])

  useEffect(() => {
    if (active === null) return

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') goPrev()
    }

    window.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const t = window.setTimeout(() => closeRef.current?.focus(), 0)

    return () => {
      window.clearTimeout(t)
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [active, close, goNext, goPrev])

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0]?.clientX ?? null
  }

  const onTouchEnd = (e: React.TouchEvent) => {
    const start = touchStartX.current
    touchStartX.current = null
    if (start === null) return
    const end = e.changedTouches[0]?.clientX
    if (end === undefined) return
    const dx = end - start
    if (dx > SWIPE_PX) goPrev()
    else if (dx < -SWIPE_PX) goNext()
  }

  if (count === 0) {
    return (
      <p className="gallery-empty">No photos in this album yet.</p>
    )
  }

  const activeItem = active !== null ? items[active] : null

  return (
    <>
      <ul className="gallery-grid">
        {items.map((item) => {
          const index = indexBySrc.get(item.src)
          const hasCaption = Boolean(item.caption)
          return (
            <li key={item.src}>
              <button
                type="button"
                className={
                  hasCaption
                    ? 'gallery-tile gallery-tile--has-caption'
                    : 'gallery-tile'
                }
                onClick={() => setActive(index === undefined ? null : index)}
                aria-label={`Open fullscreen: ${tileLabel(item)}`}
              >
                <span className="gallery-tile__frame">
                  <img
                    src={item.src}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 600px) 50vw, (max-width: 900px) 33vw, 240px"
                  />
                  {hasCaption ? (
                    <span className="gallery-tile__overlay" aria-hidden="true">
                      <span className="gallery-tile__overlay-caption">
                        {item.caption}
                      </span>
                    </span>
                  ) : null}
                </span>
                <span className="gallery-tile__title">{item.title}</span>
              </button>
            </li>
          )
        })}
      </ul>

      {active !== null && activeItem ? (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          aria-describedby={activeItem.caption ? captionId : undefined}
        >
          <button
            type="button"
            className="lightbox__backdrop"
            aria-label="Close gallery"
            onClick={close}
          />

          <div className="lightbox__wrap">
            <button
              type="button"
              className="lightbox__nav lightbox__nav--prev"
              aria-label="Previous photo"
              onClick={(e) => {
                e.stopPropagation()
                goPrev()
              }}
            >
              ‹
            </button>

            <figure
              className="lightbox__stage"
              onClick={(e) => e.stopPropagation()}
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              <button
                ref={closeRef}
                type="button"
                className="lightbox__close"
                aria-label="Close"
                onClick={close}
              >
                ×
              </button>
              <img
                src={activeItem.src}
                alt={tileLabel(activeItem)}
                className="lightbox__img"
                decoding="async"
              />
              <figcaption className="lightbox__meta">
                <span id={titleId} className="lightbox__title">
                  {activeItem.title}
                </span>
                {activeItem.caption ? (
                  <span id={captionId} className="lightbox__cap">
                    {activeItem.caption}
                  </span>
                ) : null}
                <span className="lightbox__count">
                  {active + 1} / {count}
                </span>
              </figcaption>
            </figure>

            <button
              type="button"
              className="lightbox__nav lightbox__nav--next"
              aria-label="Next photo"
              onClick={(e) => {
                e.stopPropagation()
                goNext()
              }}
            >
              ›
            </button>
          </div>
        </div>
      ) : null}
    </>
  )
}
