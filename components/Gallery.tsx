"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { GalleryImage } from "@/data/projects"
import styles from "./portfolio.module.scss"

// Screenshot grid with an in-page lightbox. Built on <dialog>: the browser handles Esc,
// focus trapping and the inert page behind it. Arrow keys / buttons move between images.
export default function Gallery({ images }: { images: GalleryImage[] }) {
    const dialogRef = useRef<HTMLDialogElement>(null)
    const [index, setIndex] = useState<number | null>(null)
    const current = index === null ? null : images[index]
    const many = images.length > 1

    useEffect(() => {
        const dialog = dialogRef.current
        if (!dialog) return
        if (index !== null && !dialog.open) dialog.showModal()
        if (index === null && dialog.open) dialog.close()
    }, [index])

    const step = (delta: number) => setIndex(i => (i === null ? i : (i + delta + images.length) % images.length))

    function onKeyDown(e: React.KeyboardEvent) {
        if (!many) return
        if (e.key === "ArrowRight") step(1)
        if (e.key === "ArrowLeft") step(-1)
    }

    return (
        <>
            <div className={styles.galleryGrid}>
                {images.map((shot, i) => (
                    <figure key={shot.src}>
                        <button type="button" className={styles.galleryImage} onClick={() => setIndex(i)} aria-label={`Open screenshot: ${shot.caption}`}>
                            <Image src={shot.src} alt={shot.caption} fill sizes="(max-width: 768px) 100vw, 50vw" />
                        </button>
                        <figcaption>{shot.caption}</figcaption>
                    </figure>
                ))}
            </div>

            <dialog
                ref={dialogRef}
                className={styles.lightbox}
                aria-label="Screenshot viewer"
                onClose={() => setIndex(null)}
                onKeyDown={onKeyDown}
                // A click on the backdrop lands on the <dialog> itself, not on its content
                onClick={e => { if (e.target === e.currentTarget) setIndex(null) }}
            >
                {current && (
                    <figure className={styles.lightboxFigure}>
                        <div className={styles.lightboxImage}>
                            <Image key={current.src} src={current.src} alt={current.caption} fill sizes="95vw" quality={90} />
                        </div>
                        <figcaption>
                            {current.caption}
                            {many && <span className={styles.lightboxCount}>{index! + 1} / {images.length}</span>}
                        </figcaption>
                    </figure>
                )}

                <button type="button" className={styles.lightboxClose} onClick={() => setIndex(null)} aria-label="Close" autoFocus>
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" /></svg>
                </button>
                {many && (
                    <>
                        <button type="button" className={`${styles.lightboxNav} ${styles.lightboxPrev}`} onClick={() => step(-1)} aria-label="Previous screenshot">
                            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 6l-6 6 6 6" /></svg>
                        </button>
                        <button type="button" className={`${styles.lightboxNav} ${styles.lightboxNext}`} onClick={() => step(1)} aria-label="Next screenshot">
                            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg>
                        </button>
                    </>
                )}
            </dialog>
        </>
    )
}
